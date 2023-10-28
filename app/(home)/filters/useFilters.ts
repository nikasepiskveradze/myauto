import { useState } from 'react';
import { VehicleType } from '@/components/molecules/vehicleTabs/types';
import { useGetSearchQuery } from '@/hooks/useGetSearchQuery';

export const useFilters = () => {
  const query = useGetSearchQuery();

  const [vehicleType, setVehicleType] = useState<VehicleType>(VehicleType.Car);
  const [saleType, setSaleType] = useState(query.saleType);

  const [manufacturers, setManufacturers] = useState<string[]>(query.manufacturers);
  const [categories, setCategories] = useState<number[]>(query.categories.map((item) => Number(item)));

  const [startPrice, setStartPrice] = useState(query.startPrice);
  const [endPrice, setEndPrice] = useState(query.endPrice);

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
