import "./pageCard.css";
import Card from "./Card";
import { useState, useEffect } from "react";

export default function RedCard(props) {
  const data = props.data;

  const [redData, setRedData] = useState([]);
  const [loading, setLoading] = useState(false);

  function redInfo(){    
    var local = localStorage.getItem("redFolder");
    var arr = JSON.parse(local);

    setRedData(arr);
    setLoading(true);

  }

  function reset(){
    localStorage.setItem("redFolder","[]");
    setRedData([]);
  }

    useEffect(()=>{
        redInfo();
    },[])

  return (
    <div>
      <img className="banner" src={data.bannerUrl} />

      <div className="page-center">
        <div className="title">
          <h1>{data.title}</h1>
          <p>{data.titlePara}</p>
        </div>
      </div>

      <div className="center">
        <div className="page-data">
          <div className="title-cont"> 
            <h1>{data.title}</h1> 
            {/*<button className="save-but" onClick={save} >Save to Red Folder</button>*/}
          </div>
          Here are your Saved Articles
            
            {loading && redData.map( ele=>{
                return <div className="save-link-cont">
                <h1 className="save-title">{ele.title}</h1>
                <a href = {ele.link}>
                    <button className="save-but">Go to article</button>
                </a>
            </div>
            } )}

            

        <button className="save-but reset" onClick={reset}>Reset Red Folder</button>
        </div>
      </div>

      <div className="card-center-cont">
        <h2>Insights</h2>
        {data.cards.map((ele) => {
          return (
            <Card
              url={ele.url}
              para1={ele.para1}
              title={ele.title}
              para2={ele.para2}
            />
          );
        })}
      </div>
    </div>
  );
}
