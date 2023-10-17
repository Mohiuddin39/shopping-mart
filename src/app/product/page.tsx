import Container from "@/components/Container";
import ProductsData from "@/components/ProductsData";
import { getSingleProduct, getTrandingProducts } from "@/helpers";
import React from "react";
import { Products } from "../../../types";
import SingleProduct from "@/components/SingleProduct";
type props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const ProductPage = async ({ searchParams }: props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = getSingleProduct(_id);
  const data = await getTrandingProducts();

  return (
    <>
      <Container>
        <SingleProduct product={product} />
        <div>
          <p className="text-xl font-semibold py-1">Tranding Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {data.map((item: Products) => (
              <ProductsData key={item._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
