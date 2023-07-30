import Navbar from "./Navbar";
import Home from "./Home";
import NewNavbar from "./NewNavbar";
import NewHome from "./NewHome/NewHome";

function App() {
  return (
    <div className="App">
      {/*<Navbar />*/}
      <NewNavbar></NewNavbar>
      <div className="content">
        {/*<Home></Home>*/}
        <NewHome></NewHome>
      </div>
    </div>
  );
}

export default App;
