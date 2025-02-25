interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  characteristics: Characteristic;
}

interface Characteristic {
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

export type { Product, Characteristic };
