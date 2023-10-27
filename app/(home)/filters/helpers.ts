import { VehicleType } from '@/components/vehicleTabs/types';

export const getFillColor = (type: VehicleType, current: VehicleType) => {
  return type === current ? '#FD4100' : '#8C929B';
};
