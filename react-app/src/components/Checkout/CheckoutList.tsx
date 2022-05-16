/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import CheckoutProduct from "./CheckoutProduct";

const StyledCheckoutList = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  boxSizing: "border-box",
  padding: "20px",
});

const CheckoutList: React.FC = () => {
  const {
    data: { checkout },
  } = useDataController();

  return (
    <StyledCheckoutList>
      {checkout?.map((checkoutProduct) => (
        <CheckoutProduct
          key={checkoutProduct.id}
          id={checkoutProduct.id}
          name={checkoutProduct.name}
          image={checkoutProduct.image}
          designer={checkoutProduct.designer}
          price={checkoutProduct.price}
          quantity={checkoutProduct.quantity}
          sku={checkoutProduct.sku}
        />
      ))}
    </StyledCheckoutList>
  );
};

export default CheckoutList;
