import { ReactNode } from 'react';

export enum VehicleType {
  Car,
  Tractor,
  Moto,
}

export interface VehicleTabsProps {
  current: VehicleType;
  tabs: { type: VehicleType; icon: ReactNode }[];
  onChange: (type: VehicleType) => void;
}
