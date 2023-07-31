import "./styles/NavbarTop.css";
import NavbarTop from "./NavbarTop";
import Navbar2 from "./Navbar2";

import {useState, useEffect} from "react";

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isScrolled ? 'whole-container w-fixed white-bg' : 'whole-container'}>
      <NavbarTop />
      <Navbar2 />
    </div>
  );
}
