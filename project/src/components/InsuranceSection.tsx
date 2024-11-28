import React from 'react';
import { format } from 'date-fns';
import type { Insurance } from '../types';

interface Props {
  insurance: Insurance;
  onRenew: () => void;
}

export function InsuranceSection({ insurance, onRenew }: Props) {
  const daysUntilExpiry = Math.ceil(
    (insurance.expiryDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Vehicle Insurance</h2>
      
      <div className="space-y-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Policy Number</p>
          <p className="font-semibold">{insurance.policyNumber}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Provider</p>
          <p className="font-semibold">{insurance.provider}</p>
        </div>

        <div className={`p-4 rounded-lg ${
          daysUntilExpiry < 30 ? 'bg-red-50' : 'bg-green-50'
        }`}>
          <p className="text-sm text-gray-600">Expires On</p>
          <p className="font-semibold">
            {format(insurance.expiryDate, 'dd MMM yyyy')}
          </p>
          <p className={`text-sm ${
            daysUntilExpiry < 30 ? 'text-red-600' : 'text-green-600'
          }`}>
            {daysUntilExpiry} days remaining
          </p>
        </div>
      </div>

      <button
        onClick={onRenew}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Renew Insurance
      </button>
    </div>
  );
}