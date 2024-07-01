// import shark from "../assets/SharksImg.webp";
// import { FaArrowRight } from "react-icons/fa6";
// const Featured_on = () => {
//   return (
//     <div className="w-full bg-[#c5bfbf] mb-10">
//       <div className="max-w-[1240px] mx-auto">
//         <h1 className="text-center text-[50px] font-semibold">Featured On</h1>
//         <div className="grid md:grid-cols-2 bg-white p-10">
//           <div className="bg-red">
//             <img src={shark} alt="" className="rounded-3xl" />
//           </div>
//           <div className=" py-10 px-6">
//             <h1 className="text-[36px] font-semibold">
//               Revolutionising Retails:
//             </h1>
//             <h1 className="text-[36px] font-semibold ">ToHands Smart</h1>
//             <h1 className="text-[36px] font-semibold">calculator</h1>

//             <div className="flex items-center mt-10 ">
//               <a
//                 href="https://youtu.be/eD16g9RRKtw"
//                 className="mr-2 text-black text-[18px]"
//               >
//                 Check video
//               </a>
//               <FaArrowRight size={20} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Featured_on;
import shark from "../assets/SharksImg.webp";
import { FaArrowRight } from "react-icons/fa6";
const Featured_on = () => {
  return (
    <div className="w-full bg-[#c5bfbf] mb-10">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-center text-[50px] font-semibold">Featured On</h1>
        <div className="grid md:grid-cols-2 bg-white p-10">
          <div className="bg-red">
            <img src={shark} alt="" className="rounded-3xl" />
          </div>
          <div className=" py-10 px-6">
            <h1 className="text-[36px] font-semibold">
              Revolutionising Retails:
            </h1>
            <h1 className="text-[36px] font-semibold ">ToHands Smart</h1>
            <h1 className="text-[36px] font-semibold">calculator</h1>

            <div className="flex items-center mt-10 ">
              <a
                href="https://youtu.be/eD16g9RRKtw"
                className="mr-2 text-black text-[18px]"
              >
                Check video
              </a>
              <FaArrowRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured_on;
