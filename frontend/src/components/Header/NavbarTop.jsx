import React, { useEffect, useState } from "react";
import "./styles/NavbarTop.css";
import OfficeDetails from "./OfficeDetails";
import "./styles/officeBlock.css";
import RedFolder from "./RedFolder";

export default function NavbarTop() {
  const [redCount, setRedCount] = useState(0);

  useEffect(()=>{
    var local = localStorage.getItem("redFolder");
    var arr = JSON.parse(local);
    setRedCount(arr.length)
  },[])

  const showOffice = () => {
    document.getElementById("office-dropdown").classList.toggle("show");
    document.getElementById("navbar-2").classList.toggle("hide");
  };

  const showRedFolder = () => {
    document.getElementById("redfolder").classList.toggle("show");
    document.getElementById("navbar-2").classList.toggle("hide");
  };

  return (
    <div className="completeBar">
      <div className="center">
        <div className="bar">
          <ul className="left">
            <li
              className="btn"
              onClick={() => {
                showOffice();
              }}
            >
              Offices
              <OfficeDetails />
            </li>
            <li>
              {" "}
              <a href="/about"> Alumni </a>{" "}
            </li>
            <li>
              {" "}
              <a href="/media"> Media center </a>{" "}
            </li>
            <li>
              {" "}
              <a href="digital"> Subscribe </a>{" "}
            </li>
            <li>
              {" "}
              <a href="contact"> Contact </a>{" "}
            </li>
          </ul>

          <ul className="right">
            <li> Global | English </li>
            <li className="btn" onClick={() => showRedFolder()}>
              <a className="red-fol-but" href ="/redfolder"> Red Folder ({redCount}) </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
