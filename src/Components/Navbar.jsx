import Logo from "../assets/logo.svg";
import { BsCart } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full bg-[#0F0E0E] h-24">
      <div className="max-w-[1540px] mx-auto flex justify-between items-center h-full  px-10 text-[#FFFFFF]">
        <div className=" ">
          <img src={Logo} alt="" />
        </div>
        <div>
          <nav>
            <ul className="flex ">
              <li className="px-4 font-medium text-[17px]">Home</li>
              <li className="px-4 font-medium text-[17px]">Products</li>
              <li className="px-4 font-medium text-[17px]">Accessories</li>
              <li className="px-4 font-medium text-[17px]">Why we made it</li>
              <li className="px-4 font-medium text-[17px]">App subscription</li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className="text-[17px] font-medium">Contact</h2>
          <BsCart size={28} className="ml-10" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
