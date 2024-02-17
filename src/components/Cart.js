import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" text-center w-6/12 m-auto">
      <button
        className=" border bg-black text-white px-2 py-2 my-4 "
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      {cartItem &&
        cartItem.map((cart) => (
          <ItemList key={cart?.card?.info?.id} itemData={cart} />
        ))}
    </div>
  );
};

export default Cart;
