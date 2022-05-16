import {
  CheckoutProductBodyProps,
  CheckoutProductProps,
  ProductProps,
} from "../types/common";

export const getCheckoutProducts = (): Promise<Array<CheckoutProductProps>> =>
  fetch("http://localhost:3000/checkout")
    .then((res) => res.json())
    .then((checkoutProducts) => checkoutProducts)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });

export const getCheckoutProduct = (
  product: ProductProps,
): Promise<CheckoutProductProps> =>
  fetch(`http://localhost:3000/checkout?sku=${product.sku}`)
    .then((res) => res.json())
    .then((checkoutProduct) => checkoutProduct[0])
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });

export const postCheckoutProduct = (
  product: CheckoutProductBodyProps,
): Promise<CheckoutProductProps> =>
  fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });

export const patchCheckoutProduct = (
  product: CheckoutProductProps,
): Promise<CheckoutProductProps> =>
  fetch(`http://localhost:3000/checkout/${product.id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });
