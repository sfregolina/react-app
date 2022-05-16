import { CheckoutProductType, ProductType } from "../types/common";

export const getCheckoutProducts = (): Promise<Array<CheckoutProductType>> =>
  fetch("http://localhost:3000/checkout")
    .then((res) => res.json())
    .then((checkoutProducts) => checkoutProducts)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });

export const getCheckoutProduct = (
  product: ProductType,
): Promise<CheckoutProductType> =>
  fetch(`http://localhost:3000/checkout?sku=${product.sku}`)
    .then((res) => res.json())
    .then((checkoutProduct) => checkoutProduct[0])
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.message);
    });

export const postCheckoutProduct = (
  product: CheckoutProductType,
): Promise<CheckoutProductType> =>
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
  product: CheckoutProductType,
): Promise<CheckoutProductType> =>
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
