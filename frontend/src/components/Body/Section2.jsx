import "./body.css";
import "../Header/styles/NavbarTop.css";
import { useState, useEffect } from "react";

export default function Section2(props) {
  const [data, setData] = useState({
    id: 0,
    url: "",
    box1: "",
    box2Head: "",
    box2Para: ""
  });

  const arr = props.data;

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const nextId = (prev.id + 1) % arr.length;
        return {
          id: nextId,
          url: arr[nextId].url,
          box1: arr[nextId].box1,
          box2Head: arr[nextId].box2Head,
          box2Para: arr[nextId].box2Para
        };
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [arr]);

  return (
    <div className="box-container ">
      <div className="box2 mar-l-3 img-2">
        <img src={data.url} />
      </div>

      <div className="box1" style={{ float: "right" }}>
        <div className="head">
          <h3 className="font">Bold steps forward.</h3>
          <p className="font">
            See how we’ve helped ambitious clients achieve extraordinary
            outcomes.
          </p>
        </div>

        <div>
          <div className="big-buttons">
            <button className="but">{data.box1}</button>
            <button className="but">
              {data.box2Head}
              <div className="but-cont">{data.box2Para}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
