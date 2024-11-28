import { useState } from 'react';
import { Car, ArrowLeft } from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { FASTagSection } from './components/FASTagSection';
import { InsuranceSection } from './components/InsuranceSection';
import { ChallanSection } from './components/ChallanSection';
import { CarServicesSection } from './components/CarServicesSection';
import type { FASTagAccount, Insurance, Challan, CarService } from './types';

// Mock data remains the same
const mockFastag: FASTagAccount = {
  id: '1',
  balance: 500,
  vehicleNumber: 'KA01AB1234',
};

const mockInsurance: Insurance = {
  id: '1',
  vehicleNumber: 'KA01AB1234',
  expiryDate: new Date('2024-05-15'),
  provider: 'SafeDrive Insurance',
  policyNumber: 'POL123456789',
};

const mockChallans: Challan[] = [
  {
    id: '1',
    vehicleNumber: 'KA01AB1234',
    amount: 500,
    date: new Date('2024-02-15'),
    description: 'Signal Jump',
    isPaid: false,
  },
];

const mockServices: CarService[] = [
  {
    id: '1',
    type: 'maintenance',
    vehicleNumber: 'KA01AB1234',
    date: new Date('2024-03-20'),
    status: 'confirmed',
    price: 2000,
  },
];

type ActiveSection = 'home' | 'fastag' | 'insurance' | 'challan' | 'service';

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'fastag':
        return (
          <FASTagSection
            account={mockFastag}
            onRecharge={(amount) => alert(`Recharging ₹${amount}`)}
          />
        );
      case 'insurance':
        return (
          <InsuranceSection
            insurance={mockInsurance}
            onRenew={() => alert('Renewing insurance')}
          />
        );
      case 'challan':
        return (
          <ChallanSection
            challans={mockChallans}
            onPay={(challan) => alert(`Paying challan: ₹${challan.amount}`)}
          />
        );
      case 'service':
        return (
          <CarServicesSection
            services={mockServices}
            onBook={(type) => alert(`Booking ${type} service`)}
          />
        );
      default:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ServiceCard
              title="Find Parking"
              icon="parking"
              description="Book parking spots in advance"
              onClick={() => alert('Parking feature coming soon!')}
            />
            <ServiceCard
              title="FASTag Recharge"
              icon="fastag"
              description="Quick and easy FASTag recharge"
              onClick={() => setActiveSection('fastag')}
            />
            <ServiceCard
              title="Vehicle Insurance"
              icon="insurance"
              description="Renew your vehicle insurance"
              onClick={() => setActiveSection('insurance')}
            />
            <ServiceCard
              title="Pay Challans"
              icon="challan"
              description="Check and pay traffic challans"
              onClick={() => setActiveSection('challan')}
            />
            <ServiceCard
              title="Car Services"
              icon="service"
              description="Book car wash and maintenance"
              onClick={() => setActiveSection('service')}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center gap-2">
            {activeSection !== 'home' && (
              <button
                onClick={() => setActiveSection('home')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <button 
              onClick={() => setActiveSection('home')}
              className="flex items-center gap-2"
            >
              <Car className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              <h1 className="text-xl sm:text-3xl font-bold text-gray-900">parkMEhere</h1>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-4 sm:py-8">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;