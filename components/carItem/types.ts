export interface CarItemProps {
  car: {
    id: number;
    title: string;
    year: number;
    location: string;
    engine: number;
    transmission: string;
    range: number;
    wheel: number;
    price: number;
    seenCount: number;
    lastSeen: string;
  };
}
