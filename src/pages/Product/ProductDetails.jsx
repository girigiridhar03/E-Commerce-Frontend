import ProductDetailsContainer from "@/components/product/ProductDetailsContainer";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProduct from "@/components/product/RelatedProduct";
import {
  relatedProducts,
  singleProduct,
} from "@/store/product/product.service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId, variantId } = useParams();
  const { relatedProductsArr } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!productId || !variantId) return;

    dispatch(singleProduct({ pId: productId, vId: variantId }));
    dispatch(relatedProducts(productId));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [productId, variantId, dispatch]);

  return (
    <div className="w-full">
      <ProductDetailsContainer />
      <div className="p-4 mt-10">
        <ProductTabs />
      </div>
      {relatedProductsArr?.length > 0 && <RelatedProduct />}
    </div>
  );
};

export default ProductDetails;
