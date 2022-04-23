export const getCheckoutProducts = () => {
  return fetch("http://localhost:3000/checkout")
    .then((res) => res.json())
    .then((checkoutProducts) => {
      return checkoutProducts;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const getCheckoutProduct = (product) => {
  return fetch(`http://localhost:3000/checkout?sku=${product.sku}`)
    .then((res) => res.json())
    .then((checkoutProduct) => {
      return checkoutProduct[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const postCheckoutProduct = (product) => {
  return fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export const patchCheckoutProduct = (product) => {
  return fetch(`http://localhost:3000/checkout/${product.id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error.message);
    });
};
