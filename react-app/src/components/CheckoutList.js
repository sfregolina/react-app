/** @jsxImportSource @emotion/react */
import CheckoutProduct from "./CheckoutProduct";

const CheckoutList = ({ checkoutProducts }) => {

  const StyledCheckoutList = ({ children }) => (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '20px',
      boxSizing: 'border-box'
    }}>{ children }</div>
  )

  return (
    <StyledCheckoutList>
      {checkoutProducts?.map(checkoutProduct => (
        <CheckoutProduct checkoutProduct={checkoutProduct}/>
      ))}
    </StyledCheckoutList>
  )
}

export default CheckoutList;
