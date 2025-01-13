import React from 'react';
import Stock from './Stock';
import Label from './Label';

function StockList() {
    return (
        <div className="flex flex-col gap-2">
            <Label variant="small" text="Top 5 Stocks (S&P 500)"></Label>
            <div className="px-6 py-3 flex flex-col gap-2 border-2 border-stone-600 rounded-3xl bg-stone-200">
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
