import "./pageCard.css";
import Card from "./Card";

export default function Page(props) {
  const data = props.data;

  function save(){

    const path = typeof window !== 'undefined' ? window.location.pathname : '';

    
    var arr = [];

    var local = localStorage.getItem("redFolder");
    var arr = JSON.parse(local);

    console.log(path);

    var info ={
      title : data.title,
      link : path
    }
    
    arr.push(info);

    localStorage.setItem("redFolder", JSON.stringify(arr));

    

  }

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
            <button className="save-but" onClick={save} >Save to Red Folder</button>
          </div>
          {data.mainPara}
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
