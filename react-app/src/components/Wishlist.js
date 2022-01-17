import { useState, useEffect } from 'react';
import ProductList from './ProductList';

const Wishlist = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      {products && <ProductList products={products} style={{maxWidth: "48%"}}/>}
    </>
  );
}

export default Wishlist;
