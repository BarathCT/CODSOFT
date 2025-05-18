import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePin } from '../service/atmService';

const AuthPage = ({ onAuthSuccess }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const isValid = await validatePin(accountNumber, pin);
      if (isValid) {
        onAuthSuccess(accountNumber);
        navigate('/atm');
      } else {
        setError('Invalid account number or PIN');
      }
    } catch (err) {
      setError('Error validating credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">ATM Authentication</h1>
        
            {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
            </div>
            )}
        
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Account Number
                    </label>

                    <input type="text" id="accountNumber" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>
            
                <div>
                    <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-1">
                        PIN
                    </label>

                    <input type="password" id="pin" value={pin} onChange={(e) => setPin(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" maxLength="4" required/>
                </div>
            
                <button type="submit" className="w-full cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Authenticate
                </button>

            </form>
        </div>
    </div>
  );
};

export default AuthPage;