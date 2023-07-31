var express = require('express');
const bodyParse = require("body-parser");
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json())

var pages = [
  { "link" : "about", "name" : "about us",},
  { "link" : "media", "name" : "media center",},
  { "link" : "tourism", "name" : "tourism",},
  { "link" : "contact", "name" : "contact",},
  { "link" : "careers", "name" : "careers",},
  { "link" : "digital", "name" : "digital",},
  { "link" : "factory", "name" : "factory",},
  { "link" : "redfolder", "name" : "red folder",},
  { "link" : "home", "name" : "home"},
]

app.post("/search", (req,res)=>{
  const inp = req.body.value;
  var arr = [];

  arr = pages.filter( (ele)=>{
    if(ele.name.includes(inp)){
      return true;
    }
    return false;
  } )

  res.send(arr);

})

app.get("/home",(req,res)=>{
  var data = {
  sec1 : {
    url1:
      "https://www.bain.com/contentassets/faa9cdbf0bef4ca9b3d93084116649b6/madlib-02.jpg",
    url2:
      "https://www.bain.com/contentassets/faa9cdbf0bef4ca9b3d93084116649b6/madlib-03.jpg"
  },
  data1 : [
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
  ],

  ReadBannerData : {
    head: "Engineering and R&D Report 2023",
    para:
      "Bain’s report looks at how companies see engineering and R&D as a strategic capability on the road to innovation, talent, and creating value.",
    url:
      "https://www.bain.com/contentassets/dcab8772faad487cb64307c7afeccbdb/erd_1440-x810.jpg"
  }
}
  res.send(data);
});

app.get("/about",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/globalassets/about/about_us_black_choreograph_3_1.png?width=1950&height=650&mode=crop",
    title: "About us",
    titlePara:
      "This is where aspiration meets innovation, candor fuels collaboration and impossible surrenders to teamwork. We champion the bold to achieve the extraordinary.",
    mainPara:
      "We're a global consultancy that helps the world’s most ambitious change makers define the future. Across 65 cities in 40 countries, we work alongside our clients as one team with a shared ambition to achieve extraordinary results, outperform the competition, and redefine industries. We complement our tailored, integrated expertise with a vibrant ecosystem of digital innovators to deliver better, faster, and more enduring outcomes. Our 10-year commitment to invest more than $1 billion in pro bono services brings our talent, expertise, and insight to organizations tackling today’s urgent challenges in education, racial equity, social justice, economic development, and the environment. We earned a platinum rating from EcoVadis, the leading platform for environmental, social, and ethical performance ratings for global supply chains, putting us in the top 1% of all companies. Since our founding in 1973, we have measured our success by the success of our clients, and we proudly maintain the highest level of client advocacy in the industry.",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

app.get("/careers",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/globalassets/careers/images/homepage/0.0-careers-homepage-1-3-1_rings.jpg?width=1920&height=610&mode=crop",
    title: "Careers",
    titlePara:
      "This is where aspiration meets innovation, candor fuels collaboration and impossible surrenders to teamwork. We champion the bold to achieve the extraordinary.",
    mainPara:
      "We're a global consultancy that helps the world’s most ambitious change makers define the future. Across 65 cities in 40 countries, we work alongside our clients as one team with a shared ambition to achieve extraordinary results, outperform the competition, and redefine industries. We complement our tailored, integrated expertise with a vibrant ecosystem of digital innovators to deliver better, faster, and more enduring outcomes. Our 10-year commitment to invest more than $1 billion in pro bono services brings our talent, expertise, and insight to organizations tackling today’s urgent challenges in education, racial equity, social justice, economic development, and the environment. We earned a platinum rating from EcoVadis, the leading platform for environmental, social, and ethical performance ratings for global supply chains, putting us in the top 1% of all companies. Since our founding in 1973, we have measured our success by the success of our clients, and we proudly maintain the highest level of client advocacy in the industry.",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

app.get("/contact",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/globalassets/about/about_us_black_choreograph_3_1.png?width=1950&height=650&mode=crop",
    title: "Contact Us",
    titlePara: "Thanks for your interest. How can we help?",
    mainPara:
      "Need to find a local office? We have 63 worldwide. Interested in working here? See what a career at Bain looks like or follow us on social media. Interested in working with us? Explore our consulting services and industry expertise. Need something else? See below for more ways to get in touch.",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

app.get("/digitalb",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/globalassets/capabilities/hero-images---new/digital-transformation-1950x650.jpg?width=1950&height=650&mode=crop",
    title: "Digital Transformation",
    titlePara: "Strategy. Technical Expertise. Breakthrough results.",
    mainPara:
      "To win in the digital era you need a bold ambition and flawless execution. We can help with both. Our multidisciplinary teams of technical experts work side-by-side with you to design, build, and scale truly transformative digital businesses. Our approach combines a proven end-to-end transformation framework with Vector℠, an integrated platform of digital capabilities supported by an expansive ecosystem of best-of-breed partners specializing in digital transformation. No wonder we’ve been recognized as a digital pacesetter in ALM Intelligence's 2022-2023 report, not to mention a leader in the IDC MarketScape: Worldwide Digital Strategy Consulting Services 2021 Vendor Assessment. Whatever your ambition may be—from embracing new digital capabilities to reimagining how your business operates to launching entirely new digital ventures—we can help you set a new standard of excellence and achieve unprecedented levels of value.",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

app.get("/factoryb",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/contentassets/76f4339c8cb44ce8a3d27658cd2ec0f2/v1-fof-ai_3-1.png?width=1950&height=650&mode=crop",
    title: "Factory of the Future",
    titlePara:
      "New digital technologies can upgrade lean manufacturing, boosting performance and accelerating sustainability.",
    mainPara:
      "Around the world, manufacturers have spent the past 50 years implementing a range of programs and techniques to reduce costs and improve product quality and customer service. Lean, total productive maintenance (TPM), total quality management (TQM), Six Sigma and, in some cases, full production systems have yielded solid results. We’ve seen companies that leverage these approaches well—such as Toyota, Procter & Gamble, and Danaher—boost productivity by 6% or more a year. Those investments aren’t obsolete, but they also aren’t enough. To compete effectively in the future, you need to rethink what’s possible today. Two critical developments have raised the bar for manufacturers as they pursue a factory of the future strategy. On the opportunity side, game-changing digital and Industry 4.0 technologies have redefined what’s possible for next-generation production systems. When properly deployed, these new capabilities can raise productivity by more than 10% and create a host of additional advantages regarding flexibility, quality, consumption of natural resources, capex allocation, labor savings, and more. To cite just a few digital possibilities, artificial intelligence (AI) could, in essence, read a customer’s mind, predict demand, and steer products along individual paths through the supply chain, while production units become self-healing and self-learning, freeing humans to focus on creative tasks and supervision. The many benefits of digital aren’t lost on leading companies. In a recent survey of 270 manufacturing executives around the world, respondents who say digital is well-integrated into their production systems are three times as likely to say they’re close to achieving their production system goals, compared with those who lack high levels of integration.",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

app.get("/mediab",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/contentassets/295c0ec8d3a44800a37b41f96f1786d6/media-center-2021-3_1.jpg?width=1950&height=650&mode=crop",
    title: "Media Center",
    titlePara:
      "Our industry experts, world-class research and business perspectives are featured in top-tier news publications across the globe.",
    mainPara:
      "We're a global consultancy that helps the world’s most ambitious change makers define the future. Across 65 cities in 40 countries, we work alongside our clients as one team with a shared ambition to achieve extraordinary results, outperform the competition, and redefine industries. We complement our tailored, integrated expertise with a vibrant ecosystem of digital innovators to deliver better, faster, and more enduring outcomes. Our 10-year commitment to invest more than $1 billion in pro bono services brings our talent, expertise, and insight to organizations tackling today’s urgent challenges in education, racial equity, social justice, economic development, and the environment. We earned a platinum rating from EcoVadis, the leading platform for environmental, social, and ethical performance ratings for global supply chains, putting us in the top 1% of all companies. Since our founding in 1973, we have measured our success by the success of our clients, and we proudly maintain the highest level of client advocacy in the industry.",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

app.get("/tourismb",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/contentassets/d3ed5d7bbe794faaaaa2e59cd11c19d7/16755-gettyimages-533767291-3-1.jpg?width=1950&height=650&mode=crop",
    title: "Sustainable Tourism",
    titlePara: "An Untapped Opportunity for Green Growth",
    mainPara:
      "Following a dip in 2020, tourism is again on the rise, expected to reach $17 trillion in size by 2027, compared to $11 trillion prior to Covid-19 (see Figure 1). We also see an increasing appetite for more sustainable tourism among leisure travelers across the globe, driving the market for sustainable tourism to develop strongly in the coming years. Leisure travelers worldwide will choose destinations and providers (airlines, hotels, restaurants, and tour companies) based on their sustainability records and are starting to pay a premium for it. On the other hand, research shows that travelers feel that the travel and tourism sector is making little or no effort to be more sustainable, indicating that there is still much room for the sector to respond and make a difference.",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

app.get("/redfolder",(req,res)=>{
  var data = {
    bannerUrl:
      "https://www.bain.com/contentassets/d3ed5d7bbe794faaaaa2e59cd11c19d7/16755-gettyimages-533767291-3-1.jpg?width=1950&height=650&mode=crop",
    title: "Red Folder",
    titlePara: "Find your Save Articles",
    mainPara : "",
    cards: [
      {
        url:
          "https://www.bain.com/contentassets/7b5cd96ac1b945e794194738da0f2299/wef-2018-step-by-step-digital-530x242.jpg?width=1440&height=810&mode=crop",
        para1: "Transformation",
        title: "A Step-by-Step Guide to Digital Transformation",
        para2:
          "Four key building blocks form a high-level checklist for digital transformations."
      },
      {
        url:
          "https://www.bain.com/contentassets/7279619637c1423d9603f6b87518e13e/istock-592371574_16x9.jpg?width=1080&height=612&mode=crop",
        para1: "Business Strategy",
        title: "The Digital Enterprise",
        para2: "Moving from experimentation to transformation."
      },
      {
        url:
          "https://www.bain.com/contentassets/f1cc4a394b2a483eb54b2d9799a800a8/digital-transformations_1440x810.jpg?width=1080&height=612&mode=crop",
        para1: "Transformation",
        title: "Scaling Your Digital Transformation",
        para2: "How you can succeed where others fail."
      },
      {
        url:
          "https://www.bain.com/contentassets/30f713109fa940f8acdbf7b06e066bbb/gettyimages-580501777-16_9.jpg?width=1080&height=612&mode=crop",
        para1: "Enterprise Technology",
        title:
          "Upgrading Your Technology Operating Model: Six Themes for Success",
        para2:
          "It takes real change to deliver high returns on investment in technology."
      }
    ]
  };
  res.send(data);
});

if(process.env.NODE_ENV = "production"){
  const path = require('path')

  app.get('/',(req,res)=>{
      app.use(express.static(path.resolve(__dirname,'frontend','build')))
      res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log("server is running");
})
