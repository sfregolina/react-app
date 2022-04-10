/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { StyledHeading3 } from "../StyledComponents/StyledHeading3";
import { StyledParagraph } from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";

const StyledProduct = ({ children }) => (
  <div
    css={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {children}
  </div>
);

const StyledCta = ({ children, onClick }) => (
  <button
    css={{
      fontSize: "12px",
      backgroundColor: "#000",
      color: "#FFF",
      margin: "5px 0",
      padding: "10px 20px",
      border: 0,
      textTransform: "uppercase",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);

const ProductCard = ({ product }) => {
  const { setData } = useDataController();
  const [count, setCount] = useState(0);

  const addToBag = (product) => {
    setCount(count + 1);

    const checkProductInCheckout = async () => {
      const products = await fetch("http://localhost:3000/checkout");
      const res = await products.json();

      const checkoutProduct = res.find((item) => item.sku === product.sku);

      if (!checkoutProduct) {
        productPostRequest();
      } else {
        productPatchRequest(checkoutProduct.id);
      }
    };

    const productPostRequest = async () => {
      await fetch(`http://localhost:3000/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          quantity: count,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((checkoutItem) => {
          setData((data) => {
            return {
              ...data,
              checkout: [...data.checkout, checkoutItem],
            };
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    const productPatchRequest = async (id) => {
      await fetch(`http://localhost:3000/checkout/${id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          quantity: count,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((checkoutItem) => {
          setData((data) => {
            const index = data.checkout.findIndex(
              (item) => item.id === checkoutItem.id
            );
            data.checkout[index] = checkoutItem;
            return {
              ...data,
              checkout: data.checkout,
            };
          });
        });
    };

    checkProductInCheckout();
  };

  return (
    <StyledProduct key={product.id}>
      <img
        alt={product.name}
        src={product.image}
        style={{ maxWidth: "100%" }}
      />
      <StyledHeading3>{product.designer}</StyledHeading3>
      <StyledParagraph css={{ flex: 1 }}>{product.name}</StyledParagraph>
      <StyledParagraph>{product.price}</StyledParagraph>
      <StyledCta onClick={() => addToBag(product)}>Add to bag</StyledCta>
    </StyledProduct>
  );
};

export default ProductCard;
