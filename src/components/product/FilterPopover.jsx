import { Filter } from "lucide-react";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Field, FieldGroup } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

const FilterPopover = ({
  categoryNames,
  selectedCategory,
  setSelectedCategory,
  setPage,
}) => {
  const handleCategoryChange = (id, checked) => {
    setPage(1);
    if (checked) {
      setSelectedCategory(id);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon-sm">
          <Filter />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="text-lg font-bold">Filter</div>
        <Separator />

        <div className="my-2 px-2">
          <div className="font-semibold">Product Categories</div>

          <FieldGroup className="gap-4 px-1 py-2">
            {categoryNames?.map((item) => (
              <Field key={item?._id} orientation="horizontal" className="gap-2">
                <Checkbox
                  id={item?._id}
                  checked={selectedCategory === item?._id}
                  onCheckedChange={(checked) => {
                    handleCategoryChange(item?._id, checked);
                  }}
                />
                <Label htmlFor={item?._id} className="capitalize">
                  {item.name} ({item?.count})
                </Label>
              </Field>
            ))}
          </FieldGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopover;
