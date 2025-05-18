const TransactionReceipt = ({ transaction, balance, onContinue }) => {

  return (
        <div className="receipt bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-inner">

            <div className="receipt-header text-center mb-4">
                <h3 className="font-bold text-lg">GLOBAL BANK ATM</h3>
                <p className="text-sm text-gray-600">Transaction Receipt</p>
            </div>
      
            <div className="receipt-details space-y-2 mb-4">
                <div className="flex justify-between">
                    <span className="font-medium">Transaction:</span>
                    <span>{transaction.type}</span>
                </div>
                {transaction.amount > 0 && (
                    <div className="flex justify-between">
                        <span className="font-medium">Amount:</span>
                        <span>${transaction.amount.toFixed(2)}</span>
                    </div>
                )}
                <div className="flex justify-between">
                    <span className="font-medium">Status:</span>
                    <span className={transaction.success ? 'text-green-600' : 'text-red-600'}>
                        {transaction.success ? 'Completed' : 'Failed'}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="font-medium">Available Balance:</span>
                    <span>${balance.toFixed(2)}</span>
                </div>
            </div>
      
            <div className="receipt-footer text-xs text-center text-gray-500 mt-4">
                <p>Thank you for banking with us</p>
                <p className="mt-2">Keep this receipt for your records</p>
            </div>
      
            <button onClick={onContinue} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Continue
            </button>
        </div>
  );
};

export default TransactionReceipt;