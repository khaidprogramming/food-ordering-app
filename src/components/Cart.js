import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  // console.log(cartItem);
  const dispatch = useDispatch();

 

  
  
  const result = cartItem.reduce((acc, card) => {
    const existingCard = acc.find(item => item.id === card?.id);
    if (existingCard) {
      existingCard.count++;
    } else {
      acc.push({ id: card?.id, count: 1, data: card });
    }
    return acc;
  }, []);

  console.log(result);
  
  // console.log(result);
  

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
        result.map((item) => (
          <ItemList key={item?.id} itemData={item?.data} count={item.count} />
        ))}
    </div>
  );
};

export default Cart;
