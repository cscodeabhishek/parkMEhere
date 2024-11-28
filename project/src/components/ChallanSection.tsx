import React from 'react';
import { format } from 'date-fns';
import type { Challan } from '../types';

interface Props {
  challans: Challan[];
  onPay: (challan: Challan) => void;
}

export function ChallanSection({ challans, onPay }: Props) {
  const totalUnpaid = challans.reduce(
    (sum, challan) => sum + (challan.isPaid ? 0 : challan.amount),
    0
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Traffic Challans</h2>

      {totalUnpaid > 0 && (
        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-red-600">Total Pending Amount</p>
          <p className="text-2xl font-bold text-red-700">₹{totalUnpaid}</p>
        </div>
      )}

      <div className="space-y-4">
        {challans.map((challan) => (
          <div
            key={challan.id}
            className={`p-4 rounded-lg border ${
              challan.isPaid ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-semibold">{challan.description}</p>
                <p className="text-sm text-gray-600">
                  {format(challan.date, 'dd MMM yyyy')}
                </p>
              </div>
              <p className="font-bold">₹{challan.amount}</p>
            </div>
            
            {!challan.isPaid && (
              <button
                onClick={() => onPay(challan)}
                className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Pay Now
              </button>
            )}
          </div>
        ))}

        {challans.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No challans found
          </p>
        )}
      </div>
    </div>
  );
}