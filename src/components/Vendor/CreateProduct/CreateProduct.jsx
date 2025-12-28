import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CreateProduct = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <header className="text-xl font-semibold">Add New Product</header>
        <p className="text-sm">Add a new product to store</p>
      </div>
      {/* Product Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <Card>
            <CardHeader>
              <CardTitle>Name and Description</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  Product Name
                </label>
                <Input name="productName" placeholder="Enter Product Name" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  Product Description
                </label>
                <Textarea className="h-25" placeholder="Enter Description" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Category and Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  Product Category
                </label>
                <Input
                  name="productName"
                  placeholder="Enter Product Category"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="" className="text-sm font-medium">
                  Product Tags
                </label>
                <Input name="productName" placeholder="Enter Product Tags" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Price and Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-sm font-medium">
                      Product Price
                    </label>
                    <Input
                      name="productName"
                      placeholder="Enter Product Tags"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="" className="text-sm font-medium">
                      Product Discount
                    </label>
                    <Input
                      name="productName"
                      placeholder="Enter Product Tags"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Product Stock
                  </label>
                  <Input name="productName" placeholder="Enter Product Tags" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Brand Name
                  </label>
                  <Input name="productName" placeholder="Enter Product Tags" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Operating System
                  </label>
                  <Input name="productName" placeholder="Enter Product Tags" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Ram
                  </label>
                  <Input name="productName" placeholder="Enter Product Tags" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Rom
                  </label>
                  <Input name="productName" placeholder="Enter Product Tags" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Cpu Speed
                  </label>
                  <Input name="productName" placeholder="Enter Product Tags" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm font-medium">
                    Storage Capacity
                  </label>
                  <Input name="productName" placeholder="Enter Product Tags" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
