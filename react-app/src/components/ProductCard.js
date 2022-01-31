/** @jsxImportSource @emotion/react */

const ProductCard = ({product}) => {

  const StyledProduct = ({ children }) => (
    <div css={{ textAlign: 'center' }}>{ children }</div>
  )

  const StyledHeading3 = ({ children }) => (
    <h3 css={{
      textTransform: 'uppercase',
      fontSize: '14px',
      marginBottom: '5px'
    }}>{ children }</h3>
  )

  const StyledParagraph = ({ children }) => (
    <p css={{
      fontSize: '14px',
      color: '#2D2D2D',
      marginBottom: '5px'
    }}>{ children }</p>
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
      <img alt={product.name} src={product.image} style={{maxWidth: "100%"}}/>
      <StyledHeading3>{product.designer}</StyledHeading3>
      <StyledParagraph>{product.name}</StyledParagraph>
      <StyledParagraph>{product.price}</StyledParagraph>
      <StyledCta>Add to bag</StyledCta>
    </StyledProduct>
  );
}

export default ProductCard;
