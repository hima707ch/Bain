import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles/slideshow.css";
import "./styles/NavbarTop.css";

const fadeImages = [
  {
    url:
      "https://www.bain.com/contentassets/c657671fbbd44017988bdfcd2ae049e7/responsible-ai-in-financial-services_1920x1080.png?width=1920&height=1080&mode=crop",
    caption: "Five Principles for Generative AI in Financial Services"
  },
  {
    url:
      "https://www.bain.com/contentassets/9d7aaa8be8424cedac7736b2fa7456ae/midyear-pe_1920x1080px.jpg?width=1920&height=1080&mode=crop",
    caption: "Stuck in Place: Private Equity Midyear Report 2023"
  },
  {
    url:
      "https://www.bain.com/contentassets/609d3bbade16409cab4de4a04d221cb7/v1_older-workers_bainhomepage_1920x1080-002.jpg?width=1920&height=1080&mode=crop",
    caption: "Better with Age: The Rising Importance of Older Workers"
  },
  {
    url:
      "https://www.bain.com/contentassets/f2b30c8ba5084f338a5525b60d0a16ef/19403_1920x1080.jpg?width=1920&height=1080&mode=crop",
    caption: "M&A Midyear Report 2023: It Takes Two to Make a Market"
  }
];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="slide">
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${fadeImage.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              <div className="container-1">
                <div className="container-2">
                  <div className="container-3 ">
                    <h2 className="caption">{fadeImage.caption}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
