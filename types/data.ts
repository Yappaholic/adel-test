interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  characteristics: ICharacteristic;
}

interface ICharacteristic {
  country: string;
  brand: string;
  dosage: string;
  releaseForm: string;
  storageTemperature: string;
  quantityPerPackage: number;
  expirationDate: string;
  isByPrescription: boolean;
  manufacturer: string;
}

interface IFilters {
  country: string[];
  brand: string[];
  dosage: string[];
  releaseForm: string[];
  storageTemperature: string[];
  quantityPerPackage: number[];
  expirationDate: string[];
  isByPrescription: boolean[];
  manufacturer: string[];
}

export type { IProduct, ICharacteristic, IFilters };
