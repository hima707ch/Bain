import "./styles/redfolder.css";
import "./styles/NavbarTop.css";

export default function RedFolder() {
  return (
    <div className="NavDetailsContainer" id="redfolder">
      <div className="red-container">
        <h4>You have no saved content in your Red Folder.</h4>
        <p className="para">
          Bookmark content that interests you and it will be saved here for you
          to read or share later.
        </p>
        <a href = "/redfolder"><button className="button">EXPLORE </button></a>
      </div>

      <div></div>
    </div>
  );
}
