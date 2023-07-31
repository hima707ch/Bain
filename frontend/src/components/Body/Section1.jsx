import "./body.css";
import "../Header/styles/NavbarTop.css";
import { useEffect, useState } from "react";

export default function Section1(props) {
  const [url, setUrl] = useState(props.url1);

  function changeImage() {
    if (url == props.url1) setUrl(props.url2);
    else setUrl(props.url1);
  }

  useEffect(() => {
    setTimeout(changeImage, 5000);
  }, [url]);

  return (
    <div className="box-container">
      <div className="box1 mar-l-3 " style={{ float: "left" }}>
        <div className="head">
          <h3 className="font">
            We champion the bold to achieve the extraordinary.
          </h3>
          <p className="font">
            Answer two questions and put our thinking to work on your
            challenges.
          </p>
        </div>

        <div className="ques">
          <p className="font">1. What is your industry?</p>
          <div className="buttons">
            <button>Retails</button>
            <button>Private Equity</button>
            <button>Advanced Manufacturing & Services</button>
            <button>Technology</button>
            <button>Oil & Gas</button>
            <button>Healthcare & Life Sciences</button>
            <button>Chemicals</button>
            <button>Consumer Products</button>
            <button>Mining</button>
            <button>Financial Services</button>
          </div>
        </div>
      </div>

      <div className="box2 float-r">
        <img src={url} />
      </div>
    </div>
  );
}
