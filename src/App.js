import Navbar from "./Navbar";
import Entry from "./Entry";
import Footer from "./Footer";
import Bao from "./Bao";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar></Sidebar>
      <Home></Home> */}
      <header className="App-header">
        <Entry></Entry>
        {/* <Footer></Footer> */}
        {/* <Bao></Bao> */}
      </header>
    </div>
  );
}

export default App;
