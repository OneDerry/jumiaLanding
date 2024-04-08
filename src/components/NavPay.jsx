import React from "react";
import { RiSecurePaymentLine } from "react-icons/ri";


function NavPay() {
  return ( 
    <div className="flex mx-auto justify-between w-[75%]">
      <div className="w-1/2 text-orange-400 decoration-1 decoration-amber-700 hover:text-orange-600">
        <a href="https://www.jumia.com.ng/marketplace-vendor/" style={{textDecoration: "underline"}}>Sell on Jumia</a>
      </div>
      <div className="w-1/2 text-blue-950 text-bold">
        <a href="https://pay.jumia.com.ng/?utm_source=jumia&utm_medium=mall&utm_campaign=venturebar"><RiSecurePaymentLine className="transform hover:scale-150 hover:text-blue-400  transition-transform duration-300 size-5"/></a>
      </div>
    </div>
  );
}

export default NavPay;
