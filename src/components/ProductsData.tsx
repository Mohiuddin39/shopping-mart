"use client";
import React from "react";
import { ItemProps } from "../../types";
import Image from "next/image";
import { CalPertage } from "@/helpers";
import FormatedPrice from "./FormatedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

const ProductsData = ({ item }: ItemProps) => {
  const starArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className=" text-yellow-400">
      <IoIosStar />
    </span>
  ));

  return (
    <div className=" w-full overflow-hidden rounded-lg">
      <div>
        <Link href={{pathname:"./product", query:{_id:item?._id}}}>
        <div className="w-full h-96 overflow-hidden group relative">
          <Image
            src={item?.image}
            alt="Products Image"
            width={500}
            height={500}
            className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-lg"
          />
          {item?.isNew && (
            <span className=" absolute right-2 top-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-orange-600 group-hover:text-white duration-200">
              New Arival
            </span>
          )}
        </div>
        </Link>
        <div
          className=" border-[1px] border-slate-300 border-t-0 px-2 py-4 
        flex flex-col gap-y-2 bg-white rounded-b-lg"
        >
          <p>{item?.title}</p>
          <div className=" flex items-center justify-between">
            <div className="border-[1px] border-orange-600 text-xs px-4 py-1 rounded-full">
              <p>{CalPertage(item?.price, item?.oldPrice)}% off</p>
            </div>
            <div className="flex items-center gap-x-2">
              <p className=" text-slate-500 line-through text-sm">
                <FormatedPrice amount={item?.oldPrice} />
              </p>
              <p className=" font-semibold">
                <FormatedPrice amount={item?.price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className=" bg-orange-600 text-slate-100 py-2 px-4 text-xs tracking-wide hover:bg-orange-800 hover:text-white duration-200 rounded-full uppercase">
              add to card
            </button>
            {/* starIcon */}
            <div className=" flex items-center gap-x-1">{starArray}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsData;
