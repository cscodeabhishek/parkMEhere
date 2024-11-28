export interface ParkingSpot {
  id: string;
  number: string;
  isOccupied: boolean;
  rate: number;
}

export interface FASTagAccount {
  id: string;
  balance: number;
  vehicleNumber: string;
  lastRecharge?: Date;
}

export interface Insurance {
  id: string;
  vehicleNumber: string;
  expiryDate: Date;
  provider: string;
  policyNumber: string;
}

export interface Challan {
  id: string;
  vehicleNumber: string;
  amount: number;
  date: Date;
  description: string;
  isPaid: boolean;
}

export interface CarService {
  id: string;
  type: 'wash' | 'maintenance' | 'repair';
  vehicleNumber: string;
  date: Date;
  status: 'pending' | 'confirmed' | 'completed';
  price: number;
}