import {
    removeItemFromCart,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import iconTrash from "../assets/delete.png";
import imageMinus from "../assets/minus.png";
import imagePlus from "../assets/plus.png"

const CartItem = ({cartItem}) =>{
    const dispatch = useDispatch();

    const addQuantity = () => {
        dispatch(incrementCartItemQuantity({ destinationId: cartItem.destinationId }));
      };
    
      const removeQuantity = () => {
        dispatch(decrementCartItemQuantity({ destinationId: cartItem.destinationId }));
      };

    return (
    <div className="cartItemComponent">
        <div className="cartItemComponent">
        <h3 className="headingThree cart-total">{cartItem.destinationName}</h3>
      <div className="cart-ticket-and-price">
        <p className="par-cart">{cartItem.quantity} ticket(s)</p>
        <p className="par-cart">Price: ${cartItem.destinationPrice * cartItem.quantity}</p>
      
     
    <div  className='changeQuantity'>
        <button className="quantity" onClick={removeQuantity}><img src={imageMinus} alt="minus" /></button>
        <span className="headingFive"> {cartItem.quantity}</span>
        <button className="quantity" onClick={addQuantity}><img src={imagePlus} alt="plus" /></button>
    <span onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}><img className="icon" src={iconTrash} alt="delet icon" width="30px" /></span>
    </div>
    </div>
    </div>
</div>

)

}
 export default CartItem;