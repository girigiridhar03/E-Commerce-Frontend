import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  addNewCategoryAndFields,
  getCategoryNames,
} from "@/store/category/category.service";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryModal = () => {
  const [inputs, setInputs] = useState([
    {
      label: "",
      type: "",
      required: false,
    },
  ]);
  const { loading } = useSelector((state) => state.category);
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;

    setInputs((prev) =>
      prev.map((item, index) =>
        index === i
          ? {
              ...item,
              [name]: type === "checkbox" ? checked : value,
            }
          : item,
      ),
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewCategoryAndFields({ name: categoryName, fields: inputs }));
    dispatch(getCategoryNames());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Category</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-175">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>Create a new category here.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="capitalize text-sm font-bold">
              Category Name
            </Label>
            <Input
              id="name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {inputs?.map((item, i) => {
              const labelArr = Object.keys(item);

              return (
                <div key={`Field-${i}`} className="flex items-center gap-1.5">
                  <div className="grid gap-2 w-full">
                    <Label
                      htmlFor={labelArr[0]}
                      className="capitalize text-sm font-bold"
                    >
                      {labelArr[0]}
                    </Label>
                    <Input
                      id={labelArr[0]}
                      name={labelArr[0]}
                      value={item?.label}
                      placeholder={`Enter ${labelArr[0]}`}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                  <div className="grid gap-2 w-full">
                    <Label
                      htmlFor={labelArr[1]}
                      className="capitalize text-sm font-bold"
                    >
                      {labelArr[1]}
                    </Label>
                    <Select
                      value={item.type}
                      onValueChange={(value) =>
                        setInputs((prev) =>
                          prev.map((field, index) =>
                            index === i ? { ...field, type: value } : field,
                          ),
                        )
                      }
                    >
                      <SelectTrigger className="w-full" id={labelArr[1]}>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="number">Number</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                        <SelectItem value="select">Select</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2 pt-6">
                    <Switch
                      checked={item.required}
                      onCheckedChange={(value) =>
                        setInputs((prev) =>
                          prev.map((field, index) =>
                            index === i ? { ...field, required: value } : field,
                          ),
                        )
                      }
                    />
                    <span className="text-sm font-medium">Required</span>
                  </div>

                  <div className="flex items-end gap-2 h-full">
                    <Button
                      size="icon"
                      onClick={() =>
                        setInputs((prev) => [
                          ...prev,
                          { label: "", type: "", required: false },
                        ])
                      }
                      disabled={loading}
                    >
                      <Plus />
                    </Button>
                    {inputs?.length > 1 && (
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() =>
                          setInputs((prev) =>
                            prev.filter((_, idx) => idx !== i),
                          )
                        }
                        disabled={loading}
                      >
                        <Trash />
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button type="submit" onClick={handleSubmit} disabled={loading}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;
