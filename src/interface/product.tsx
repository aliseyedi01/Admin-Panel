export enum Gender {
  Men = "men",
  Women = "women",
  Kids = "kids",
}

export interface Product {
  key: string;
  name: string;
  price: number;
  description: string;
  image: string;
  sale: boolean;
  new: boolean;
  gender: "men" | "women" | "kids";
  priceOff?: number;
  remaining: number;
}

export type ProductState = Product[];
