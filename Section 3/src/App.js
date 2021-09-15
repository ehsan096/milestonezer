import "./App.css";
import LeftBar from "./component/leftBar/LeftBar";
import TopBar from "./component/top-bar/TopBar";
import LowerBar from "./component/lowerBar/LowerBar";
import PortFolio from "./component/portfolio/portfolio";
import Renewels from "./component/Renewels/Renewels";

function App() {
  return (
    <div className="App">
      <div>
        <LeftBar />
      </div>
      <div id="headers">
        <TopBar />
        <LowerBar />
        <div id="images">
          <Renewels />
        </div>
        <PortFolio />
      </div>
    </div>
  );
}

export default App;
