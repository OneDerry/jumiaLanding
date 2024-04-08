import React from "react";
import { CiApple } from "react-icons/ci";
import { GrHomeRounded } from "react-icons/gr";
import { PiCookingPot } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { FcElectronics } from "react-icons/fc";
import { TbBabyBottle } from "react-icons/tb";
import { GiConsoleController } from "react-icons/gi";
import { PiPaintBrushThin } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import CAtSlide from "./Openers/CAtSlide";
import { SlSocialDropbox } from "react-icons/sl";
import { LuWarehouse } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";

function Categories() {
  return (
    <div className="flex h-[400px] pt-4 gap-2">
      <div className="bg-white w-1/5 h-full pt-2 rounded-lg">
        <ul className="p-4 pb-3">
          <li className="hover:text-orange-600">
            <a href="https://www.jumia.com.ng/groceries/" className="flex items-center">
              <CiApple style={{ display: "inline" }} />
              Supermarket
            </a>
          </li>
          <li className="hover:text-orange-600">
            <PiPaintBrushThin style={{ display: "inline" }} />
            <a href="https://www.jumia.com.ng/health-beauty/" className="flex items-center w-full">
              Health & Beauty
            </a>
          </li>
          <li className="hover:text-orange-600">
            <GrHomeRounded style={{ display: "inline" }} />
            <a href="https://www.jumia.com.ng/home-office/" className="flex items-center w-full">Home & Office</a>
          </li>
          <li className="hover:text-orange-600">
            <PiCookingPot style={{ display: "inline-block" }} />
            <a href="https://www.jumia.com.ng/mlp-appliances/">Appliances</a>
          </li>
          <li className="hover:text-orange-600">
            <IoPhonePortraitOutline style={{ display: "inline-block" }} />
            <a href="https://www.jumia.com.ng/phones-tablets/">
              Phones & Tablets
            </a>
          </li>
          <li className="hover:text-orange-600">
            <FaComputer style={{ display: "inline-block" }} />
            <a href="https://www.jumia.com.ng/computing/">Computing</a>
          </li>
          <li className="hover:text-orange-600">
            <FcElectronics style={{ display: "inline-block" }} />
            <a href="https://www.jumia.com.ng/electronics/">Electronics</a>
          </li>
          <li className="hover:text-orange-600">
            <GiClothes style={{ display: "inline-block" }} />
            <a href="https://www.jumia.com.ng/category-fashion-by-jumia/">
              Fashion
            </a>
          </li>
          <li className="hover:text-orange-600">
            <TbBabyBottle style={{ display: "inline-block" }} />
            <a href="https://www.jumia.com.ng/baby-products/">Baby Products</a>
          </li>
          <li className="hover:text-orange-600">
            <GiConsoleController style={{ display: "inline-block" }} />
            <a href="https://www.jumia.com.ng/video-games/">Gaming</a>
          </li>
        </ul>
      </div>
      <div className=" w-3/5">
        <CAtSlide />
      </div>
      <div className=" w-1/5 ">
        <div className="bg-white w-full h-1/2 rounded-sm p-4 leading-10">
          <p>
            <a href="http://">
              <MdOutlinePhoneInTalk style={{ display: "inline" }} />
              CALL TO ORDER
              <br />
              0700-200-0000
            </a>
          </p>
          <p>
            <a href="http://">
              <LuWarehouse style={{ display: "inline" }} />
              Sell on Jumia
            </a>
          </p>
          <p>
            <a href="http://">
              <SlSocialDropbox style={{ display: "inline" }} />
              Best Deals
            </a>
          </p>
        </div>
        <div className="h-1">
          <img
            src="https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/shop_earn.png"
            style={{ width: "100%" }}
            className="rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
