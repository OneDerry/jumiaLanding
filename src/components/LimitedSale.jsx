import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Countdown from "./Openers/Countdown";

function LimitedSale() {
  const cards = [
    {
      id: 1,
      name: "VEJARO S03 Men's Fa...",
      price: "#1799",
      slashed: "#2000",
      left: "12 items left",
      img: (
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/380628/1.jpg?0114"
          width={"180"}
          border-radius={10}
        />
      ),
    },
    {
      id: 2,
      name: "ZEALOT B38 Wireless BT",
      price: "#18,040",
      slashed: "#32,000",
      left: "42 items left",
      img: (
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/6508372/1.jpg?1655"
          width={"180"}
        />
      ),
    },
    {
      id: 3,
      name: "Ace Elec 20000 MAh...",
      price: "#1799",
      slashed: "#2000",
      left: "12 items left",
      img: (
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3088932/1.jpg?3620"
          width={"180"}
          border-radius={10}
        />
      ),
    },
    {
      id: 4,
      name: "Itel 2 USB Port, 2A Fas...",
      price: "#2,400",
      slashed: "#4,000",
      left: "40 items left",
      img: (
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/8843522/1.jpg?2897"
          width={"180"}
        />
      ),
    },
    {
      id: 5,
      name: "Indomie Regular Chic...",
      price: "#9,980",
      slashed: "#10,900",
      left: "70 items left",
      img: (
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/885728/1.jpg?2868"
          width={"180"}
        />
      ),
    },
    {
      id: 6,
      name: "Anti Blue rays, Anti Blu...",
      price: "#2,999",
      slashed: "#4,000",
      left: "18 items left",
      img: (
        <img
          src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/651587/1.jpg?4109"
          width={"180"}
        />
      ),
    },
  ];
  return (
    <div className="w-full h-full mt-4 rounded-lg">
      <div className="w-full bg-[#e61601] text-white font-bold text-xl flex justify-between items-center ">
        <p>Limited Offers</p>
        <div>
          <Countdown hours={17} minutes={40} seconds={45} />
        </div>
        <p className="text=">
          <a href="#">
            see all <MdKeyboardArrowRight style={{ display: "inline-block" }} />
          </a>
        </p>
      </div>
      <div className="bg-white grid grid-cols-6 gap-2 w-full h-[350px] p-4 ">
        {cards.map((items) => (
          <div className=" rounded-lg hover:shadow-lg hover:scale-105">
            <div key={items.id} className="p-2 text-left">
              <div className="">{items.img}</div>
              <div className="">{items.name}</div>
              <div className="">{items.price}</div>
              <div className="">{items.slashed}</div>
              <div className="">{items.left}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LimitedSale;
