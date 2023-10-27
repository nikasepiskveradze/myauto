import SortCars from '@/app/(home)/cars/SortCars';
import CarItem from '@/app/(home)/cars/CarItem';

export default function Cars() {
  const cars = [
    {
      id: 1,
      title: 'Land rover range',
      year: 2013,
      location: 'Tbilisi',
      engine: 1.8,
      transmission: 'automatic',
      range: 200000,
      wheel: 0,
      price: 30000,
      seenCount: 563,
      lastSeen: '23-12-2023',
    },
    {
      id: 2,
      title: 'Land rover range',
      year: 2013,
      location: 'Tbilisi',
      engine: 1.8,
      transmission: 'automatic',
      range: 200000,
      wheel: 0,
      price: 30000,
      seenCount: 563,
      lastSeen: '23-12-2023',
    },
    {
      id: 3,
      title: 'Land rover range',
      year: 2013,
      location: 'Tbilisi',
      engine: 1.8,
      transmission: 'automatic',
      range: 200000,
      wheel: 0,
      price: 30000,
      seenCount: 563,
      lastSeen: '23-12-2023',
    },
    {
      id: 4,
      title: 'Land rover range',
      year: 2013,
      location: 'Tbilisi',
      engine: 1.8,
      transmission: 'automatic',
      range: 200000,
      wheel: 0,
      price: 30000,
      seenCount: 563,
      lastSeen: '23-12-2023',
    },
    {
      id: 5,
      title: 'Land rover range',
      year: 2013,
      location: 'Tbilisi',
      engine: 1.8,
      transmission: 'automatic',
      range: 200000,
      wheel: 0,
      price: 30000,
      seenCount: 563,
      lastSeen: '23-12-2023',
    },
  ];

  return (
    <div className="ml-5 w-full mb-8">
      <SortCars />
      <div className="mt-4">{[cars.map((car) => <CarItem key={car.id} car={car} />)]}</div>
    </div>
  );
}
