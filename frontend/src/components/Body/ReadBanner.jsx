import { useNavigate } from "react-router-dom";

export default function ReadBanner(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/factory");
  }

  const data = props.data;

  return (
    <div className="read-cont">
      <div className="read">
        <div className="r-l r-b">
          <div className="r-data">
            <h2>{data.head}</h2>
            <p>{data.para}</p>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Read Report
            </button>{" "}
          </div>
        </div>

        <div className="r-r r-b">
          <img src={data.url} />
        </div>
      </div>
    </div>
  );
}
