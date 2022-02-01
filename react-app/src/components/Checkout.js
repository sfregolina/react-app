/** @jsxImportSource @emotion/react */
import CheckoutList from './CheckoutList';
import useFetch from './customHooks/useFetch';
import { StyledParagraph } from './StyledComponents/StyledParagraph';

const Checkout = () => {
  const { data: checkoutProducts } = useFetch('http://localhost:3000/checkout');

  const StyledEmptyCheckoutMessage = ({ children }) => (
    <div css={{
      padding: "20px",
      textAlign: "center"
    }}>{ children }</div>
  )

  return (
    <div className="checkout-wrapper" style={{minWidth: '40%', backgroundColor: '#DCDCDC'}}>
      {checkoutProducts?.length > 0 ? (
        <CheckoutList checkoutProducts={checkoutProducts}/>
      ) : (
        <StyledEmptyCheckoutMessage>
          <StyledParagraph>Your bag is empty</StyledParagraph>
        </StyledEmptyCheckoutMessage>
      )}
    </div>
  );
}

export default Checkout;
