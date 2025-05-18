import { useState } from 'react';
import { withdraw, deposit, checkBalance, validatePin } from '../service/atmService';
import AtmCard from '../components/AtmCard';
import TransactionReceipt from '../components/TransactionReceipt';

const AtmMachine = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [amount, setAmount] = useState('');
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [message, setMessage] = useState('Please insert your card');
  const [balance, setBalance] = useState(0);
  const [transaction, setTransaction] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCardInsert = () => {
    setCurrentScreen('auth');
    setMessage('Please enter your PIN');
  };

  const handlePinSubmit = async () => {
    try {
      const isValid = await validatePin(accountNumber, pin);
      if (isValid) {
        setCurrentScreen('menu');
        setMessage('Select an option');
      } else {
        setMessage('Invalid PIN. Please try again');
        setPin('');
      }
    } catch (error) {
      setMessage('Error validating PIN');
    }
  };

  const handleWithdraw = () => {
    setSelectedOption('withdraw');
    setCurrentScreen('amount');
    setMessage('Enter withdrawal amount');
  };

  const handleDeposit = () => {
    setSelectedOption('deposit');
    setCurrentScreen('amount');
    setMessage('Enter deposit amount');
  };

  const handleBalanceCheck = async () => {
    try {
      const response = await checkBalance(accountNumber);
      if (response.success) {
        setBalance(response.newBalance);
        setTransaction({
          type: 'Balance Inquiry',
          amount: 0,
          success: true
        });
        setCurrentScreen('receipt');
        setMessage(`Current balance: $${response.newBalance.toFixed(2)}`);
      } else {
        setMessage(response.message);
      }
    } catch (error) {
      setMessage('Error checking balance');
    }
  };

  const handleTransactionSubmit = async () => {
    if (!amount || isNaN(amount)) {
      setMessage('Please enter a valid amount');
      return;
    }

    try {
      let response;
      if (selectedOption === 'withdraw') {
        response = await withdraw(accountNumber, parseFloat(amount));
      } else {
        response = await deposit(accountNumber, parseFloat(amount));
      }

      if (response.success) {
        setBalance(response.newBalance);
        setTransaction({
          type: selectedOption === 'withdraw' ? 'Withdrawal' : 'Deposit',
          amount: parseFloat(amount),
          success: true
        });
        setCurrentScreen('receipt');
        setMessage(`Successfully ${selectedOption === 'withdraw' ? 'withdrew' : 'deposited'} $${amount}`);
      } else {
        setMessage(response.message);
      }
    } catch (error) {
      setMessage(`Error processing ${selectedOption}`);
    }
  };

const handleExit = () => {
  if (currentScreen === 'auth') {
    setCurrentScreen('welcome');
    setMessage('Please insert your card');
  } else if(currentScreen === 'amount' || currentScreen === 'receipt' || currentScreen == 'menu'){
    setCurrentScreen('welcome');
    setMessage('Please insert your card');
  }
  else if (currentScreen === 'welcome') {
    window.location.href = "/";
    return;
  }

  // Reset all inputs
  setAccountNumber('');
  setPin('');
  setAmount('');
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-white-900 to-blue-200 p-4 md:p-8">
      <div className="w-full max-w-md mx-auto">

        {/* ATM Machine Outer Shell */}
        <div className="bg-gray-800 rounded-t-3xl rounded-b-lg shadow-2xl overflow-hidden border-t-8 border-gray-700">

          {/* ATM Top Panel */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-800 p-4 flex items-center">

            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <h1 className="text-xl font-bold text-white flex-grow text-center">GLOBAL BANK <span className='bg-white text-blue-600 px-2 rounded-md'> ATM </span></h1>

          </div>
          
          {/* ATM Screen */}
          <div className="p-4 md:p-6 bg-gradient-to-b from-blue-50 to-gray-100">

            {/* Card Slot */}
            {currentScreen === 'welcome' && (

              <div className="relative mb-4">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-700 rounded-t"></div>
                <AtmCard onInsert={handleCardInsert} visible={true} />
              </div>

            )}


            {/* Main Screen */}
            
            <div className=" p-1 rounded-lg mb-4">

              <div className="bg-white rounded-lg p-4 min-h-[200px] md:min-h-[240px] flex flex-col">

                {currentScreen === 'welcome' && (

                  <div className="flex flex-col items-center justify-center h-full">

                    <div className="text-center mb-4">

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>

                      <p className="text-lg font-medium text-gray-600">Please swipe your card</p>
                      <p className="text-sm text-gray-400 mt-1">Insert your bank card to begin</p>

                    </div>

                  </div>
                )}

                {currentScreen === 'auth' && (

                  <div className="flex flex-col justify-between h-full">
                    <div className="space-y-4">

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Account Number</label>
                        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Enter your account number" className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">PIN</label>
                        <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Enter 4-digit PIN" maxLength="4" className="w-full px-4 py-3 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      </div>

                    </div>

                    <button onClick={handlePinSubmit} className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mt-4">
                      Authenticate
                    </button>

                  </div>
                )}

                {currentScreen === 'menu' && (

                  <div className="flex flex-col items-center justify-center h-full">

                    <p className="text-gray-800 text-center font-medium mb-4">
                      {message}
                    </p>

                    <p className="text-sm text-gray-500 text-center">
                      Please select an option below
                    </p>

                  </div>

                )}

                {currentScreen === 'amount' && (

                  <div className="flex flex-col justify-between h-full">

                    <div className="space-y-4">

                      <p className="text-gray-800 font-medium text-center">
                        {message}
                      </p>

                      <div className="relative">

                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-gray-500">$</span>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" min="0" step="0.01" className="w-full pl-10 pr-4 py-3 text-2xl text-center font-bold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {[100, 200, 500].map((value) => (

                          <button key={value} onClick={() => setAmount(value.toString())} className="bg-gray-100 hover:bg-gray-200 py-2 rounded-lg font-medium text-gray-700" >
                            ${value}
                          </button>

                        ))}
                      </div>

                    </div>

                    <button onClick={handleTransactionSubmit} className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg mt-4">
                      Confirm
                    </button>

                  </div>
                )}

                {currentScreen === 'receipt' && transaction && (

                  <TransactionReceipt  transaction={transaction} balance={balance}  onContinue={() => setCurrentScreen('menu')}/>

                )}

              </div>

            </div>

          </div>
          
          {/* Keypad Area */}
          <div className="bg-blue-50 p-4 md:p-6 rounded-b-lg">

            <div className="grid grid-cols-3 gap-3">
              
              {currentScreen === 'menu' && (

                <>

                  <button onClick={handleWithdraw} className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-2 rounded-lg font-bold flex flex-col items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    Withdraw

                  </button>

                  <button onClick={handleDeposit} className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-2 rounded-lg font-bold flex flex-col items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    Deposit

                  </button>

                  <button onClick={handleBalanceCheck} className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-2 rounded-lg font-bold flex flex-col items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>

                    Balance

                  </button>

                </>
              )}

              <button onClick={handleExit} className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold col-span-3 flex items-center justify-center mt-2">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>

                Exit

              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmMachine;