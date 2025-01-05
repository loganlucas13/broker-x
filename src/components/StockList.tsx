import React from 'react';
import Stock from './Stock';

function StockList() {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-rose-400 font-semibold">Top 5 Stocks (S&P 500)</span>
            <div className="px-6 py-3 flex flex-col gap-2 border-2 border-rose-400 rounded-3xl bg-rose-50">
                <Stock name="Alphabet Class A" symbol="GOOGL"></Stock>
                <Stock name="Amazon" symbol="AMZN"></Stock>
                <Stock name="Apple" symbol="AAPL"></Stock>
                <Stock name="Microsoft" symbol="MSFT"></Stock>
                <Stock name="NVIDIA" symbol="NVDA"></Stock>
            </div>
        </div>
    );
}

export default StockList;