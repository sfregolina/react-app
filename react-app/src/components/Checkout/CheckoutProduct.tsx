/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import styled from "@emotion/styled";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";
import CloseIcon from "../../icons/CloseIcon";
import StyledHeading3 from "../StyledComponents/StyledHeading3";
import StyledParagraph from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import { CheckoutProductProps } from "../../types/common";

const StyledCheckoutProduct = styled.div({
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  marginBottom: "20px",
});

const StyledImageWrapper = styled.div({ width: "100px", marginRight: "10px" });

const StyledDescriptionWrapper = styled.div({ flex: "1" });

const StyledCloseButton = styled.button({
  border: "0",
  backgroundColor: "transparent",
  cursor: "pointer",
});

const CheckoutProduct: React.FC<CheckoutProductProps> = (checkoutProduct) => {
  const { name, image, designer, price, quantity } = checkoutProduct;
  const { setData } = useDataController();
  const { count, setCount } = useContext(CartStateContext);

  const deleteCheckoutProduct = (product: CheckoutProductProps) => {
    const checkoutProductQuantity = product.quantity;

    fetch(`http://localhost:3000/checkout/${product.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setCount(count - checkoutProductQuantity);
        setData((data) => ({
          ...data,
          checkout: data.checkout.filter(
            (checkoutItem) => checkoutItem.id !== product.id,
          ),
        }));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  };

  return (
    <StyledCheckoutProduct>
      <StyledImageWrapper>
        <img
          alt={name}
          src={image}
          style={{ width: "100%", display: "block" }}
        />
      </StyledImageWrapper>
      <StyledDescriptionWrapper>
        <StyledHeading3>{designer}</StyledHeading3>
        <StyledParagraph>{name}</StyledParagraph>
        <StyledParagraph>{price}</StyledParagraph>
        <StyledParagraph>
          Quantity:
          {quantity}
        </StyledParagraph>
      </StyledDescriptionWrapper>
      <StyledCloseButton onClick={() => deleteCheckoutProduct(checkoutProduct)}>
        <CloseIcon />
      </StyledCloseButton>
    </StyledCheckoutProduct>
  );
};

export default CheckoutProduct;
