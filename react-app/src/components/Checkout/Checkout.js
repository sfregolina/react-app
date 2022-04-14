/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import CheckoutList from "./CheckoutList";
import { StyledParagraph } from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";

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

  return (
    <div
      className="checkout-wrapper"
      style={{ minWidth: "40%", backgroundColor: "#DCDCDC" }}
    >
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
