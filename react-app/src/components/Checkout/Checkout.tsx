/** @jsxImportSource @emotion/react */
import { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import CheckoutList from "./CheckoutList";
import CloseIcon from "../../icons/CloseIcon";
import StyledButton from "../StyledComponents/StyledButton";
import StyledParagraph from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";

const StyledEmptyCheckoutMessage = styled.div({
  padding: "20px",
  textAlign: "center",
});

const Checkout: React.FC = () => {
  const {
    data: { checkout },
    setData,
  } = useDataController();

  const { isOpen, setIsOpen } = useContext(CartStateContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const checkoutItems = await fetch("http://localhost:3000/checkout")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that recource");
          }
          return res.json();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
        });

      setData((data) => ({ ...data, checkout: checkoutItems }));
    };

    fetchProducts();
  }, [setData]);

  const isMobile = window.innerWidth < 426;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="checkout-wrapper">
      {isMobile && (
        <div style={{ margin: "20px 0 0 20px", display: "inline-block" }}>
          <StyledButton onClick={toggleDrawer}>
            <CloseIcon />
          </StyledButton>
        </div>
      )}
      {checkout?.length > 0 ? (
        <CheckoutList />
      ) : (
        <StyledEmptyCheckoutMessage>
          <StyledParagraph>Your bag is empty</StyledParagraph>
        </StyledEmptyCheckoutMessage>
      )}
    </div>
  );
};

export default Checkout;
