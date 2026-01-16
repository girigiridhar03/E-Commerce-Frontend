import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Loader2, ShoppingCart } from "lucide-react";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartCount } from "@/store/cart/cart.service";

const ProductCards = ({
  img,
  title,
  desc,
  price,
  originalPrice,
  discount,
  slug,
  pId,
  vId,
}) => {
  const dispatch = useDispatch();
  const { cartLoadingByVariant } = useSelector((state) => state.cart);
  const isLoading = cartLoadingByVariant[vId];

  const handleCart = async () => {
    if (isLoading) return;

    const result = await dispatch(
      addToCart({
        productId: pId,
        variantId: vId,
        quantity: 1,
        productName: title,
      })
    ).unwrap();
    if (result.success) {
      dispatch(cartCount());
    }
  };
  return (
    <Card className="bg-background overflow-hidden transition hover:shadow-md flex flex-col">
      {/* Image */}
      <Link
        className="h-48 w-full relative"
        to={`/products/${slug}/${pId}/${vId}`}
      >
        <div className="h-full w-full">
          {discount && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              -{discount}%
            </Badge>
          )}

          <img src={img} alt={title} className="object-contain h-full w-full" />
        </div>
      </Link>

      {/* Content */}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>

        <div className="flex items-center gap-2">
          <div className="text-lg font-bold">₹{price?.toLocaleString()}</div>

          {originalPrice && (
            <div className="line-through text-smu text-red-600">
              ₹{originalPrice.toLocaleString()}
            </div>
          )}
        </div>
      </CardHeader>

      <Link className="flex-1" to={`/products/${slug}/${pId}/${vId}`}>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>
        </CardContent>
      </Link>

      {/* Footer */}
      <CardFooter className="justify-end">
        <Button
          className="flex gap-2 hover:scale-[1.02] transition"
          onClick={() => handleCart(pId, vId, title)}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" />
              Adding...
            </>
          ) : (
            <>
              <ShoppingCart />
              Add To Cart
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCards;
