import { Card } from "../ui/card";
import { Button } from "../ui/button";

const CartSummary = ({ summary }) => {

  return (
    <Card className="p-5 sticky top-20">
      <h2 className="text-lg font-semibold mb-4">Price Details</h2>

      <div className="flex justify-between text-sm mb-1">
        <span>Total Products</span>
        <span>{summary?.totalProducts}</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Total Quantity</span>
        <span>{summary?.totalQuantity}</span>
      </div>
      <div className="flex justify-between text-sm mb-1">
        <span>Subtotal</span>
        <span>₹{summary?.totalAmount?.toLocaleString()}</span>
      </div>

      <div className="flex justify-between text-sm mb-1">
        <span>Delivery</span>
        <span className="text-green-600">FREE</span>
      </div>

      <hr className="my-2" />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{summary?.totalAmount?.toLocaleString()}</span>
      </div>

      <Button className="w-full mt-4">Proceed to Checkout</Button>
    </Card>
  );
};

export default CartSummary;
