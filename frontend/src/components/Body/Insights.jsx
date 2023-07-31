import InsightsCard from "./InsightsCard";

export default function Insights() {
  const data = [
    {
      link : "/factory",
      imgUrl:
        "https://www.bain.com/contentassets/76f4339c8cb44ce8a3d27658cd2ec0f2/v1-fof-ai_16-9.png?width=1440&height=810&mode=crop",
      head:
        "Factory of the Future: How Industry 4.0 and AI Can Transform Manufacturing",
      para:
        "New digital technologies can upgrade lean manufacturing, boosting performance and accelerating sustainability."
    },
    {
      link : "tourism",
      imgUrl:
        "https://www.bain.com/contentassets/d3ed5d7bbe794faaaaa2e59cd11c19d7/16755-gettyimages-533767291-16-9.jpg?width=1440&height=810&mode=crop",
      head: "Sustainable Tourism: An Untapped Opportunity for Green Growth",
      para: "Sustainable tourism is on the rise."
    }
  ];

  return (
    <div className="center insights-cont">
      <h3 className="font">
        {" "}
        <span> Our Latest Insights </span>{" "}
      </h3>

      <div className="img-cont">
        {data.map((ele) => {
          return <InsightsCard link ={ele.link} imgUrl={ele.imgUrl} head={ele.head} para={ele.para} />;
        })}
      </div>
    </div>
  );
}
