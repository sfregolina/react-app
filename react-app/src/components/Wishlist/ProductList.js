/** @jsxImportSource @emotion/react */
import useBreakpointValue from "../../functions/useBreakpointValue";
import ProductCard from "./ProductCard";

const StyledProductList = ({ children }) => (
  <div
    css={useBreakpointValue({
      display: "grid",
      gap: "20px",
      gridTemplateColumns: ["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"],
    })}
  >
    {children}
  </div>
);

const ProductList = ({ products }) => {
  return (
    <StyledProductList>
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
