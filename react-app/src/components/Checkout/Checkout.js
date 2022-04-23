/** @jsxImportSource @emotion/react */
import { useEffect, useContext } from "react";
import CheckoutList from "./CheckoutList";
import CloseIcon from "../../icons/CloseIcon";
import { StyledButton } from "../StyledComponents/StyledButton";
import { StyledParagraph } from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";

const StyledEmptyCheckoutMessage = ({ children }) => (
  <div
    css={{
      padding: "20px",
      textAlign: "center",
    }}
  >
    {children}
  </div>
);

const Checkout = () => {
  const {
    data: { checkout },
    setData,
  } = useDataController();

  const { isOpen, setIsOpen } = useContext(CartStateContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const checkout = await fetch("http://localhost:3000/checkout")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that recource");
          }
          return res.json();
        })
        .catch((error) => {
          console.log(error.message);
        });

      setData((data) => {
        return { ...data, checkout };
      });
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
        <CheckoutList checkoutProducts={checkout} />
      ) : (
        <StyledEmptyCheckoutMessage>
          <StyledParagraph>Your bag is empty</StyledParagraph>
        </StyledEmptyCheckoutMessage>
      )}
    </div>
  );
};

export default Checkout;
