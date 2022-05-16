export type CheckoutProductBodyType = {
  sku: number;
  designer: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export interface CheckoutProductType extends CheckoutProductBodyType {
  id: number;
}

export interface ProductType {
  id: number;
  sku: number;
  designer: string;
  name: string;
  price: string;
  image: string;
}

export interface DataType {
  products: Array<ProductType>;
  checkout: Array<CheckoutProductType>;
}
