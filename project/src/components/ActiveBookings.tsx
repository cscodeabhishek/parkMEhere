import React from 'react';
import { format } from 'date-fns';
import type { Booking } from '../types';

interface Props {
  bookings: Booking[];
  onCheckout: (booking: Booking) => void;
}

export function ActiveBookings({ bookings, onCheckout }: Props) {
  if (bookings.length === 0) {
    return (
      <div className="text-center p-4 bg-gray-50 rounded">
        <p className="text-gray-500">No active bookings</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="bg-white p-4 rounded-lg shadow border border-gray-200"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">Spot #{booking.spotId}</p>
              <p className="text-sm text-gray-600">
                Vehicle: {booking.vehicleNumber}
              </p>
              <p className="text-sm text-gray-600">
                Start: {format(booking.startTime, 'HH:mm')}
              </p>
            </div>
            <button
              onClick={() => onCheckout(booking)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Checkout
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}