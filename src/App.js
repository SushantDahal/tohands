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
import Track from "./Components/Track.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Video />
      <div>
        <Calculate />
        <Bill />
        <Payment />
        <Record />
        <Sync />
        <Sound />
      </div>
      <Feature />
      <Track />
    </div>
  );
}

export default App;
