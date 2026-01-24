import CustomPagination from "@/components/product/CustomPagination";
import { SingleSelectDropdown } from "@/components/product/DropDown";
import LoadingCards from "@/components/product/LoadingCards";
import ProductCards from "@/components/product/ProductCards";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/store/product/product.service";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();

  const serachValue = searchParams.get("sValue");

  const SORT_OPTIONS = [
    {
      label: "Featured",
      value: "featured",
    },
    {
      label: "Price: Low to High",
      value: "asc",
    },
    {
      label: "Price: High to Low",
      value: "desc",
    },
  ];
  const [sortBy, setSortBy] = useState("featured");
  const [page, setPage] = useState(1);
  const limit = 12;
  const [search, setSearch] = useState(serachValue ?? "");
  const { allProducts, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        page,
        limit,
        key: "allProducts",
        sort: sortBy,
        search,
      }),
    );
  }, [sortBy, page, limit, search]);

  return (
    <div>
      <header className="flex items-center justify-between px-2">
        <h3 className="text-xl font-bold">All Products</h3>
        <div className="flex items-center gap-1">
          <SingleSelectDropdown
            label="Sort By"
            triggerText="Sort"
            options={SORT_OPTIONS}
            value={sortBy}
            onChange={setSortBy}
          />
          <Button size="icon-sm">
            <Filter />
          </Button>
        </div>
      </header>
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4 mt-5">
        {loading ? (
          <LoadingCards num={4} />
        ) : (
          allProducts?.products?.map((item) => (
            <ProductCards
              key={item?.variantId}
              title={item.productName}
              img={item?.images[0]?.url}
              desc={item?.description}
              price={item?.currentPrice}
              originalPrice={item?.originalPrice}
              discount={item?.discountPercent}
              slug={item?.slug}
              pId={item?._id}
              vId={item?.variantId}
            />
          ))
        )}
      </div>

      {allProducts?.totalPages > 1 && (
        <div className="my-10">
          <CustomPagination
            totalPages={allProducts?.totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
