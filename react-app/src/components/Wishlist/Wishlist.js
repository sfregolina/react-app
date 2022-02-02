import useFetch from '../customHooks/useFetch';
import Header from '../Header/Header';
import ProductList from './ProductList';

const Wishlist = () => {
  const { data: products } = useFetch('http://localhost:3000/products');

  return (
    <div className="wishlist-wrapper" style={{padding: '20px', overflowY: 'scroll'}}>
      <Header />
      {products && <ProductList products={products}/>}
    </div>
  );
}

export default Wishlist;
