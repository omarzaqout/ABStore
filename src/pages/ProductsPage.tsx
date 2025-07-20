import Filter from "../components/filter/filter";
import NotFound from "../components/NoItems/notFound";
import Card from "../components/card/Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts } from "../app/features/product/productSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../app/store";
import SkeletonCard from "../components/card/SkeletonCard";
const ProductsPage = () => {
    const { category } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    const product = useSelector(({ product }: RootState) => product);

    const products = product.products;
    const categoryCount = product.categoryCount;
    const filteredData = category
        ? products.filter((item) => item.category.toLowerCase() === category.toLowerCase())
        : products;
    const isLoading = product.loading;



    return (
        <div className="h-full w-full flex flex-col items-center py-[75px] max-[768px]:px-5 max-[768px]:py-[50px]">
            <div className="w-full max-[992px]:max-w-[728px] max-w-[940px] flex flex-col  lg:p-0">
                <Filter currentCategory={category} categoryCount={categoryCount} />
                <div className="flex flex-wrap gap-4 ">
                    {isLoading ?
                        <div className="flex flex-wrap gap-4">
                            {[...Array(4)].map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                        : filteredData.length === 0 ? (
                            <NotFound />
                        ) : (
                            filteredData.map((item) => (
                                <Card
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    description={item.description}
                                    category={item.category} />
                            ))
                        )}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
