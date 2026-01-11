import ProductDetailsContainer from "@/components/product/ProductDetailsContainer";
import {
  relatedProducts,
  singleProduct,
} from "@/store/product/product.service";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId, variantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productId || !variantId) return;

    dispatch(singleProduct({ pId: productId, vId: variantId }));
    dispatch(relatedProducts(productId));
  }, [productId, variantId, dispatch]);

  return (
    <div className="w-full">
      <ProductDetailsContainer />
    </div>
  );
};

export default ProductDetails;
