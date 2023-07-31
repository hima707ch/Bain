import "./styles/details.css";
import "./styles/NavbarTop.css";
import "./styles/officeBlock.css";
import { dataSet1, dataSet2, dataSet3, dataSet4 } from "./data/InsightList";

export default function InsightsDetails() {
  return (
    <div className=" container">
      <h2>Insights</h2>

      <div class="data">
        <div className="data-list">
          {dataSet1.map((ele) => {
            return <li>{ele}</li>;
          })}
        </div>
        <div className="data-list">
          {dataSet2.map((ele) => {
            return <li>{ele}</li>;
          })}
        </div>
        <div className="data-list">
          {dataSet3.map((ele) => {
            return <li>{ele}</li>;
          })}
        </div>
        <div className="data-list">
          {dataSet4.map((ele) => {
            return <li>{ele}</li>;
          })}
        </div>
      </div>
    </div>
  );
}
