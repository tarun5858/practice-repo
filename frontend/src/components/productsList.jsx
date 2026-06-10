function ProductList(){
    const products = [
    { id: 1, name: 'iPhone', price: 999, inStock: true },
    { id: 2, name: 'MacBook', price: 1999, inStock: false },
    { id: 3, name: 'AirPods', price: 199, inStock: true }
  ];

  const availableProducts = products.filter((product) => product.inStock === true);
  return(
    <div>
    <h3>Available Items</h3>
    {availableProducts.map((item,i) => (
        <li key={item.id}>{item.name} : {item.price}</li>
        ))}
    </div>
  )
}
export default ProductList;