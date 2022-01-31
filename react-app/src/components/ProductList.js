/** @jsxImportSource @emotion/react */
import useBreakpointValue from "../functions/useBreakpointValue";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {

  const StyledProductList = ({ children }) => (
    <div css={useBreakpointValue({
      display: "grid",
      gap: "20px",
      gridTemplateColumns: ['1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']
    })}>{ children }</div>
  )

  return (
    <StyledProductList>
      {products?.map(product => (
        <ProductCard product={product}/>
      ))}
    </StyledProductList>
  );
}

export default ProductList;
