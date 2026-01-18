import CartCard from "@/components/cart/CartCard";
import CartSummary from "@/components/cart/CartSummary";
import { Button } from "@/components/ui/button";
import { getCartItems } from "@/store/cart/cart.service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartLoading,
    summary,
    cartItems,
    cartCountNum = 0,
  } = useSelector((state) => state.cart);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  if (cartCountNum === 0 || cartItems?.length === 0) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center">
        <div className="flex gap-2 flex-col">
          <p className="text-lg font-semibold">Cart is Empty.</p>
          <Link to="/">
            <Button className="mx-auto block">Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

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
          <CartSummary summary={summary} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
