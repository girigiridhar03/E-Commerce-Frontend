import { Button } from "@/components/ui/button";
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
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  getCategoryNames,
  getSelectedFields,
} from "@/store/category/category.service";
import { Info } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [att, setAtt] = useState({});
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAttributes = (e) => {
    const { name, value } = e.target;

    setAtt((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 5) {
      toast.warning("You can upload only 5 images");
      return;
    }

    const validTypes = ["image/jpeg", "image/png"];

    const invalid = files.some((file) => !validTypes.includes(file.type));
    if (invalid) {
      toast.warning("Only JPG and PNG images allowed");
      return;
    }

    setImages(files);
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);

    if (updated.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFormData = (e) => {
    e.preventDefault();

    const payload = new FormData();

    payload.append("productName", formData?.productName);
    payload.append("description", formData?.description);
    payload.append("category", formData?.category);
    payload.append("tags", formData?.tags?.split(","));
    payload.append("variants", {
      color: formData?.color,
      originalPrice: formData?.originalPrice,
      discountPercent: formData?.discount,
      stock: formData?.stock,
    });
    payload.append("images", images);
    payload.append("brand", formData?.brand);
    payload.append("attributes", att);

    console.log("payload", payload);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <header className="text-xl font-semibold">Create A Product</header>
          <p className="text-sm">Add a new product to store</p>
        </div>
        <Button onClick={handleFormData}>Create</Button>
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
                <label htmlFor="productName" className="text-sm font-bold">
                  Product Name
                </label>
                <Input
                  id="productName"
                  name="productName"
                  value={formData?.productName ?? ""}
                  placeholder="Enter Product Name"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="description" className="text-sm font-bold">
                  Product Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData?.description ?? ""}
                  className="h-25"
                  placeholder="Enter Description"
                  onChange={handleChange}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Category and Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="category" className="text-sm font-bold">
                  Product Category
                </label>
                <Select
                  value={categoryId}
                  onValueChange={(value) => {
                    setSelectedCategoryId(value);
                    setFormData((prev) => ({ ...prev, category: value }));
                  }}
                >
                  <SelectTrigger id="category" className="w-full">
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
                <label
                  htmlFor="tags"
                  className="text-sm font-medium flex gap-1.5 items-center"
                >
                  <span> Product Tags</span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <Info size={11} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>Add common after each word</TooltipContent>
                  </Tooltip>
                </label>
                <Input
                  id="tags"
                  name="tags"
                  value={formData?.tags ?? ""}
                  placeholder="Enter Product Tags"
                  onChange={handleChange}
                />
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
                    <label
                      htmlFor="originalPrice"
                      className="text-sm font-bold"
                    >
                      Product Price
                    </label>
                    <Input
                      id="originalPrice"
                      name="originalPrice"
                      type="number"
                      placeholder="Enter Product Tags"
                      value={formData?.originalPrice ?? ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="discount" className="text-sm font-bold">
                      Product Discount
                    </label>
                    <Input
                      id="discount"
                      type="number"
                      name="discount"
                      placeholder="Enter Product Discount"
                      value={formData?.discount ?? ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="stock" className="text-sm font-bold">
                    Product Stock
                  </label>
                  <Input
                    id="stock"
                    type="number"
                    name="stock"
                    placeholder="Enter Product Stock"
                    value={formData?.stock ?? ""}
                    onChange={handleChange}
                  />
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
            <CardContent className="max-h-90 overflow-y-auto pb-2.5">
              <div className="grid grid-cols-2 gap-4">
                {selectedFields?.map((item) => (
                  <div key={item?._id} className="flex flex-col gap-1">
                    <label htmlFor={item?.label} className="text-sm font-bold">
                      {item?.label}
                    </label>
                    <Input
                      name={item?.label}
                      id={item?.label}
                      required={item?.required}
                      placeholder={`Enter ${item?.label?.toLowerCase()}`}
                      value={att[item?.label] ?? ""}
                      onChange={handleAttributes}
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label htmlFor="color" className="text-sm font-bold">
                    Product Colour
                  </label>
                  <Input
                    id="color"
                    type="text"
                    name="color"
                    placeholder="Enter Product Colour"
                    value={formData?.color ?? ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="brand" className="text-sm font-bold">
                    Product Brand
                  </label>
                  <Input
                    id="brand"
                    type="text"
                    name="brand"
                    placeholder="Enter Product Brand"
                    value={formData?.brand ?? ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <label htmlFor="images" className="text-sm font-bold">
                  Upload Images
                </label>
                <Input
                  ref={fileInputRef}
                  id="images"
                  type="file"
                  name="images"
                  multiple
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                />
              </div>
              {images.length > 0 && (
                <div className="grid grid-cols-5 gap-3 mt-3">
                  {images.map((file, index) => (
                    <div
                      key={index}
                      className="relative border rounded-md overflow-hidden group"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="h-24 w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
