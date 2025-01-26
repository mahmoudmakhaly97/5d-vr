import { useState } from "react";
import img2 from "../../assets/images/63c6b0ad72f4f4b412be97f0_screen-mockup.svg";
import Video from "../../components/common/Video";
const Banner = ({ tabs = [], className = "" }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={`container ${className}`}>
      <div className="display-flex direction-vertical gap-x-large">
        <div className="display-flex direction-vertical align-center gap-medium">
          <h2>Speed up your character animation workflow</h2>
        </div>
        <div className="wide-media-tabs">
          <div className="display-flex direction-vertical gap-x-large t_gap-large">
            <div className="position-relative">
              <div className="macbook-screen">
                <div className="media-wrap _16x9 border-radius-0">
                  <div className="media-asset transition-opacity-400 w-embed">
                    <Video
                      poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/646cd59500edc1681aba933c_capture-studio-thumbnail-min.webp"
                      src="https://media.rokoko.com/Capture-Studio.mp4"
                      message="Your browser does not support the video tag.
"
                    />
                  </div>
                </div>
              </div>
              <img
                src={img2}
                loading="lazy"
                alt=""
                className="width-full position-relative pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="padding-top padding-x-large t_padding-top t_padding-large w-tab-content"></div>

        <div className="tabs-menu-2 no-scrollbar w-tab-menu">
          {tabs &&
            tabs.map((tab) => (
              <a
                key={tab.id}
                className={`tab-link-2 w-inline-block w-tab-link ${
                  selectedTab == tab.id ? "w--current" : ""
                }`}
                onClick={() => setSelectedTab(tab.id)}
              >
                <div>{tab.tabName}</div>
              </a>
            ))}
        </div>

        <div className="padding-top padding-x-large t_padding-top t_padding-large w-tab-content">
          <div className="w-tab-pane w--tab-active">
            <div className="display-flex justify-center">
              <div className="width-8-col">{tabs[selectedTab]?.tabContent}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
