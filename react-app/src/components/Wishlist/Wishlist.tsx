/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { ProductType } from "../../types/common";
import { useDataController } from "../DataControllerProvider/DataControllerProvider";
import Header from "../Header/Header";
import ProductList from "./ProductList";

function Wishlist() {
  const {
    data: { products },
    setData,
  } = useDataController();

  useEffect(() => {
    const fetchProducts = async () => {
      const productItems: Array<ProductType> = await fetch(
        "http://localhost:3000/products",
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that recource");
          }
          return res.json();
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.message);
        });

      setData((data) => ({ ...data, products: productItems }));
    };

    fetchProducts();
  }, [setData]);

  return (
    <div
      className="wishlist-wrapper"
      style={{ overflowY: "scroll", width: "100%" }}
    >
      <div style={{ padding: "20px" }}>
        <Header />
        {products?.length > 0 ? <ProductList /> : <p>no items</p>}
      </div>
    </div>
  );
}

export default Wishlist;
