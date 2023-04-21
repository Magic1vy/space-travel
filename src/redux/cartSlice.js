import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
        const destination = action.payload.destination;
      
        const existingCartItem = state.cartItems.find(
          (item) => item.destinationId === destination.id
        );
      
        if (existingCartItem) {
          existingCartItem.quantity += action.payload.quantity;
          existingCartItem.totalPrice =
            existingCartItem.quantity * existingCartItem.destinationPrice;
        } else {
          const newItemId = new Date().getTime();
          state.cartItems.push({
            id: newItemId, 
            destinationId: destination.id,
            destinationName: destination.name,
            destinationPrice: destination.price,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * destination.price,
          });
        }
      },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
    },
    incrementCartItemQuantity: (state, action) => {
        const { destinationId, quantity } = action.payload;
      
        const cartItem = state.cartItems.find(
          (item) => item.destinationId === destinationId
        );
      
        if (cartItem) {
          if (quantity > 1) {
            cartItem.quantity += quantity;
          } else {
            cartItem.quantity += 1;
          }
          cartItem.totalPrice = cartItem.quantity * cartItem.destinationPrice;
        }
      },
      decrementCartItemQuantity: (state, action) => {
        const { destinationId } = action.payload;
  
        const cartItem = state.cartItems.find(
          (item) => item.destinationId === destinationId
        );
  
        if (cartItem && cartItem.quantity > 1) {
          cartItem.quantity -= 1;
          cartItem.totalPrice = cartItem.quantity * cartItem.destinationPrice;
        }
      },
  },
});

export const getTotalPrice = (state) => {
  return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total;
  }, 0);
};

export const getCartItems = (state) => state.cart.cartItems;
export const {
    addItemToCart,
    removeItemFromCart,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = slice.actions;
export default slice.reducer;