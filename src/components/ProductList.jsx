import { useDispatch } from "react-redux";
const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 15 },
];
export default function ProductList() {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch({ type: "cart/added", payload: product });
    dispatch({ type: "cart/calculateTotal" });
  };
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}-Rs{product.price}
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
