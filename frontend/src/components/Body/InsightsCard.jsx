export default function InsightsCard(props) {
  return (
    
    <div className="img-card">
      <a className="img-link" href ={props.link}>
      <img src={props.imgUrl} width="100%" />
      <h2 className="red">{props.head}</h2>
      <p className="font">{props.para}</p>
      </a>
    </div>
    
  );
}
