import Shark from "../assets/shark.svg";
import HomeImg from "../assets/Home.webp";
import { FaArrowRight } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
const Home = () => {
  return (
    <div className="w-full my-10 px-4">
      <img src={Shark} alt="" className=" w-[120px]  " />

      <div className="max-w-[1440px]  mx-auto ">
        <div className="grid md:grid-cols-2 px-10">
          <div className="ml-10 md:text-start text-center">
            <button className="w-[220px] text-[14px] bg-[#FFFFFF00] rounded-md border-[2px] border-[#B5FF7B] py-2 ">
              World's first smart calculator
            </button>
            <h1 className="md:text-[70px] text-5xl font-bold md:leading-[75px] leading-[65px] mt-4">
              All-in-One Device
              <br /> for Your Shop
            </h1>
            <div className="flex my-6 gap-6">
              <button className="flex items-center justify-center w-[230px] text-[18px] font-medium py-[10px] rounded-md border-black border-[2px]">
                Join v4 waitlist <FaArrowRight className="mx-6 " />
              </button>
              <button className="flex items-center justify-center  text-[18px] font-medium ">
                <IoCallSharp className="ml-6 mr-3  " size={25} /> Contact us
              </button>
            </div>
          </div>
          <div className="bg-blue-300 p-6">
            <img src={HomeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
