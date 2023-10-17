"use client";
import Slider from "react-slick";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-0 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-0 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="w-full h-full relative mb-10">
          <Image
            src={bannerone}
            className=" w-full h-full relative"
            alt="BannerOne"
          />
          <BannerText title="Outware Picks" />
        </div>
        <div className="w-full h-full relative mb-10">
          <Image
            src={bannertwo}
            className=" w-full h-full relative"
            alt="BannerTwo"
          />
          <BannerText title="Seasonal Offers" />
        </div>
        <div className="w-full h-full relative mb-10">
          <Image
            src={bannerthree}
            className=" w-full h-full relative"
            alt="BannerThree"
          />
          <BannerText title="Best for men" />
        </div>
      </Slider>
      {/* <div className="absolute w-full h-44 sm:h-0 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" /> */}
    </>
  );
};

export default Banner;
