import Ad1 from "./components/Ad1";
import Ad2 from "./components/Ad2";
import Categories from "./components/Categories";
import Faq from "./components/Faq";
import FlashSale from "./components/FlashSale";
import LimitedSale from "./components/LimitedSale";
import NavPay from "./components/NavPay";
import NavSec from "./components/NavSec";

function App() {
  return (
    <>
      <div>
        <NavPay />
        <div className="">
        <NavSec />
        </div>
        <div className="justify-center w-[75%] mx-auto pt-2">
          <Categories />
          <FlashSale />
          <LimitedSale />
          <Ad1 />
          <Ad2 />
          <Faq />
        </div>
      </div>
    </>
  );
}

export default App;
