import CheckoutList from './CheckoutList';
import useFetch from './customHooks/useFetch';

const Checkout = () => {
  const { data: checkoutProducts } = useFetch('http://localhost:3000/checkout');

  return (
    <div className="checkout-wrapper" style={{minWidth: '40%', height: '100vh'}}>
      {checkoutProducts && <CheckoutList checkoutProducts={checkoutProducts}/>}
    </div>
  );
}

export default Checkout;
