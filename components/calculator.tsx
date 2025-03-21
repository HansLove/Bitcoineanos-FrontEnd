"use client";
import React, { useState, useEffect } from 'react';

interface ExchangeRates {
  usd: number;
  jpy: number;
  mxn: number;
}

function Calculator() {
  const [btcAmount, setBtcAmount] = useState<string>('1');
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,mxn,jpy,gbp,eur'
        );
        const data = await response.json();
        setRates({
          usd: data.bitcoin.usd,
          jpy: data.bitcoin.jpy,
          mxn: data.bitcoin.mxn,
        });
        setLoading(false);
      } catch (err) {
        setError('Error fetching exchange rates. Please try again later.');
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(2) + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(2) + "k";
    }
    return num.toFixed(2);
  };
  
  const calculateRate = (rate: number): string => {
    const amount = parseFloat(btcAmount) || 0;
    return formatNumber(amount * rate);
  };

  const CurrencyCard = ({ symbol, rate, currency }: { symbol: string; rate: number; currency: string }) => (
    <div className="bg-slate-900 p-2 rounded-lg shadow-md">
      <div className="text-lg font-semibold text-gray-50">{symbol} {calculateRate(rate)}</div>
      <div className="text-xs text-gray-50 mt-1">{currency}</div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading exchange rates...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-fit bg-[#1b2139] p-2 rounded-xl">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center  mb-2">
         
          <p className="text-lg font-semibold text-gray-100">Bitcoin Calculator</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-lg shadow-md mb-8">
          <label className="block text-sm font-medium text-gray-200 mb-2">
            Enter Bitcoin Amount:
          </label>
          <input
            type="number"
            value={btcAmount}
            onChange={(e) => setBtcAmount(e.target.value)}
            className="w-full px-4 py-2 border text-white bg-slate-800 border-slate-700 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="Enter BTC amount"
            min="0"
            step="any"
          />
        </div>

        {rates && (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2">
            <CurrencyCard symbol="$" rate={rates.usd} currency="US Dollar (USD)" />
            <CurrencyCard symbol="¥" rate={rates.jpy} currency="Jpn Yen (JPY)" />
            <CurrencyCard symbol="$" rate={rates.mxn} currency="Peso (MXN)" />
          </div>
        )}

        
      </div>
    </div>
  );
}

export default Calculator;