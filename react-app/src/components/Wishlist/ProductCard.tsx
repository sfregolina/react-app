/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useContext } from "react";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";
import StyledHeading3 from "../StyledComponents/StyledHeading3";
import StyledParagraph from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import {
  getCheckoutProduct,
  postCheckoutProduct,
  patchCheckoutProduct,
} from "../../api/checkout";
import { ProductType } from "../../types/common";

const StyledProduct = styled.div({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
});

const StyledCta = styled.button({
  fontSize: "12px",
  backgroundColor: "#000",
  color: "#FFF",
  margin: "5px 0",
  padding: "10px 20px",
  border: 0,
  textTransform: "uppercase",
  cursor: "pointer",
});

const ProductCard: React.FC<ProductType> = (product) => {
  const { name, image, designer, price } = product;

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
          (item) => item.id === checkoutProduct.id,
        );
        const dataClone = data;
        dataClone.checkout[index] = checkoutProduct;

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

    setData((data) => ({
      ...data,
      checkout: [...data.checkout, newCheckoutProduct],
    }));
  };

  return (
    <StyledProduct>
      <img alt={name} src={image} style={{ maxWidth: "100%" }} />
      <StyledHeading3>{designer}</StyledHeading3>
      <StyledParagraph css={{ flex: 1 }}>{name}</StyledParagraph>
      <StyledParagraph>{price}</StyledParagraph>
      <StyledCta onClick={() => addToBag()}>Add to bag</StyledCta>
    </StyledProduct>
  );
};

export default ProductCard;
