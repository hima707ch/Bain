import { useState } from "react";
import axios from 'axios';

import IndDetails from "./IndDetails";
import ConsultingDetail from "./ConsultingDetail";
import InsightsDetails from "./InsightsDetails";
import AboutDetails from "./AboutDetails";

import "./styles/NavbarTop.css";
export default function Navbar2() {

  const [search, setSearch] =useState("");
  const [suggestion, setSuggestion] = useState([]);

  const [showInd, setShowInd] = useState(false);
  const [showConsult, setShowConsult] = useState(false);
  const [showInsights, setShowInsights] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  async function change(e){
    const {value} = e.target;
    setSearch(value);

    if(value === "") {
      setSuggestion([]);
      return;
    }

    const res = await axios.post("/search",{value});
    console.log(res.data)
    setSuggestion(res.data);

  }

  return (
    <div className="completeBar nav2-container" id="navbar-2">
      <div className="center">
        <div className="bar">
          <ul className="list-bar">
          <a href = "/home">
            <img src="https://www.bain.com/contentassets/0b88e3e10a7b4592809517c28b75847e/logo_red_bain.svg" />
          </a>
            <li
              onMouseOver={() => {
                setShowInd(true);
              }}
              onMouseOut={() => {
                setShowInd(false);
              }}
            ><a href = "/factory">
              Industries </a>
              {showInd && (
                <div
                  onMouseOver={() => {
                    setShowInd(true);
                  }}
                  onMouseOut={() => {
                    setShowInd(false);
                  }}
                >
                  <IndDetails />
                </div>
              )}
            </li>

            <li
              onMouseOver={() => {
                setShowConsult(true);
              }}
              onMouseOut={() => {
                setShowConsult(false);
              }}
            >
              {" "}
              <a href = "/contact">Counsulting Services</a>
              {
                <div
                  onMouseOver={() => {
                    setShowConsult(true);
                  }}
                  onMouseOut={() => {
                    setShowConsult(false);
                  }}
                >
                  {" "}
                  {showConsult && <ConsultingDetail />}
                </div>
              }{" "}
            </li>

            <li><a href = "/digital"> Digital </a> </li>

            <li
              onMouseOver={() => {
                setShowInsights(true);
              }}
              onMouseOut={() => {
                setShowInsights(false);
              }}
            >
              {" "}
              <a href = "/tourism">Insights</a>
              {
                <div
                  onMouseOver={() => {
                    setShowInsights(true);
                  }}
                  onMouseOut={() => {
                    setShowInsights(false);
                  }}
                >
                  {" "}
                  {showInsights && <InsightsDetails />}{" "}
                </div>
              }{" "}
            </li>

            <li
              onMouseOver={() => {
                setShowAbout(true);
              }}
              onMouseOut={() => {
                setShowAbout(false);
              }}
            >
              {" "}
              <a href = "/about">About</a>
              {
                <div
                  onMouseOver={() => {
                    setShowAbout(true);
                  }}
                  onMouseOut={() => {
                    setShowAbout(false);
                  }}
                >
                  {" "}
                  {showAbout && <AboutDetails />}{" "}
                </div>
              }
            </li>

            <li> <a href = "/careers"> Careers </a> </li>
          </ul>
          

          <div className="nav2-inp-cont">
                <input className="nav-search-inp" placeholder = "Search" onChange={change} />
          
                {
                  suggestion.map( ele => {
                    return <a className="sug-link" href = {ele.link} ><div className="inp-sug">
                    {ele.name}
                  </div></a>
                  } )
                }

              </div>


        </div>
      </div>
    </div>
  );
}
