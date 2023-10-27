import { useState } from 'react';
import { VehicleType } from '@/components/vehicleTabs/types';

export const useFilters = () => {
  const [vehicleType, setVehicleType] = useState<VehicleType>(VehicleType.Car);
  const [saleType, setSaleType] = useState('0');

  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const [categories, setCategories] = useState<number[]>([]);

  const [startPrice, setStartPrice] = useState('');
  const [endPrice, setEndPrice] = useState('');

  const changeVehicleType = (type: VehicleType) => {
    setVehicleType(type);
    setManufacturers([]);
    setCategories([]);
  };

  const selectManufacturer = (value: string | number) => {
    if (manufacturers.includes(value as string)) {
      setManufacturers(manufacturers.filter((manufacturer) => manufacturer !== value));
    } else {
      setManufacturers([...manufacturers, value] as string[]);
    }
  };

  const selectCategory = (value: string | number) => {
    if (categories.includes(value as number)) {
      setCategories(categories.filter((category) => category !== value));
    } else {
      setCategories([...categories, value] as number[]);
    }
  };

  return {
    vehicleType,
    saleType,
    manufacturers,
    categories,
    startPrice,
    endPrice,
    setVehicleType,
    setSaleType,
    setManufacturers,
    selectManufacturer,
    setCategories,
    selectCategory,
    setStartPrice,
    setEndPrice,
    changeVehicleType,
  };
};
