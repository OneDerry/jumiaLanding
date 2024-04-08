import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdStars } from "react-icons/md";
function NavSec() {
  return (
    <div className="bg-white w-full p-4 rounded top-0 sticky shadow-lg">
      <div className="flex mx-auto justify-between w-[75%]">
        <div className="">
          <h1 className="text-4xl font-mono">
            <a href="#" className="flex items-center">
              JUMIA
              <MdStars style={{ display: "inline", color: "orange", marginLeft: "4px" }} />
            </a>
          </h1>
        </div>
        <div className="">
        <AiOutlineSearch style={{ display: "inline-block"}} />
          <input
            type="search"
            className="p-2 mx-2 border-2 rounded "
            placeholder="Search products, brands and categories"
          />
          <button
            type="submit"
            className="bg-orange-500 p-2 hover:bg-orange-600 rounded shadow-xl w-20"
          >
            SEARCH
          </button>
        </div>
        <div className="flex items-center list-none">
          <li className="text-[18px]  hover:text-orange-600  text-bold">
            <a href="http://" className="flex items-center mr-1" >
              <VscAccount style={{ display: "inline-block" }} />
              Account
            </a>
          </li>
          <li className="text-[18px] text-bold hover:text-orange-600">
            <a href="http://" className="flex items-center mr-1">
              <RxQuestionMarkCircled style={{ display: "inline-block" }} />
              Help
            </a>
          </li>
          <li className="text-[18px] text-bold hover:text-orange-600">
            <a href="https://www.jumia.com.ng/cart/" className="flex items-center">
              <MdOutlineShoppingCart style={{ display: "inline-block" }} />
              Cart
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavSec;
