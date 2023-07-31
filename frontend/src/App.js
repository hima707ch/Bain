import { useMediaQuery } from "react-responsive";
import { Route, Routes, NavLink } from "react-router-dom";

import Navbar from "./components/Header/Navbar";
import NavbarShort from "./components/Header/NavbarShort";
import Slideshow from "./components/Header/Slideshow";

import Body from "./components/Body/Body";
import AboutPage from "./components/page/AboutPage";
import Careers from "./components/page/Careers";
import ContactPage from "./components/page/ContactPage";
import DigitalPage from "./components/page/DigitalPage";
import Factory from "./components/page/Factory";
import MediaCenter from "./components/page/MediaCenter";
import Tourism from "./components/page/Tourism";
import RedFolderPage from "./components/page/RedFolderPage";

import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const minWidth = useMediaQuery({ query: "(min-width: 1150px)" });
  
  const [redFolder, setRedFolder] = useState([]);

  useEffect( ()=>{

    if(localStorage.getItem("redFolder")  ===  null){
      localStorage.setItem("redFolder","[]");
    }
    else{
      setRedFolder(localStorage.getItem("redFolder"));
    }

    console.log(redFolder)

  } , [] )
  
  return (


    <div className="App">
      {minWidth ? <Navbar /> : <NavbarShort />}

      <Routes>
        <Route
          exact
          path=""
          element={
            <div>
              <Slideshow /> <Body />{" "}
            </div>
          }
        />
        <Route
          path="/home"
          element={
            <div>
              <Slideshow /> <Body />
            </div>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/digital" element={<DigitalPage />} />
        <Route path="/factory" element={<Factory />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/media" element={<MediaCenter />} />
        <Route path="/redfolder" element={<RedFolderPage />} />
      </Routes>

      <Footer />
    </div>
  );
}
