/** @jsxImportSource @emotion/react */
import CheckoutProduct from "./CheckoutProduct";

const StyledCheckoutList = ({ children }) => (
  <div
    css={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      boxSizing: "border-box",
      padding: "20px",
    }}
  >
    {children}
  </div>
);

const CheckoutList = ({ checkoutProducts }) => {
  return (
    <StyledCheckoutList>
      {checkoutProducts?.map((checkoutProduct) => (
        <CheckoutProduct checkoutProduct={checkoutProduct} />
      ))}
    </StyledCheckoutList>
  );
};

export default CheckoutList;
