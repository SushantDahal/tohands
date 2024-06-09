import Shark from "../assets/shark.svg";
import HomeImg from "../assets/Home.webp";
import { FaArrowRight } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
const Home = () => {
  return (
    <div className="w-full my-10 ">
      <div className="grid md:grid-cols-12 mx-auto md:mx-0">
        <div className=" md:col-span-2 col-span-9 flex justify-center md:justify-start md:items-start items-center md:flex-row my-4 p-2 md:p-0 md:m-0">
          <img src={Shark} alt="" className=" min-w-[130px]" />
        </div>
        <div className=" md:text-start text-center  md:col-span-4 col-span-9 pt-3">
          <button className="w-[220px] text-[14px]  bg-[#FFFFFF00] rounded-md border-[2px] border-[#B5FF7B] py-2 ">
            World's first smart calculator
          </button>
          <h1 className="md:text-[74px] text-[42px] font-extrabold md:leading-[77px] leading-[65px] mt-4">
            All-in-One Device
            <br /> for Your Shop
          </h1>
          <div className="md:flex md:grid-cols-2 my-6 gap-6 justify-center md:justify-start md:p-1 px-10">
            <button className="flex items-center justify-center md:w-[230px] w-full text-[18px] font-medium py-[10px] rounded-md border-black border-[1px] my-5">
              Join v4 waitlist <FaArrowRight className="mx-6 " />
            </button>
            <button className="flex items-center justify-center  text-[18px] font-medium  md:w-[230px] py-[10px] w-full rounded-md border-black border-[1px] md:border-none ">
              <IoCallSharp className="ml-6 mr-3  " size={25} /> Contact us
            </button>
          </div>
        </div>
        <div className="  md:col-span-5 p-5 col-span-9 ml-10">
          <img src={HomeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
