import React from "react";

function FlashSale() {
  const cards = [
    {
      id: 1,
      name: "Clearance sale",

      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/clearance.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 2,
      name: "Special Offers",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/global.jpg"
          width={"180"}         />
      ),
    },
    {
      id: 3,
      name: "Clearance sale",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/sneakers.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 4,
      name: "Sneakers",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/sneakers.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 5,
      name: "Refrigerators",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/refrigerator.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 6,
      name: "Best Deals",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Untitled-1.gif"
          width={"180"}
        />
      ),
    },
    {
      id: 7,
      name: "Generators",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/generators.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 8,
      name: "Computing Deals",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/computing.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 9,
      name: "Groceries",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/groceries.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 10,
      name: "#200 Off Every Order",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Untitled-1.gif"
          width={"180"}
        />
      ),
    },
    {
      id: 11,
      name: "Phones & Tablets",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/phones-tablet.jpg"
          width={"180"}
        />
      ),
    },
    {
      id: 12,
      name: "Mobile Accessories",
      img: (
        <img
          src="https://ng.jumia.is/cms/0-5-TechWeek/2024/Category-Freelink/Homepage-thumbnails/mobile-accessories.jpg" width={"180"}
        />
      ),
    },
  ];
  return (
    <div className="bg-white mt-4 grid grid-cols-6 p-2 rounded-lg text-center h-[500px]">
      {cards.map((items) => (
        <div className="hover:scale-105 rounded-lg hover:shadow-lg w-fit h-[230px]">
          <div key={items.id} className="">
            <div className="rounded-lg">
              {items.img}
            </div>
            <div className="text-sm pt-1">{items.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FlashSale;
