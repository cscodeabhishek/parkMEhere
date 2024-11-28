import React, { useState } from 'react';
import type { ParkingSpot } from '../types';

interface Props {
  selectedSpot: ParkingSpot | null;
  onBook: (vehicleNumber: string) => void;
  onCancel: () => void;
}

export function BookingForm({ selectedSpot, onBook, onCancel }: Props) {
  const [vehicleNumber, setVehicleNumber] = useState('');

  if (!selectedSpot) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Book Parking Spot</h2>
        <p className="mb-4">
          Spot Number: <span className="font-semibold">{selectedSpot.number}</span>
        </p>
        
        <input
          type="text"
          placeholder="Enter vehicle number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <div className="flex gap-4">
          <button
            onClick={() => onBook(vehicleNumber)}
            disabled={!vehicleNumber}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Confirm Booking
          </button>
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}