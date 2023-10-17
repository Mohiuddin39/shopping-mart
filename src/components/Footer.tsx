"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
} from "react-icons/bs";
import payment from "@/images/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-darkText text-slate-100">
        <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-y-4">
            <Logo />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              architecto ducimus unde perferendis rerum fuga labore velit
              laudantium reprehenderit modi, nesciunt, ab voluptatibus
              consectetur aut magni aperiam, necessitatibus quod tempora.
            </p>
            <div className="flex gap-x-4 items-center">
              <a href="#">
                <span className="socalIcon">
                  <BsYoutube />
                </span>
              </a>
              <a href="#">
                <span className="socalIcon">
                  <BsGithub />
                </span>
              </a>
              <a href="#">
                <span className="socalIcon">
                  <BsLinkedin />
                </span>
              </a>
              <a href="#">
                <span className="socalIcon">
                  <BsReddit />
                </span>
              </a>
              <a href="#">
                <span className="socalIcon">
                  <BsFacebook />
                </span>
              </a>
            </div>
          </div>
          <div>
            <p className=" text-lg">Latest posts</p>
            <ul className="text-sm font-light mt-2 flex flex-col  gap-y-2 ">
              <li className=" flex flex-col">
                <span className=" text-slate-100 hover:text-orange-600">
                  Where Music Is Headed Next
                </span>
                <span className=" text-orange-600">January 31, 2022</span>
              </li>
              <li className=" flex flex-col">
                <span className=" text-slate-100 hover:text-orange-600">
                  Sports Brand New Advertising Campaign
                </span>
                <span className=" text-orange-600">January 31, 2022</span>
              </li>
              <li className=" flex flex-col">
                <span className=" text-slate-100 hover:text-orange-600">
                  Snippets From The Tech Mobile Conference
                </span>
                <span className=" text-orange-600">January 31, 2022</span>
              </li>
              <li className=" flex flex-col">
                <span className=" text-slate-100 hover:text-orange-600">
                  New Music Video Will Blow Your Minds
                </span>
                <span className=" text-orange-600">January 31, 2022</span>
              </li>
            </ul>
          </div>
          <div>
            <p className=" text-lg">Links</p>
            <ul className="flex flex-col mt-2 gap-y-2 font-medium text-base">
              <Link href={"/"}>
                <li className=" hover:text-orange-500 cursor-pointer duration-200">
                  Home
                </li>
              </Link>
              <Link href={"/card"}>
                <li className=" hover:text-orange-500 cursor-pointer duration-200">
                  Card
                </li>
              </Link>
              <Link href={"/about"}>
                <li className=" hover:text-orange-500 cursor-pointer duration-200">
                  About
                </li>
              </Link>
              <Link href={"/newsletter"}>
                <li className=" hover:text-orange-500 cursor-pointer duration-200">
                  NewsLetter
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className=" hover:text-orange-500 cursor-pointer duration-200">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <p className=" text-lg mt-2">Pay us with your trusted services</p>
            <Image
              src={payment}
              alt="pay banner iamage"
              className=" w-full h-10 mt-3 object-cover"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
