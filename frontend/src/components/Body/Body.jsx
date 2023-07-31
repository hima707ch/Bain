import Section1 from "./Section1";
import Section2 from "./Section2";
import Video from "./Video";
import Insights from "./Insights";
import RedBanner from "./RedBanner";
import ReadBanner from "./ReadBanner";

import "./body.css";
import "../Header/styles/NavbarTop.css";
import { useEffect, useState } from "react";

import axios from "axios";

export default function Body() {

  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/home');
        setHomeData(response.data);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    function local(){
      localStorage.setItem("ram","hanuman")
      if(localStorage.getItem("rm") === null ) console.log("hanuman ji")
    }

    local();

    fetchData();
  }, []);

  


{/*
  const sec1 = {
    url1:
      "https://www.bain.com/contentassets/faa9cdbf0bef4ca9b3d93084116649b6/madlib-02.jpg",
    url2:
      "https://www.bain.com/contentassets/faa9cdbf0bef4ca9b3d93084116649b6/madlib-03.jpg"
  };

  const data1 = [
    {
      url:
        "https://www.bain.com/contentassets/d920e8d5dace4806ac33af8999593eb3/1auto-co-1-1.jpg?width=768&height=768&mode=crop",
      box1: "Sales blueprint puts IT Services Co.'s growth back on track",
      box2Head: "Agile Enterprise",
      box2Para: "Become faster, more flexible, and intensely customer-focused"
    },
    {
      url:
        "https://www.bain.com/contentassets/89af8874c5cc4615af5519357549c260/salesforce-integration-success-1-1_v2.jpg?width=768&height=768&mode=crop",
      box1: "Salesforce integration generates M&A success in healthcare",
      box2Head: "B2B Go-to-Market",
      box2Para:
        "Enhance every element of your commercial functions to deliver top and bottom line growth"
    },
    {
      url:
        "https://www.bain.com/contentassets/f462cc6f414b43569f2b97208a338f28/food-co-jumps-growth-1-1_v2.jpg?width=768&height=768&mode=crop",
      box1: "Food Co. jump-starts growth with return to core brands",
      box2Head: "Elements of Value",
      box2Para:
        "Elements of Value® is a five-level, 40-element framework that delineates."
    },
    {
      url:
        "https://www.bain.com/contentassets/f529928832864594b2f9770a5f3be69c/1omnichannel-strategy-fashion-1-1.jpg?width=768&height=768&mode=crop",
      box1: "Omnichannel strategy boosts fashion company",
      box2Head: "Omnichannel Strategy",
      box2Para:
        "E-commerce is big, but the most valuable customers for brands and retailers typically browse."
    }
  ];

  const ReadBannerData = {
    head: "Engineering and R&D Report 2023",
    para:
      "Bain’s report looks at how companies see engineering and R&D as a strategic capability on the road to innovation, talent, and creating value.",
    url:
      "https://www.bain.com/contentassets/dcab8772faad487cb64307c7afeccbdb/erd_1440-x810.jpg"
  };
*/}

  return (
    <div className=" cont-1">
      <div className="center">
        
        { loading && <Section1 url1={homeData.sec1.url1} url2={homeData.sec1.url2} /> }

        {loading && <Section2 data={homeData.data1} />}
      </div>
  
      
      <Video />
      
      <Insights />
      
      <RedBanner />
      
      {loading && <ReadBanner data={homeData.ReadBannerData} />}
    </div>
  );
}
