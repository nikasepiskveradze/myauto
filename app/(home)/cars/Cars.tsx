import CarItem from '@/components/carItem/CarItem';
import SortBar from '@/components/sortBar/SortBar';

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
      <SortBar searchResultCount={34534538} />
      <div className="mt-4">{[cars.map((car) => <CarItem key={car.id} car={car} />)]}</div>
    </div>
  );
}
