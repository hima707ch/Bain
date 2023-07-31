import OfficeBlock from "./OfficeBlock";
import { data1, data2, data3 } from "./data/OfficesLocation.js";
import "./styles/NavbarTop.css";
import "./styles/officeBlock.css";

export default function OfficeDetails() {
  return (
    <div className="NavDetailsContainer" id="office-dropdown">
      <h2 className="center heading">Offices</h2>

      <div className="center block-container">
        <div>
          <OfficeBlock title="North & South America" arr={data1} />
        </div>

        <div className="center-block">
          <OfficeBlock title="Europe & Africa" arr={data2} />
        </div>

        <div>
          <OfficeBlock title="Asia & Australia" arr={data3} />
        </div>
      </div>
    </div>
  );
}
