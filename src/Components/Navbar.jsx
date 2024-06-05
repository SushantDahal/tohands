import Logo from "../assets/logo.svg";
import { BsCart } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  function handleCart() {
    setCart(!cart);
  }

  return (
    <div className="w-full bg-[#0F0E0E] h-24 relative">
      <div className="max-w-[1540px] mx-auto flex justify-between items-center h-full px-10 text-[#FFFFFF] sticky top-0 ">
        <div>
          <img src={Logo} alt="" className="min-w-[80px]" />
        </div>
        <div>
          <nav>
            <ul className="lg:flex hidden">
              <li className="px-4 font-semibold text-[16px]">Home</li>
              <li className="px-4 font-semibold text-[16px]">Products</li>
              <li className="px-4 font-semibold text-[16px]">Accessories</li>
              <li className="px-4 font-semibold text-[16px]">Why we made it</li>
              <li className="px-4 font-semibold text-[16px]">
                App subscription
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-[17px] font-medium lg:flex hidden">Contact</h2>
          <BsCart
            size={24}
            className="ml-8 cursor-pointer"
            onClick={handleCart}
          />
          {nav ? (
            <IoClose
              size={35}
              onClick={handleNav}
              className="ml-8 lg:hidden flex text-[#B5FF7B] font-bold cursor-pointer"
            />
          ) : (
            <IoMenu
              size={35}
              onClick={handleNav}
              className="ml-8 lg:hidden flex text-[#B5FF7B] font-bold cursor-pointer"
            />
          )}
        </div>
        <div
          className={
            nav
              ? " absolute left-0 top-14 text-black mt-12 w-full  duration-700  items-center h-[250px] overflow-hidden bg-[#fffefe] lg:hidden "
              : "fixed top-[-50%]  mt-[140px] duration-700  w-full left-0 h-0 overflow-hidden  "
          }
        >
          <nav>
            <ul className="flex flex-col items-center">
              <li className="py-3 w-full px-6 font-semibold hover:bg-black text-[#181717] text-[16px] bg-gray-400">
                Home
              </li>
              <li className="py-3 w-full px-6 font-semibold hover:bg-black text-[#181717] text-[16px]">
                Products
              </li>
              <li className="py-3 w-full px-6 font-semibold hover:bg-black text-[#181717] text-[16px]">
                Accessories
              </li>
              <li className="py-3 w-full px-6 font-semibold hover:bg-black text-[#181717] text-[16px]">
                Why we made it
              </li>
              <li className="py-3 w-full px-6 font-semibold hover:bg-black text-[#181717] text-[16px]">
                App subscription
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-[40%] h-full bg-[#faf9f9] transition-all duration-700 ${
          cart ? "translate-y-0" : "translate-x-full"
        }`}
      >
        <RxCross2
          className="absolute right-4 mt-4"
          size={33}
          onClick={handleCart}
        />
        <h1 className="px-6 pt-12 text-grey text-[16px] font-semibold">
          No products in the cart
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
