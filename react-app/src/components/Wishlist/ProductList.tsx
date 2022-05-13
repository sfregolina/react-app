/** @jsxImportSource @emotion/react */
import { useContext } from "react";
import useBreakpointValue from "../../functions/useBreakpointValue";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import ProductCard from "./ProductCard";
import { CartStateContext } from "../CartStateProvider/CartStateProvider";

interface ProductListProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const StyledProductList = ({ children, isOpen }: ProductListProps) => (
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

const ProductList: React.FC = () => {
  const {
    data: { products },
  } = useDataController();

  const { isOpen } = useContext(CartStateContext);

  return (
    <StyledProductList isOpen={isOpen}>
      {products?.map((product) => (
        <ProductCard
          key={product.sku}
          id={product.id}
          name={product.name}
          image={product.image}
          designer={product.designer}
          price={product.price}
          sku={product.sku}
        />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
