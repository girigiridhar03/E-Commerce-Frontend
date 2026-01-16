import CartCard from "@/components/cart/CartCard";
import { getCartItems } from "@/store/cart/cart.service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartLoading, cartDetails } = useSelector((state) => state.cart);
  const { summary, cartItems } = cartDetails || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <div className="w-full mx-auto px-4 py-2">
      <h1 className="text-2xl font-bold mb-6">My Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/*  CART ITEMS */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cartItems?.map((item) => (
            <CartCard
              key={item?.selectedVariant?._id}
              productDetails={item.productDetails}
              selectedVariant={item.selectedVariant}
              qty={item.quantity}
            />
          ))}
        </div>

        {/*  SUMMARY */}
        <div className="lg:col-span-1">
          {/* <CartSummary cartItems={cartItems} /> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
