import React from 'react';
import { Car, Zap, Wheelchair } from 'lucide-react';
import type { ParkingSpot as ParkingSpotType } from '../types';

interface Props {
  spot: ParkingSpotType;
  onSelect: (spot: ParkingSpotType) => void;
}

export function ParkingSpot({ spot, onSelect }: Props) {
  const getIcon = () => {
    switch (spot.type) {
      case 'electric':
        return <Zap className="w-5 h-5" />;
      case 'handicap':
        return <Wheelchair className="w-5 h-5" />;
      default:
        return <Car className="w-5 h-5" />;
    }
  };

  return (
    <button
      onClick={() => onSelect(spot)}
      disabled={spot.isOccupied}
      className={`
        p-4 rounded-lg flex flex-col items-center justify-center gap-2
        transition-all duration-200 
        ${
          spot.isOccupied
            ? 'bg-red-100 cursor-not-allowed'
            : 'bg-green-100 hover:bg-green-200 cursor-pointer'
        }
      `}
    >
      {getIcon()}
      <span className="font-semibold">{spot.number}</span>
      <span className="text-sm text-gray-600">
        {spot.isOccupied ? 'Occupied' : 'Available'}
      </span>
    </button>
  );
}