export interface CarItemProps {
  car: {
    id: number;
    title: string;
    photo: string;
    year: number;
    location: string;
    engine: number;
    transmission: string;
    range: number;
    wheel: number;
    price: number;
    priceUsd: number;
    views: number;
  };
}
