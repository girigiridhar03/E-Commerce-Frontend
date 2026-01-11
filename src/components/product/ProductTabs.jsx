import { useSelector } from "react-redux";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ProductTabs = () => {
  const { singleProductDetails, sLoading } = useSelector(
    (state) => state.product
  );

  return (
    <Tabs defaultValue="description">
      <TabsList>
        <TabsTrigger
          value="description"
          className="
        data-[state=active]:text-foreground
        data-[state=active]:border-b-2
        data-[state=active]:border-primary"
        >
          Description
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="
        data-[state=active]:text-foreground
        data-[state=active]:border-b-2
        data-[state=active]:border-primary"
        >
          Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="p-3.5"  >
        {singleProductDetails?.selectedVariant?.description}
      </TabsContent>

      <TabsContent value="reviews">{/* reviews */}</TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
