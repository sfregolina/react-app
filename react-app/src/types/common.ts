export type CheckoutProductBodyProps = {
  sku: number;
  designer: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export interface CheckoutProductProps extends CheckoutProductBodyProps {
  id: number;
}

export interface ProductProps {
  id: number;
  sku: number;
  designer: string;
  name: string;
  price: string;
  image: string;
}

export interface DataType {
  products: Array<ProductProps>;
  checkout: Array<CheckoutProductProps>;
}
