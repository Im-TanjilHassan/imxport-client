import React from "react";
import { GiSleevelessJacket } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { GiSonicShoes } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import { TbSunglassesFilled } from "react-icons/tb";
import { FaLaptop } from "react-icons/fa";

const Category = () => {
  return (
    <div className="mb-10 px-4">
      <div className="flex items-center space-x-6 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          Category
        </h2>
        <hr className="text-secondary w-full" />
      </div>
      <div className="px-20 flex flex-wrap gap-5 justify-around items-center">
        <div className="border-2 w-22 h-22 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary-content">
          <div>
            <GiSleevelessJacket className="text-2xl mx-auto" />
            <p className="font-semibold">JACKET</p>
          </div>
        </div>
        <div className="border-2 w-22 h-22 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary-content">
          <div>
            <FaShoppingBag className="text-2xl mx-auto" />
            <p className="font-semibold">BAG</p>
          </div>
        </div>
        <div className="border-2 w-22 h-22 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary-content">
          <div>
            <GiSonicShoes className="text-2xl mx-auto" />
            <p className="font-semibold">SHOES</p>
          </div>
        </div>
        <div className="border-2 w-22 h-22 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary-content">
          <div>
            <PiPantsFill className="text-2xl mx-auto" />
            <p className="font-semibold">JEANS</p>
          </div>
        </div>
        <div className="border-2 w-22 h-22 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary-content">
          <div>
            <TbSunglassesFilled className="text-2xl mx-auto" />
            <p className="font-semibold">SUNGLASS</p>
          </div>
        </div>
        <div className="border-2 w-22 h-22 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary-content">
          <div>
            <FaLaptop className="text-2xl mx-auto" />
            <p className="font-semibold">LAPTOP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
