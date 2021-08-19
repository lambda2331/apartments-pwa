import { ApartmentEntity } from './enum'

export interface LoadApartmentsRequestProps {
  rooms: number[];
  entity: ApartmentEntity;
  price: number[];
}

export interface Apartment {
  images: string[];
  price: string[];
  street: string;
  text: string;
  time: string;
  url: string;
  website: string;
}

export type ApartmentsList = Apartment[];
