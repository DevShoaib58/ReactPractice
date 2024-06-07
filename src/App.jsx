import { Route, Routes } from "react-router";
import BgChanger from "./Components/BgChanger";
import BgForBox from "./Components/BgForBox";
import Counter from "./Components/Counter";
import DigiClock from "./Components/DigiClock";
import Gallery from "./Components/Gallery";
import Listofprofile from "./Components/Listofprofile";
import Navbar from "./Components/Navbar";
import PasswordGenerator from "./Components/PasswordGenerator";
import UserProfile from "./Components/UserProfile";
import Home from "./Page/Home";
import { BrowserRouter } from "react-router-dom";
import Cryptocurrency from "./Components/Cryptocurrency";
import SpaceLaunch from "./Components/SpaceLaunch";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bgchanger" element={<BgChanger />}></Route>
          <Route path="/bgforbox" element={<BgForBox />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/passwordgenerator" element={<PasswordGenerator />}></Route>
          <Route path="/userprofile" element={<UserProfile />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/digiclock" element={<DigiClock />}></Route>
          <Route path="/listofprofile" element={<Listofprofile />}></Route>
          <Route path="/cryptocurrency" element={<Cryptocurrency />}></Route>
          <Route path="/spacelaunch" element={<SpaceLaunch />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
