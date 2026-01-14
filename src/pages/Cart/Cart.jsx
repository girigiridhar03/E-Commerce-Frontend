import { getCartItems } from "@/store/cart/cart.service";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartLoading, cartDetails } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return <div>Cart</div>;
};

export default Cart;
