'use client';
import { CarIcon, MotoIcon, TractorIcon } from '@/shared/icons/Icons';
import { ReactNode, useState } from 'react';
import Select from '@/shared/select/Select';
import { SelectOption } from '@/shared/select/types';
import { getFillColor } from '@/app/(home)/filters/helpers';
import VehicleTabs from '@/components/vehicleTabs/VehicleTabs';
import { VehicleType } from '@/components/vehicleTabs/types';
import Switch from '@/shared/switch/Switch';
import Input from '@/shared/input/Input';
import Button from '@/shared/button/Button';

export default function Filters() {
  const [vehicleType, setVehicleType] = useState<VehicleType>(VehicleType.Car);

  const vehicleTypes: { type: VehicleType; icon: ReactNode }[] = [
    {
      type: VehicleType.Car,
      icon: <CarIcon fill={getFillColor(VehicleType.Car, vehicleType)} />,
    },
    {
      type: VehicleType.Tractor,
      icon: <TractorIcon fill={getFillColor(VehicleType.Tractor, vehicleType)} />,
    },
    {
      type: VehicleType.Moto,
      icon: <MotoIcon fill={getFillColor(VehicleType.Moto, vehicleType)} />,
    },
  ];

  const [saleType, setSaleType] = useState('1');
  const saleTypeOptions: { value: string; label: string }[] = [
    {
      value: '1',
      label: 'იყიდება',
    },
    {
      value: '2',
      label: 'ქირავდება',
    },
  ];

  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const manufacturerOptions: SelectOption[] = [
    { value: '1', label: 'Mazda' },
    { value: '2', label: 'Toyota' },
    { value: '3', label: 'BMW' },
    { value: '4', label: 'sdf' },
    { value: '5', label: 'wer' },
    { value: '6', label: 'ghg' },
    { value: '7', label: 'bnb' },
    { value: '8', label: 'uiu' },
  ];

  const [categories, setCategories] = useState<string[]>([]);
  const categoryOptions: SelectOption[] = [
    { value: '1', label: 'Jeep' },
    { value: '2', label: 'SUV' },
    { value: '3', label: 'Sedan' },
    { value: '4', label: 'Hatchback' },
    { value: '5', label: 'Mini' },
  ];

  const [currency, setCurrency] = useState(false);

  const [startPrice, setStartPrice] = useState('');
  const [endPrice, setEndPrice] = useState('');

  return (
    <div className="min-w-[250px] border-2 border-[#E9E9F0] rounded-xl bg-white">
      <VehicleTabs current={vehicleType} tabs={vehicleTypes} onChange={setVehicleType} />

      <div className="pt-[22px] px-6 pb-6 border-b">
        <Select
          label="გარიგების ტიპი"
          value={saleType}
          options={saleTypeOptions}
          onChange={(value) => setSaleType(value)}
          className="mb-5"
        />

        <Select
          label="მწარმოებელი"
          placeholder="ყველა მწარმოებელი"
          value={manufacturers}
          options={manufacturerOptions}
          onChange={(value) => {
            if (manufacturers.includes(value)) {
              setManufacturers(manufacturers.filter((manufacturer) => manufacturer !== value));
            } else {
              setManufacturers([...manufacturers, value]);
            }
          }}
          multiple
          className="mb-5"
        />

        <Select
          label="კატეგორია"
          placeholder="ყველა კატეგორია"
          value={categories}
          options={categoryOptions}
          onChange={(value) => {
            if (categories.includes(value)) {
              setCategories(categories.filter((category) => category !== value));
            } else {
              setCategories([...categories, value]);
            }
          }}
          multiple
          className="mb-5"
        />
      </div>

      <div className="px-6 pt-4 pb-11">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[13px] text-[#272A37]">ფასი</span>

          <div className="flex items-center">
            <span className="mr-1">₾</span>
            <Switch checked={currency} onChange={() => setCurrency((currency) => !currency)} />
            <span className="ml-1 text-[14px]">$</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Input value={startPrice} placeholder="დან" type="number" onChange={setStartPrice} />
          <span>-</span>
          <Input value={endPrice} placeholder="მდე" type="number" onChange={setEndPrice} />
        </div>
      </div>

      <div className="px-6 h-[68px] flex justify-center items-center bg-white border-t rounded-bl-[10px] rounded-br-[10px]">
        <Button className="bg-[#FD4100] text-white">ძებნა</Button>
      </div>
    </div>
  );
}
