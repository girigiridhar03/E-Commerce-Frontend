import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  getCategoryNames,
  getSelectedFields,
} from "@/store/category/category.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { categoryNames, selectedFields } = useSelector(
    (state) => state.category,
  );
  const [categoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    dispatch(getCategoryNames());
  }, [dispatch]);

  useEffect(() => {
    if (categoryNames?.length > 0) {
      setSelectedCategoryId(categoryNames[0]._id);
    }
  }, [categoryNames]);

  useEffect(() => {
    if (!categoryId) return;
    dispatch(getSelectedFields(categoryId));
  }, [categoryId]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <header className="text-xl font-semibold">Create A Product</header>
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
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="" className="text-sm font-medium">
                  Product Category
                </label>
                <Select
                  value={categoryId}
                  onValueChange={(value) => setSelectedCategoryId(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      {categoryNames?.map((item) => (
                        <SelectItem key={item?._id} value={item?._id}>
                          {item?.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                {selectedFields?.map((item) => (
                  <div key={item?._id} className="flex flex-col gap-1">
                    <label htmlFor={item?.label} className="text-sm font-medium">
                       {item?.label}
                    </label>
                    <Input
                      name={item?.label}
                      id={item?.label}
                      required={item?.required}
                      placeholder={`Enter ${item?.label?.toLowerCase()}`}
                    />
                  </div>
                ))}

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
