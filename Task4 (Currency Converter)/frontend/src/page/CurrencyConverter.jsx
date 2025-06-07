import { useState, useEffect } from 'react'

const CurrencyConverter = () => {
const [amount, setAmount] = useState(1)
const [fromCurrency, setFromCurrency] = useState('USD')
const [toCurrency, setToCurrency] = useState('EUR')
const [exchangeRate, setExchangeRate] = useState(null)
const [convertedAmount, setConvertedAmount] = useState(0)
const [currencies, setCurrencies] = useState(['USD', 'EUR', 'GBP', 'JPY'])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

// Fetch available currencies on first render
useEffect(() => {
    const fetchCurrencies = async () => {

        try {
        const response = await fetch('https://api.frankfurter.app/currencies')
        const data = await response.json()
        setCurrencies(Object.keys(data))
        } catch (err) {
        console.error('Error fetching currencies:', err)
        setError('Failed to load currency list. Using default currencies.')
        }

    }
  
  fetchCurrencies()
}, [])


// Fetch exchange rate when currencies change
useEffect(() => {
    const fetchExchangeRate = async () => {
        if (!fromCurrency || !toCurrency || fromCurrency === toCurrency) {
        setExchangeRate(1)
        setConvertedAmount(amount)
        return
        }
        setLoading(true)
        setError(null)
        try {
        const response = await fetch(
            `http://localhost:8080/api/convert?from=${fromCurrency}&to=${toCurrency}`
        )
        
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rate')
        }
        
        const data = await response.json()
        setExchangeRate(data.rate)
        setConvertedAmount((amount * data.rate).toFixed(2))
        
        } catch (err) {
        setError(err.message)
        console.error('Error fetching exchange rate:', err)
        } finally {
        setLoading(false)
        }
    }

  fetchExchangeRate()

}, [fromCurrency, toCurrency])


// Recalculate when amount changes
useEffect(() => {
    if (exchangeRate !== null) {
        setConvertedAmount((amount * exchangeRate).toFixed(2))
    }
}, [amount, exchangeRate])

const handleAmountChange = (e) => {
  const value = Math.max(0, parseFloat(e.target.value) || 0)
  setAmount(value)
}

const handleFromCurrencyChange = (e) => {
  setFromCurrency(e.target.value)
}

const handleToCurrencyChange = (e) => {
  setToCurrency(e.target.value)
}

const swapCurrencies = () => {
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
}

return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">

        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">

            {/* Header */}
            <div className="bg-indigo-600 p-6 text-white">
                <h1 className="text-2xl font-bold text-center">Currency Converter</h1>
                <p className="text-center text-indigo-100 mt-1 text-sm">
                Real-time exchange rates
                </p>
            </div>

            {/* Main Content */}
            <div className="p-6">

            {error && (

                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center">

                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>

                    {error}

                </div>
            )}

            {/* Amount Input */}
            <div className="mb-6">

                <label className="block text-gray-700 text-sm font-medium mb-2">
                    Amount
                </label>

                <div className="relative">

                    <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full p-4 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    />
                    
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500 font-medium">
                        {fromCurrency}
                    </div>

                </div>

            </div>
            
            {/* Currency Selectors */}
            <div className="flex flex-col space-y-4 mb-6 sm:flex-row sm:space-y-0 sm:space-x-4">

                <div className="flex-1">
                    
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        From
                    </label>

                    <select
                    value={fromCurrency}
                    onChange={handleFromCurrencyChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    disabled={loading}
                    >
                        {currencies.map((currency) => (
                            <option key={`from-${currency}`} value={currency}>
                            {currency}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="flex items-center justify-center">

                    <button
                    onClick={swapCurrencies}
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    disabled={loading}
                    aria-label="Swap currencies"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >

                        <path
                        fillRule="evenodd"
                        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                        clipRule="evenodd"
                        />

                    </svg>

                </button>

            </div>

            <div className="flex-1">

                <label className="block text-gray-700 text-sm font-medium mb-2">
                    To
                </label>

                <select
                value={toCurrency}
                onChange={handleToCurrencyChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                disabled={loading}
                >

                    {currencies.map((currency) => (
                        <option key={`to-${currency}`} value={currency}>
                        {currency}
                        </option>
                    ))}

                </select>

            </div>

        </div>

        {/* Result Section */}

        <div className="bg-gray-50 rounded-lg p-6">

            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Conversion Result
            </h2>

            {loading ? (

                <div className="flex items-center justify-center py-4">

                    <svg
                        className="animate-spin -ml-1 mr-3 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >

                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    ></circle>

                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>

                </svg>

                <span className="text-gray-600">Loading exchange rate...</span>

            </div>

          ) : (

                <div>

                    <div className="flex items-end justify-between mb-2">

                        <span className="text-2xl font-bold text-gray-900">
                        {amount} {fromCurrency}
                        </span>

                        <span className="text-2xl font-bold text-indigo-600">
                        {convertedAmount} {toCurrency}
                        </span>

                    </div>

                    {exchangeRate && (
                        <div className="mt-4 pt-4 border-t border-gray-200">

                            <div className="flex justify-between text-sm text-gray-600">

                                <span>Exchange Rate:</span>

                                <span className="font-medium">
                                1 {fromCurrency} = {exchangeRate.toFixed(6)} {toCurrency}
                                </span>
                            </div>
                    
                        </div>
                    )}

                </div>

            )}
        </div>

      </div>
      
    </div>
    
  </div>
  )
}

export default CurrencyConverter