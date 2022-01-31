import { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';

const Wishlist = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that recource');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.log(error.message);
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
