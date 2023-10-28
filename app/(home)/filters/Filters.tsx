'use client';
import { useMemo } from 'react';
import Select from '@/shared/select/Select';
import { SelectOption } from '@/shared/select/types';
import { getVehicleTypes, saleTypeOptions } from '@/app/(home)/filters/helpers';
import VehicleTabs from '@/components/vehicleTabs/VehicleTabs';
import { VehicleType } from '@/components/vehicleTabs/types';
import Switch from '@/shared/switch/Switch';
import Input from '@/shared/input/Input';
import Button from '@/shared/button/Button';
import { FiltersProps } from '@/app/(home)/filters/types';
import { useFilters } from '@/app/(home)/filters/useFilters';
import { useGlobalState } from '@/context/GlobaState';
import { useRouter } from 'next/navigation';

export default function Filters({ manufacturers: manufacturersData, categories: categoriesData }: FiltersProps) {
  const {
    vehicleType,
    saleType,
    manufacturers,
    categories,
    startPrice,
    endPrice,
    changeVehicleType,
    setSaleType,
    selectManufacturer,
    selectCategory,
    setStartPrice,
    setEndPrice,
  } = useFilters();
  const { currency, toggleCurrency } = useGlobalState();
  const router = useRouter();

  const vehicleTypes = useMemo(() => getVehicleTypes(vehicleType), [vehicleType]);

  const manufacturerOptions: SelectOption[] = manufacturersData
    .filter(
      (item) =>
        (VehicleType.Car === vehicleType && item.isCar === '1') ||
        (VehicleType.Tractor === vehicleType && item.isSpec === '1') ||
        (VehicleType.Moto === vehicleType && item.isMoto === '1'),
    )
    .map((item) => ({ value: item.manId, label: item.manName }));

  const categoryOptions: SelectOption[] = categoriesData.map((item) => ({ value: item.categoryId, label: item.title }));

  const clickSearch = () => {
    const query = new URLSearchParams(window.location.search);
    query.set('saleType', saleType);
    query.set('manufacturers', manufacturers.join('-'));
    query.set('categories', categories.join('.'));
    query.set('startPrice', startPrice);
    query.set('endPrice', endPrice);

    router.push(`?${query.toString()}`);
  };

  return (
    <div className="min-w-[250px] border-2 border-[#E9E9F0] rounded-xl bg-white sm:block hidden">
      <VehicleTabs current={vehicleType} tabs={vehicleTypes} onChange={changeVehicleType} />

      <div className="pt-[22px] px-6 pb-6 border-b">
        <Select
          label="გარიგების ტიპი"
          value={saleType}
          options={saleTypeOptions}
          onChange={(value) => setSaleType(value as string)}
          className="mb-5"
        />

        <Select
          label="მწარმოებელი"
          placeholder="ყველა მწარმოებელი"
          value={manufacturers}
          options={manufacturerOptions}
          onChange={selectManufacturer}
          multiple
          className="mb-5"
        />

        <Select
          label="კატეგორია"
          placeholder="ყველა კატეგორია"
          value={categories}
          options={categoryOptions}
          onChange={selectCategory}
          multiple
          className="mb-5"
        />
      </div>

      <div className="px-6 pt-4 pb-11">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[13px] text-[#272A37]">ფასი</span>

          <div className="flex items-center">
            <span className="mr-1">₾</span>
            <Switch checked={currency} onChange={toggleCurrency!} />
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
        <Button className="bg-[#FD4100] text-white" onClick={clickSearch}>
          ძებნა
        </Button>
      </div>
    </div>
  );
}
