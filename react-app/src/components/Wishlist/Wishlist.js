/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import useBreakpointValue from "../../functions/useBreakpointValue";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import { useDrawerState } from "../DrawerStateProvider/DrawerStateProvider";
import Header from "../Header/Header";
import ProductList from "./ProductList";

const Wishlist = () => {
  const {
    data: { products },
    setData,
  } = useDataController();

  const { isOpen } = useDrawerState();

  const StyledWishlist = ({ children }) => (
    <div
      css={useBreakpointValue({
        padding: ["0", "20px", "20px"],
        overflowY: "scroll",
        flex: "2",
        transition: "flex 0.3s linear",

        "&.reduced": {
          flex: ["0", "1", "1"],
        },
      })}
      className={`wishlist-wrapper ${isOpen ? "reduced" : ""}`}
    >
      {children}
    </div>
  );

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
    <StyledWishlist>
      <Header />
      {products?.length > 0 && <ProductList products={products} />}
    </StyledWishlist>
  );
};

export default Wishlist;
