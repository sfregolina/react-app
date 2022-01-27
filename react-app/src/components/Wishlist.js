import { useState, useEffect } from 'react';
import Header from './Header';
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
    <div className="wishlist-wrapper">
      <Header />
      {products && <ProductList products={products}/>}
    </div>
  );
}

export default Wishlist;
