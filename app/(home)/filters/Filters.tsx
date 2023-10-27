'use client';
import { CarIcon, MotoIcon, TractorIcon } from '@/components/icons/Icons';
import { ReactNode, useState } from 'react';
import cn from 'classnames';
import Select, { SelectOption } from '@/components/select/Select';

enum VehicleType {
  Car,
  Tractor,
  Moto,
}

const getFillColor = (type: VehicleType, current: VehicleType) => {
  return type === current ? '#FD4100' : '#8C929B';
};

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
      <div className="flex justify-center rounded-tl-xl rounded-tr-xl overflow-hidden">
        {vehicleTypes.map((item) => (
          <div
            key={item.type}
            className={cn(
              'group w-[84px] h-[48px] flex justify-center items-center bg-[#F9F9FB] cursor-pointer',
              'border-b border-b-[#E9E9F0] border-r border-r-[#E9E9F0] last:border-r-0',
              { 'bg-white': item.type === vehicleType },
              { 'border-b-[#FD4100]': item.type === vehicleType },
            )}
            onClick={() => setVehicleType(item.type)}
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div className="pt-[22px] px-6 pb-6 border-b">
        <Select label="გარიგების ტიპი" value={saleType} options={saleTypeOptions} onChange={(value) => setSaleType(value)} className="mb-5" />

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
            <label className="relative cursor-pointer">
              <input type="checkbox" checked={currency} onChange={() => setCurrency((currency) => !currency)} className="sr-only peer" />
              <div className="w-7 h-5 bg-black rounded-full peer peer-checked:after:translate-x-1.5 after:content-[''] after:absolute after:top-0.5 after:left-[3px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
            <span className="ml-1 text-[14px]">$</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="დან"
            className="border px-2 text-xs rounded-[8px] w-[94px] h-[40px]"
            value={startPrice}
            onChange={(event) => setStartPrice(event.target.value)}
          />
          <span>-</span>
          <input
            type="text"
            placeholder="მდე"
            className="border px-2 text-xs rounded-[8px] w-[94px] h-[40px]"
            value={endPrice}
            onChange={(event) => setEndPrice(event.target.value)}
          />
        </div>
      </div>

      <div className="px-6 h-[68px] flex justify-center items-center bg-white border-t rounded-bl-[10px] rounded-br-[10px]">
        <button className="bg-[#FD4100] p-2 w-full rounded-[8px] text-white">ძებნა</button>
      </div>
    </div>
  );
}
