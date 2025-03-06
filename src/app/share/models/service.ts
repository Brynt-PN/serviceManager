export interface Service {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  disponibility: boolean;
}

export type Services = Service[];
