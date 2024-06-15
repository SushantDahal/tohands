import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Video from "./Components/Video.jsx";
import Calculate from "./Components/Calculate.jsx";
import Bill from "./Components/Bill.jsx";
// import Record from "./Components/Record.jsx";
// import Payment from "./Components/Payment.jsx";
// import Sync from "./Components/Sync.jsx";
// import Sound from "./Components/Sound.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Video />
      <Calculate />
      <Bill />
      {/* <Record />
      <Payment />
      <Sync />
      <Sound /> */}
    </div>
  );
}

export default App;
