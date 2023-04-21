import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="cartComponent">
      {cartItems.length === 0 ? (
        <div className="cart-items">
        <h3 className="headingThree">Your cart is empty</h3>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <h3 className="headingThree">TOTAL: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
