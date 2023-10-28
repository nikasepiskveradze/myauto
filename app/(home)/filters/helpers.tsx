import { VehicleType } from '@/components/molecules/vehicleTabs/types';
import { SelectOption } from '@/components/atoms/select/types';
import { CarIcon, MotoIcon, TractorIcon } from '@/components/atoms/icons/Icons';
import { ReactNode } from 'react';

const getFillColor = (type: VehicleType, current: VehicleType) => {
  return type === current ? '#FD4100' : '#8C929B';
};

export const getVehicleTypes = (type: VehicleType): { type: VehicleType; icon: ReactNode }[] => {
  return [
    {
      type: VehicleType.Car,
      icon: <CarIcon fill={getFillColor(VehicleType.Car, type)} />,
    },
    {
      type: VehicleType.Tractor,
      icon: <TractorIcon fill={getFillColor(VehicleType.Tractor, type)} />,
    },
    {
      type: VehicleType.Moto,
      icon: <MotoIcon fill={getFillColor(VehicleType.Moto, type)} />,
    },
  ];
};

export const saleTypeOptions: SelectOption[] = [
  {
    value: '0',
    label: 'იყიდება',
  },
  {
    value: '1',
    label: 'ქირავდება',
  },
];
