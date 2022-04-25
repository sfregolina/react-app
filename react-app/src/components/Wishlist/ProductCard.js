/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";
import { StyledHeading3 } from "../StyledComponents/StyledHeading3";
import { StyledParagraph } from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import {
  getCheckoutProduct,
  postCheckoutProduct,
  patchCheckoutProduct,
} from "../../api/checkout";

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
  const { count, setCount } = useContext(CartStateContext);

  const addToBag = async () => {
    const checkoutProduct = await getCheckoutProduct(product);

    if (checkoutProduct) {
      checkoutProduct.quantity += 1;
      await patchCheckoutProduct(checkoutProduct);

      setCount(count + 1);

      setData((data) => {
        const index = data.checkout.findIndex(
          (item) => item.id === checkoutProduct.id
        );
        data.checkout[index] = checkoutProduct;

        return {
          ...data,
          checkout: data.checkout,
        };
      });

      return;
    }

    const newCheckoutProduct = await postCheckoutProduct({
      ...product,
      quantity: 1,
    });

    setCount(count + 1);

    setData((data) => {
      return {
        ...data,
        checkout: [...data.checkout, newCheckoutProduct],
      };
    });
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
      <StyledCta onClick={() => addToBag()}>Add to bag</StyledCta>
    </StyledProduct>
  );
};

export default ProductCard;
