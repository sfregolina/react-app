import { useEffect } from "react";
import styled from "@emotion/styled";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import { useDrawerState } from "../DrawerStateProvider/DrawerStateProvider";
import Header from "../Header/Header";
import ProductList from "./ProductList";

const StyledWishlist = styled("div")`
  padding: 20px;
  overflow-y: scroll;
  flex: 2;
  transition: flex 0.3s ease-in-out;

  &.reduced {
    flex: 1;
  }
`;

const Wishlist = () => {
  const {
    data: { products },
    setData,
  } = useDataController();

  const { isOpen } = useDrawerState();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch("http://localhost:3000/products")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that recource");
          }
          return res.json();
        })
        .catch((error) => {
          console.log(error.message);
        });

      setData((data) => {
        return { ...data, products };
      });
    };

    fetchProducts();
  }, [setData]);

  return (
    <StyledWishlist className={`wishlist-wrapper ${isOpen ? "reduced" : ""}`}>
      <Header />
      {products?.length > 0 && <ProductList products={products} />}
    </StyledWishlist>
  );
};

export default Wishlist;
