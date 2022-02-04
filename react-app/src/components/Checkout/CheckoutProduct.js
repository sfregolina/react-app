/** @jsxImportSource @emotion/react */
import { StyledHeading3 } from "../StyledComponents/StyledHeading3"
import { StyledParagraph } from "../StyledComponents/StyledParagraph"

const StyledCheckoutProduct = ({ children }) => (
  <div css={{ 
    display: 'flex',
    textAlign: 'left',
    marginBottom: '20px'
}}>{ children }</div>
)

const StyledImageWrapper = ({ children }) => (
  <div css={{ 
    width: '100px',
    marginRight: '10px'
  }}>{ children }</div>
)

const CheckoutProduct = ({ checkoutProduct }) => {

  return (
    <StyledCheckoutProduct key={checkoutProduct.id}>
      <StyledImageWrapper>
        <img alt={checkoutProduct.name} src={checkoutProduct.image} style={{width: '100%', display: 'block'}}/>
      </StyledImageWrapper>
      <div>
        <StyledHeading3>{checkoutProduct.designer}</StyledHeading3>
        <StyledParagraph>{checkoutProduct.name}</StyledParagraph>
        <StyledParagraph>{checkoutProduct.price}</StyledParagraph>
      </div>
    </StyledCheckoutProduct>
  )
}

export default CheckoutProduct;
