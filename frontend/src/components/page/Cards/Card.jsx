import "./pageCard.css";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card-cont">
      <div className="card">
      <a href = "/digital">
        <img src={props.url} />
        <p className="p-red">{props.para1}</p>
        <h3 className="red">{props.title}</h3>
        <p>{props.para2}</p>
        </a>
      </div>
    </div>
  );
}
