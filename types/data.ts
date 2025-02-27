type TProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  characteristics: TCharacteristic;
};

type TCharacteristic = {
  country: string;
  brand: string;
  dosage: string;
  releaseForm: string;
  storageTemperature: string;
  quantityPerPackage: number;
  expirationDate: string;
  isByPrescription: boolean;
  manufacturer: string;
};

interface IFilters {
  country?: string[];
  brand?: string[];
  dosage?: string[];
  releaseForm?: string[];
  storageTemperature?: string[];
  quantityPerPackage?: number[];
  expirationDate?: string[];
  isByPrescription?: boolean[];
  manufacturer?: string[];
}

export type { TProduct, TCharacteristic, IFilters };
