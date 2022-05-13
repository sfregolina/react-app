export type CheckoutProductType = {
  sku: number;
  designer: string;
  name: string;
  price: string;
  image: string;
  id: number;
  quantity: number;
};

export type ProductType = {
  id: number;
  sku: number;
  designer: string;
  name: string;
  price: string;
  image: string;
};

export type DataType = {
  products: Array<ProductType>;
  checkout: Array<CheckoutProductType>;
};
