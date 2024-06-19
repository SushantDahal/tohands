import sync from "../assets/Sync.webp";
import { SiRocket } from "react-icons/si";
import India from "../assets/Made-in-India-1.webp";

const Sync = () => {
  return (
    <div className="w-full  sync-container">
      <div className="max-w-[1240px] mx-auto min-w-[540px] px-4">
        <div className="grid md:grid-cols-2 gap-10 max-w-[1050px] mx-auto bg-[#1e1f1e] p-2 rounded-[30px]">
          <div className=" pt-14 pl-12">
            <h1 className="text-5xl font-semibold text-white">Sync</h1>
            <div className="flex flex-col pt-8 gap-4 text-[#ffffff]">
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Sync sales, expenses, bills, and payments via SIM and Wi-Fi.
                </small>
              </div>
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Access dashboard, reports, and customer data in the app.
                </small>
              </div>
              <div className="flex items-center gap-3 ">
                <SiRocket size={20} />
                <small className="text-[20px] font-sans">
                  Send payment reminders conveniently.
                </small>
              </div>
            </div>
            <div className="text-[#535B62] pt-10 mt-10">
              <img src={India} alt="" className="max-w-[250px]" />
            </div>
          </div>
          <div className="">
            <img src={sync} alt="" className=" mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sync;
