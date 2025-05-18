const AtmCard = ({ onInsert, visible }) => {
  if (!visible) return null;

  return (
    <div className="atm-card mb-6 flex justify-center">
      <div
        onClick={onInsert}
        className="w-80 h-48 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 rounded-xl p-5 text-white shadow-xl hover:shadow-2xl cursor-pointer transition duration-300 ease-in-out relative"
      >
        {/* Card Header */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-semibold tracking-wide">GLOBAL BANK</p>
          </div>
          <div className="w-10 h-8 bg-yellow-400 rounded-sm shadow-inner border border-yellow-700"></div>
        </div>

        {/* Card Number */}
        <div className="mt-8 text-lg font-mono tracking-widest">
          2213 2223 2422 1322
        </div>

        {/* Card Footer */}
        <div className="mt-6 flex justify-between text-xs text-gray-200">
          <div>
            <p className="uppercase">Card Holder</p>
            <p className="font-semibold text-sm text-white">John Doe</p>
          </div>
          <div>
            <p className="uppercase">Valid Thru</p>
            <p className="font-semibold text-sm text-white">12/28</p>
          </div>
        </div>

        {/* Insert Label */}
        <div className="absolute bottom-2 w-full text-center">
          <p className="text-[11px] text-gray-300 tracking-wide animate-pulse">INSERT CARD</p>
        </div>
      </div>
    </div>
  );
};

export default AtmCard;
