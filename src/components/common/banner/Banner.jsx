import { useState } from "react";
import { Video } from "@components";
import img2 from "@images/63c6b0ad72f4f4b412be97f0_screen-mockup.svg";
import { Container } from "reactstrap";
import ImageMaker from "./../image-maker/ImageMaker";
const Banner = ({ tabs = [], className = "" }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [mainTitle , setMainTitle] = useState("AI Interact – The Future of Soft Skills Training ")
const [videoSrc , setVideoSrc] = useState("https://www.youtube.com/watch?v=mfEiIiixwrk&ab_channel=5dVR")
const handleTabClick = (tab) => {
  setSelectedTab(tab.id) ; 
 if(tab.id===0){
  setMainTitle("AI Interact – The Future of Soft Skills Training ")
  setVideoSrc("https://www.youtube.com/watch?v=mfEiIiixwrk&ab_channel=5dVR")
 }
 else if(tab.id===1){
  setMainTitle("Velux – AR Window Installation Guide  ")
  setVideoSrc("https://www.youtube.com/shorts/4YOM07aqwTE")
 }
 else if(tab.id===2){
  setMainTitle(" Feel the Patient – Immersive VR for Pharmaceutical Storytelling ")
  setVideoSrc("https://www.youtube.com/shorts/kN1lLRMpUks")
 }
}
  return (
    <Container>
      <div className={`${className}`}>
        <div className="d-flex flex-column ">
          <h2 className="text-center mb-3">
           {mainTitle}
          </h2>

          <div className="d-flex flex-column">
            <div className="position-relative">
              <div className="macbook-screen">
                <div className="media-wrap _16x9 border-radius-0">
                  <div className="media-asset d-flex">
                    <Video
                      poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/646cd59500edc1681aba933c_capture-studio-thumbnail-min.webp"
                      src={videoSrc}
                      message="Your browser does not support the video tag.
"
                    />
                  </div>
                </div>
              </div>
              <ImageMaker src={img2} loading="lazy" className="width-full  " />
            </div>
          </div>
        </div>
        <div>
          <div className="tabs-menu-2 no-scrollbar w-tab-menu pt-5">
            {tabs &&
              tabs.map((tab) => (
                <a  
                  key={tab.id}
                  className={`tab-link-2 w-inline-block w-tab-link ${
                    selectedTab == tab.id ? "text-white  border-bottom" : ""
                  }`}
                  onClick={()=>handleTabClick(tab)}
                >
                  <div>{tab.tabName}</div>
                </a>
              ))}
          </div>

          <div className="padding-top padding-x-large t_padding-top t_padding-large w-tab-content">
            <div className="w-tab-pane w--tab-active">
              <div className="display-flex justify-center">
                <div className="width-8-col">
                  {tabs[selectedTab]?.tabContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Banner;
