import f1 from "../assets/display.webp";
import f2 from "../assets/Battery.svg";
import f3 from "../assets/wifi.svg";
import f4 from "../assets/USB2-small.webp";
import f5 from "../assets/wifi4g.svg";
import f6 from "../assets/Speaker-Green.webp";

const Feature = () => {
  return (
    <div className="w-full my-10 z-50 min-w-[540px]">
      <div className="max-w-[1240px] mx-auto  text-5xl">
        <h1 className="text-[70px] py-10 text-[#60a02b] text-center font-bold">
          Features
        </h1>
        <div className="grid md:grid-cols-9 gap-5  px-4">
          <div className="bg-[#252332] flex justify-center items-center flex-col px-10 pt-5 rounded-[30px] md:col-span-4 col-span-1">
            <h2 className=" font-bold text-xl text-white">4.5 inch</h2>
            <h3 className="text-[18px] text-[grey] pb-6 pt-4">Color display</h3>
            <img src={f1} alt="" className="col" />
          </div>
          <div className="bg-[#252332] flex justify-center items-center flex-col p-5 rounded-[30px] md:col-span-3 col-span-1">
            <img src={f2} alt="" className="col" />
            <h2 className="pt-6 font-bold text-2xl text-white">4000 mAh</h2>
            <h3 className="text-[18px] text-[grey] pb-10 ">Battery</h3>
          </div>
          <div className="bg-[#252332] flex justify-center items-center flex-col p-5 rounded-[30px] md:col-span-2 col-span-1">
            <img src={f3} alt="" className="col" />
            <h2 className="pt-6 font-bold text-2xl text-white">WI-FI</h2>
            <h3 className="text-[18px] text-[grey] pb-10 ">Connectivity</h3>
          </div>
        </div>
        <div className="grid md:grid-cols-12 gap-5 px-4 py-6">
          <div className="bg-[#252332] flex-col rounded-[30px] md:col-span-4 col-span-1">
            <img src={f4} alt="" className="col" />
            <h2 className=" font-bold text-xl text-white text-center pb-6">
              2 USB C Port
            </h2>
          </div>
          <div className="bg-[#252332] flex justify-center items-center flex-col rounded-[30px] md:col-span-3 col-span-1">
            <img src={f5} alt="" className="col" />
            <h2 className="pt-6 font-bold text-2xl text-white">4G</h2>
          </div>
          <div className="bg-[#252332] flex justify-center items-center flex-col  rounded-[30px] md:col-span-5 col-span-1 pt-8">
            <img src={f6} alt="" className="col w-[200px]" />
            <h2 className="pt-6 font-bold text-2xl text-white">2.5 Watt</h2>
            <h3 className="text-[18px] text-[grey] pb-10 ">Speaker</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
