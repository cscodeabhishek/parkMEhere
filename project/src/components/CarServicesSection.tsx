import React from 'react';
import { format } from 'date-fns';
import type { CarService } from '../types';

interface Props {
  services: CarService[];
  onBook: (type: CarService['type']) => void;
}

export function CarServicesSection({ services, onBook }: Props) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Car Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {(['wash', 'maintenance', 'repair'] as const).map((type) => (
          <button
            key={type}
            onClick={() => onBook(type)}
            className="p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <p className="font-semibold capitalize">{type}</p>
            <p className="text-sm text-gray-600">Book Now</p>
          </button>
        ))}
      </div>

      <h3 className="font-semibold mb-3 sm:mb-4">Upcoming Services</h3>
      <div className="space-y-3 sm:space-y-4">
        {services
          .filter((service) => service.status !== 'completed')
          .map((service) => (
            <div
              key={service.id}
              className="p-3 sm:p-4 rounded-lg border bg-gray-50"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <p className="font-semibold capitalize">{service.type}</p>
                  <p className="text-sm text-gray-600">
                    {format(service.date, 'dd MMM yyyy, HH:mm')}
                  </p>
                </div>
                <span className={`px-2 py-1 rounded text-sm capitalize w-fit ${
                  service.status === 'confirmed' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {service.status}
                </span>
              </div>
            </div>
          ))}

        {services.length === 0 && (
          <p className="text-center text-gray-500 py-4">
            No upcoming services
          </p>
        )}
      </div>
    </div>
  );
}