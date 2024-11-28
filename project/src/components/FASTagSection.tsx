import React, { useState } from 'react';
import type { FASTagAccount } from '../types';

interface Props {
  account: FASTagAccount;
  onRecharge: (amount: number) => void;
}

export function FASTagSection({ account, onRecharge }: Props) {
  const [amount, setAmount] = useState<number>(0);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">FASTag Balance</h2>
      
      <div className="mb-4 sm:mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Current Balance</p>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600">₹{account.balance}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Recharge Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            min="100"
            step="100"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[500, 1000, 2000].map((value) => (
            <button
              key={value}
              onClick={() => setAmount(value)}
              className="py-2 px-3 sm:px-4 bg-blue-50 rounded-md hover:bg-blue-100 text-sm sm:text-base"
            >
              ₹{value}
            </button>
          ))}
        </div>

        <button
          onClick={() => onRecharge(amount)}
          disabled={amount < 100}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          Recharge Now
        </button>
      </div>
    </div>
  );
}