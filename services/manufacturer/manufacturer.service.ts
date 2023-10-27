import httpClient from '../../utils/axios';
import { Manufacturer, ManufacturerResponse } from '@/services/manufacturer/types';

export const fetchManufacturers = async (): Promise<Manufacturer[]> => {
  const manufacturers: ManufacturerResponse[] = await httpClient.get('https://static.my.ge/myauto/js/mans.json');

  return manufacturers.map((manufacturer) => ({
    manId: manufacturer.man_id,
    manName: manufacturer.man_name,
    isCar: manufacturer.is_car,
    isSpec: manufacturer.is_spec,
    isMoto: manufacturer.is_moto,
  }));
};
