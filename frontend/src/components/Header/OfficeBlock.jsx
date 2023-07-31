import "./styles/NavbarTop.css";
import "./styles/officeBlock.css";

export default function OfficeBlock(props) {
  const arr = props.arr;
  return (
    <div className="OfficeBlock ">
      <h3> {props.title} </h3>
      <ul className="city-list">
        {arr.map((ele) => {
          return <li className="list"> {ele} </li>;
        })}
      </ul>
    </div>
  );
}
