import sound from "../assets/Speaker.webp";
import { SiRocket } from "react-icons/si";

const Sound = () => {
  return (
    <div className="w-full mt-10 sound-container p-[100px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 max-w-[1050px] mx-auto bg-[#edf3e8] p-2 rounded-[30px] ">
          <div className=" pt-14 pl-12">
            <h1 className="text-5xl font-semibold">Sound</h1>
            <div className="flex flex-col pt-8 gap-4">
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[24px] font-sans">
                  Powerful speaker for transaction confirmations
                </small>
              </div>
              <div className="flex items-center gap-3 text-[#535B62]">
                <SiRocket size={20} />
                <small className="text-[24px] font-sans">
                  Use it as a music player!{" "}
                  <span className="text-[blue]">🎶</span>🔊
                </small>
              </div>
            </div>
          </div>
          <div className=" m-2">
            <img src={sound} alt="" className="  mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sound;
