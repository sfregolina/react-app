/** @jsxImportSource @emotion/react */
import CloseIcon from "../../icons/CloseIcon"
import { StyledHeading3 } from "../StyledComponents/StyledHeading3"
import { StyledParagraph } from "../StyledComponents/StyledParagraph"
import { useDataController } from "../DataControllerProvider/DataControllerProvider"

const StyledCheckoutProduct = ({ children }) => (
  <div css={{ 
    display: 'flex',
    alignItems: 'start',
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

const StyledDescriptionWrapper = ({ children }) => (
  <div css={{ 
    flex: '1'
  }}>{ children }</div>
)

const StyledCloseButton = ({ children, onClick }) => (
  <button css={{ 
    border: '0',
    backgroundColor: 'transparent',
    cursor: 'pointer'
  }}
  onClick={onClick}>{ children }</button>
)

const CheckoutProduct = ({ checkoutProduct }) => {
  const { setData } = useDataController()

  const deleteCheckoutProduct = (product) => {

    fetch(`http://localhost:3000/checkout/${product.id}`, {
      method: 'DELETE'
    }).then(res => {
      return res.json();
    }).then(() => {
      setData((data) => {
        return {
          ...data, 
          checkout: data.checkout.filter(checkoutItem => checkoutItem.id !== product.id)
        }
      })
    }).catch(error => {
      console.log(error.message);
    });
  }

  return (
    <StyledCheckoutProduct key={checkoutProduct.id}>
      <StyledImageWrapper>
        <img alt={checkoutProduct.name} src={checkoutProduct.image} style={{width: '100%', display: 'block'}}/>
      </StyledImageWrapper>
      <StyledDescriptionWrapper>
        <StyledHeading3>{checkoutProduct.designer}</StyledHeading3>
        <StyledParagraph>{checkoutProduct.name}</StyledParagraph>
        <StyledParagraph>{checkoutProduct.price}</StyledParagraph>
      </StyledDescriptionWrapper>
      <StyledCloseButton onClick={() => deleteCheckoutProduct(checkoutProduct)}><CloseIcon/></StyledCloseButton>
    </StyledCheckoutProduct>
  )
}

export default CheckoutProduct;
