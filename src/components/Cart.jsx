import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch({ type: "cart/Removed", payload: productId });
    dispatch({ type: "cart/calculateTotal" });
  };
  const handleQuantityChange = (productId, quantity) => {
    dispatch({ type: "cart/updated", payload: { productId, quantity } });
    dispatch({ type: "cart/calculateTotal" });
  };
  return (
    <>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Rs.{item.price} - Quantity: {item.quantity}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <p>Total:Rs.{total}</p>
    </>
  );
}
