import Navbar from "./components/Navbar";
import Tags from "./components/Tags";
import GameCard from "./components/gameCard";
import SideNav from "./components/sideNav";

function App() {
  return (
    <div className="bg-myBlack min-w-screen min-h-screen text-white">
      <div className="">
        <Navbar />
        <SideNav />
        <Tags />
        <div>
          <div className="">
            <GameCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
