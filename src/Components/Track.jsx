import TrackImg from "../assets/Track-Transaction.webp";
import Google from "../assets/google.svg";
import Appstore from "../assets/AppStore.svg";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { TbReceiptRupee } from "react-icons/tb";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";

const Track = () => {
  return (
    <div className=" w-full min-w-[540px] py-10">
      <div className="max-w-[1240px]  mx-auto p-4">
        <h1 className="md:text-[60px] text-[45px] md:leading-[70px]  font-bold md:hidden flex justify-center text-center ">
          Track transactions <br />
          with Tohands App
        </h1>
        <div className="grid md:grid-cols-5 gap-6  ">
          <div className="col-span-3 order-2 md:order-1">
            <h1 className="md:text-[60px] text-[45px] md:leading-[70px]  font-bold md:flex hidden">
              Track transactions <br />
              with Tohands App
            </h1>
            {/* Dashboard */}
            <div className="mt-6">
              <div className="flex items-center py-3">
                <MdSpaceDashboard className=" mr-4 text-[#535B62]" size={40} />
                <div>
                  <h2 className="text-[27px] font-medium text-[#0f0E0E]">
                    Dashboard
                  </h2>
                  <h3 className="text-[#535B62] text-[18px]">
                    Get insights about your sales and expenses
                  </h3>
                </div>
              </div>
              <div className="flex items-center py-3">
                <HiOutlineDocumentDuplicate
                  className=" mr-4 text-[#535B62]"
                  size={40}
                />
                <div>
                  <h2 className="text-[27px] font-medium text-[#0f0E0E]">
                    Report
                  </h2>
                  <h3 className="text-[#535B62] text-[18px]">
                    Download detailed reports in PDF & Excel
                  </h3>
                </div>
              </div>

              <div className="flex items-center py-3">
                <TbReceiptRupee className=" mr-4 text-[#535B62]" size={40} />
                <div>
                  <h2 className="text-[27px] font-medium text-[#0f0E0E]">
                    Bills
                  </h2>
                  <h3 className="text-[#535B62] text-[18px]">
                    Generate and print bills via app
                  </h3>
                </div>
              </div>
              <div className="flex items-center py-3">
                <BsFileEarmarkSpreadsheet
                  className=" mr-4 text-[#535B62]"
                  size={40}
                />
                <div>
                  <h2 className="text-[27px] font-medium text-[#0f0E0E]">
                    Income Sheet
                  </h2>
                  <h3 className="text-[#535B62] text-[18px]">
                    Maintain all the customer / vendor wise ledger
                  </h3>
                </div>
              </div>
              <div className="flex  py-4 gap-6 ">
                <img src={Google} alt="" className="w-[200px]" />
                <img src={Appstore} alt="" className="w-[200px]" />
              </div>
            </div>
            {/* End */}
          </div>
          <div className=" md:col-span-2 col-span-5 bg-[#edf3e8] md:p-10 p-20 rounded-3xl order-1 md:order-2">
            <img src={TrackImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
