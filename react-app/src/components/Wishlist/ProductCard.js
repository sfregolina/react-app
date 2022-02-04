/** @jsxImportSource @emotion/react */
import { StyledHeading3 } from "../StyledComponents/StyledHeading3";
import { StyledParagraph } from "../StyledComponents/StyledParagraph";
import { useDataController } from "../DataControllerProvider/DataControllerProvider"

const StyledProduct = ({ children }) => (
  <div css={{ 
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
  }}>{ children }</div>
)

const StyledCta = ({ children, onClick }) => (
  <button css={{
    fontSize: '12px',
    backgroundColor: '#000',
    color: '#FFF',
    margin: '5px 0',
    padding: '10px 20px',
    border: 0,
    textTransform: 'uppercase',
    cursor: 'pointer'
  }}
  onClick={onClick}>
    { children }
  </button>
)

const ProductCard = ({ product }) => {

  const {setData} = useDataController()

  const addToBag = (product) => {
    fetch('http://localhost:3000/checkout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(product)
    }).then(res => {
      return res.json();
    }).then((checkout)=> {
      setData((data) => {

        return {
          ...data,
          checkout: [...data.checkout, checkout]
        }
      })
    }).catch(error => {
      console.log(error.message);
    });
  }

  return (
    <StyledProduct key={product.id}>
      <img alt={product.name} src={product.image} style={{maxWidth: '100%'}}/>
      <StyledHeading3>{product.designer}</StyledHeading3>
      <StyledParagraph css={{ flex: 1 }}>{product.name}</StyledParagraph>
      <StyledParagraph>{product.price}</StyledParagraph>
      <StyledCta onClick={() => addToBag(product)}>Add to bag</StyledCta>
    </StyledProduct>
  );
}

export default ProductCard;
