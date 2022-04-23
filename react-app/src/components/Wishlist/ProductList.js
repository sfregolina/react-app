/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import useBreakpointValue from "../../functions/useBreakpointValue";
import ProductCard from "./ProductCard";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";

const ProductList = ({ products }) => {
  const { isOpen } = useContext(CartStateContext);

  const StyledProductList = ({ children }) => (
    <div
      css={useBreakpointValue({
        display: "grid",
        gap: "20px",
        gridTemplateColumns: [
          "1fr 1fr",
          `${isOpen ? "1fr 1fr" : "1fr 1fr 1fr"}`,
          `${isOpen ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"}`,
        ],
      })}
    >
      {children}
    </div>
  );

  return (
    <StyledProductList>
      {products?.map((product) => (
        <ProductCard product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
