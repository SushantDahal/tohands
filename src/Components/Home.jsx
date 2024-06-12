import Shark from "../assets/shark.svg";
import HomeImg from "../assets/Home.webp";
import { FaArrowRight } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { GoShieldCheck } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
const Home = () => {
  return (
    <div className="w-full pt-[100px] ">
      <div className="grid md:grid-cols-12 mx-auto md:mx-0">
        <div className=" md:col-span-2 col-span-9 flex justify-center md:justify-start  md:items-start items-center md:flex-row my-4 p-2 md:p-0 md:m-0">
          <img src={Shark} alt="" className=" min-w-[130px]" />
        </div>
        <div className=" md:text-start text-center  md:col-span-5 col-span-9 pt-3 ">
          <button className="w-[220px] text-[14px]  bg-[#FFFFFF00] rounded-md border-[2px] border-[#B5FF7B] py-2 ">
            World's first smart calculator
          </button>
          <h1 className="md:text-[64px] text-[42px ] font-sans font-extrabold  md:leading-[77px]  mt-4 tracking-tight">
            All-in-One Device
            <br /> for Your Shop
          </h1>
          <div className="md:flex md:grid-cols-2 my-6 justify-center md:justify-start md:p-1 px-10">
            <button className="flex items-center justify-center md:w-[230px] w-full text-[18px] font-medium py-[10px] rounded-md border-black border-[1px] my-5">
              Join v4 waitlist <FaArrowRight className="mx-6 " />
            </button>
            <button className="flex items-center justify-center  text-[18px] font-medium  md:w-[230px] py-[10px] w-full rounded-md border-black border-[1px] md:border-none ">
              <IoCallSharp className="ml-6 mr-3  " size={25} /> Contact us
            </button>
          </div>
          <div className="flex md:gap-4 gap-32 py-4  border-b-2 justify-center md:justify-normal">
            <div className=" md:flex items-center justify-center md:border-l-[10px]  md:border-[#B5FF7B] px-2 w-[200px]">
              <h1 className="text-[48px] font-extrabold">3L</h1>
              <h2 className="px-2 text-[#535B62]">
                Transactions recorded till now
              </h2>
            </div>
            <div className=" md:flex items-center justify-center md:border-l-[10px]  md:border-[#B5FF7B] px-2 w-[220px] ">
              <h1 className="text-[48px] font-extrabold">150+</h1>
              <h2 className="px-2 text-[#535B62]">Trusted reviews</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-3 md:grid-cols-2  mt-4 text-[#535B62] py-6 md:py-1">
            <div className="flex items-center md:flex-row flex-col py-3">
              <HiOutlineCurrencyRupee size={30} />
              <h3 className="text-[16px] md:text-[14px]  font-bold px-2">
                30 days refund
              </h3>
            </div>
            <div className="flex items-center md:flex-row flex-col py-3 border-l-2 border-[#b5bcc2] md:border-none ">
              <GoShieldCheck size={30} />
              <h3 className="text-[16px] md:text-[14px]  font-bold px-2 ">
                1 year warrenty
              </h3>
            </div>
            <div className="flex items-center md:flex-row flex-col py-3 border-l-2 border-[#b5bcc2] md:border-none">
              <TbTruckDelivery size={30} />
              <h3 className="text-[16px] md:text-[14px] font-bold px-2">
                Free delivery
              </h3>
            </div>
          </div>
        </div>
        {/* md:block hidden  */}
        <div className="  md:col-span-4 p-5 col-span-9 ">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
