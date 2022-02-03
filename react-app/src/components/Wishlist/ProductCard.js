/** @jsxImportSource @emotion/react */
import { StyledHeading3 } from "../StyledComponents/StyledHeading3";
import { StyledParagraph } from "../StyledComponents/StyledParagraph";

const ProductCard = ({ product }) => {

  const StyledProduct = ({ children }) => (
    <div css={{ 
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}>{ children }</div>
  )

  const StyledCta = ({ children }) => (
    <button css={{
      fontSize: '12px',
      backgroundColor: '#000',
      color: '#FFF',
      margin: '5px 0',
      padding: '10px 20px',
      border: 0,
      textTransform: 'uppercase'
    }}>{ children }</button>
  )

  return (
    <StyledProduct key={product.id}>
      <img alt={product.name} src={product.image} style={{maxWidth: '100%'}}/>
      <StyledHeading3>{product.designer}</StyledHeading3>
      <StyledParagraph css={{ flex: 1 }}>{product.name}</StyledParagraph>
      <StyledParagraph>{product.price}</StyledParagraph>
      <StyledCta>Add to bag</StyledCta>
    </StyledProduct>
  );
}

export default ProductCard;
