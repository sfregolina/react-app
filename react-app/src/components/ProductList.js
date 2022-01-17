const ProductList = ({ products }) => {

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id}>
          <img alt={product.name} src={product.image}/>
          <h3>{product.designer}</h3>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
