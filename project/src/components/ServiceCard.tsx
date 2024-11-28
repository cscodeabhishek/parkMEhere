import React from 'react';
import { Car, Tag, Shield, Receipt, Wrench } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: 'parking' | 'fastag' | 'insurance' | 'challan' | 'service';
  description: string;
  onClick: () => void;
}

export function ServiceCard({ title, icon, description, onClick }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'parking':
        return <Car className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'fastag':
        return <Tag className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'insurance':
        return <Shield className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'challan':
        return <Receipt className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'service':
        return <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <button
      onClick={onClick}
      className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 text-left w-full"
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
        <div className="p-2 sm:p-3 bg-blue-100 rounded-lg text-blue-600">
          {getIcon()}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </button>
  );
}