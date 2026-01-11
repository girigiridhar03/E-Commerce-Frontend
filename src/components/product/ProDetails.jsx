import React from "react";
import { Button } from "../ui/button";

const ProDetails = ({ singleProductDetails }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col p-3.5 gap-3">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold">
          {singleProductDetails?.productName}
        </h3>

        <p className="text-sm leading-6 max-w-130">
          {singleProductDetails?.selectedVariant?.description?.length <= 600
            ? singleProductDetails?.selectedVariant?.description
            : `${singleProductDetails?.selectedVariant?.description.slice(
                0,
                600
              )}...`}
        </p>
      </div>

      {/* Price Section */}
      <div>
        <div className="flex items-center gap-2">
          {singleProductDetails?.selectedVariant?.discountPercent > 0 && (
            <span className="text-red-500 text-sm font-medium">
              -{singleProductDetails.selectedVariant.discountPercent}%
            </span>
          )}

          <span className="text-xl font-semibold">
            ₹
            {singleProductDetails?.selectedVariant?.currentPrice?.toLocaleString()}
          </span>
        </div>

        <div className="text-xs font-semibold">
          <span className="text-gray-500">M.R.P</span>{" "}
          <span className="text-red-500 line-through">
            ₹
            {singleProductDetails?.selectedVariant?.originalPrice?.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Attributes */}
      <div>
        {Object.keys(
          singleProductDetails?.selectedVariant?.attributes || {}
        ).map((key) => (
          <div key={key} className="text-sm">
            <span className="font-semibold">{key}: </span>
            <span>
              {singleProductDetails?.selectedVariant?.attributes[key]}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button className="w-full md:w-auto mt-4 md:mt-auto">Add to cart</Button>
    </div>
  );
};

export default ProDetails;
