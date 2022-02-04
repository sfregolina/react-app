import { useEffect } from 'react';
import { useDataController } from '../DataControllerProvider/DataControllerProvider';
import Header from '../Header/Header';
import ProductList from './ProductList';

const Wishlist = () => {
  const { data: {products}, setData } = useDataController();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch('http://localhost:3000/products')
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that recource');
          }
          return res.json();
        }).catch(error => {
          console.log(error.message);
        });

      setData(data => {
        return {...data, products}
      })
    }
    
    fetchProducts()
  }, [setData])

  return (
    <div className="wishlist-wrapper" style={{padding: '20px', overflowY: 'scroll'}}>
      <Header />
      {products.length > 0 && <ProductList products={products}/>}
    </div>
  );
}

export default Wishlist;
