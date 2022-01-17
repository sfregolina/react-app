const ProductList = ({ products, style }) => {

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product" style={style}>
          <img alt={product.name} src={product.image} style={{maxWidth: "100%"}}/>
          <h3>{product.designer}</h3>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
