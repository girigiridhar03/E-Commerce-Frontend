import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import QtyInput from "./QtyInput";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartCount,
  decreaseCartItemCount,
  deleteProductFromCart,
  getCartItems,
} from "@/store/cart/cart.service";
import { Loader2 } from "lucide-react";

const CartCard = ({ productDetails, selectedVariant, qty }) => {
  const dispatch = useDispatch();
  const { deleteVarLoading } = useSelector((state) => state.cart);

  const isLoading = deleteVarLoading[selectedVariant?._id];

  const handleIncrease = (currentValue) => {
    dispatch(
      addToCart({
        productId: productDetails?._id,
        variantId: selectedVariant?._id,
        quantity: currentValue,
      }),
    );
  };

  const handleDecrease = () => {
    dispatch(
      decreaseCartItemCount({
        pId: productDetails?._id,
        vId: selectedVariant?._id,
      }),
    );
  };

  const handleRemove = async () => {
    await dispatch(
      deleteProductFromCart({
        pId: productDetails?._id,
        vId: selectedVariant?._id,
      }),
    );

    await dispatch(getCartItems());
    await dispatch(cartCount());
  };

  return (
    <Card className="flex flex-row gap-4 p-4 items-start">
      {/* IMAGE */}
      <div className="relative w-32 h-32 shrink-0">
        {selectedVariant?.discountPercent > 0 && (
          <Badge variant="destructive" className="absolute top-2 right-2 ">
            -{selectedVariant.discountPercent}%
          </Badge>
        )}

        <img
          src={selectedVariant?.images?.[0]?.url}
          alt={productDetails?.productName}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        <h2 className="font-semibold text-lg">{productDetails?.productName}</h2>

        <div className="flex items-center gap-3">
          <span className="text-lg font-bold">
            ₹{selectedVariant?.currentPrice?.toLocaleString()}
          </span>

          <span className="text-sm line-through text-red-500">
            ₹{selectedVariant?.originalPrice?.toLocaleString()}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          Color: {selectedVariant?.color}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <QtyInput
            qty={qty}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <Button
            variant="destructive"
            size="sm"
            onClick={handleRemove}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Removing...
              </>
            ) : (
              <>Remove</>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CartCard;
