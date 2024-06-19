import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Video from "./Components/Video.jsx";
import Calculate from "./Components/Calculate.jsx";
import Bill from "./Components/Bill.jsx";
import Record from "./Components/Record.jsx";
import Payment from "./Components/Payment.jsx";
import Sync from "./Components/Sync.jsx";
import Sound from "./Components/Sound.jsx";
import Feature from "./Components/Feature.jsx";
import Sync2 from "./Components/Sync2.jsx";
function App() {
  return (
    <div className="App bg-red-300">
      <Navbar />
      <Home />
      <Video />
      <h1 className="text-center py-20 md:text-[54px] text-[40px] font-bold">
        Why Smart Calculator
      </h1>
      <div className="bg-blue-400">
        <Calculate />
        <Bill />
        <Payment />
        <Record />
        <Sync />
        <Sound />
        <Sync2 />
      </div>
    </div>
  );
}

export default App;
