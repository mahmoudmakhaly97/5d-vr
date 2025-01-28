import { Link } from "react-router-dom";
import arrowDown from "../../../assets/images/navbar/arrow-down.svg";
import { ImageMaker, Video } from "..";

const NavItem = ({ item }) => {
  return (
    <li className="nav-dropdown-wrap">
      <a href="#" className="nav-dropdown-link w-inline-block pb-5">
        <p className="me-2">{item.dropdownLink}</p>
        <ImageMaker src={arrowDown} alt="arrow-down" />
      </a>

      <div className="nav-dropdown bg-switch-on visibility-hidden">
        <div className="nav-dropdown-bg bg-switch-on">
          <div className="container medium display-flex">
            <div className="display-flex justify-space-between t_display-block sizing-grow">
              <div className="width-6-col display-flex direction-vertical t_display-none">
                <div className="media-wrap _606x260 margin-bottom margin-large w-inline-block">
                  <div className="media-asset display-flex justify-center w-embed">
                    <Video src={item.videoSrc} poster={item.videoPoster} />
                  </div>
                </div>
                <h3>{item.videoDesc}</h3>
              </div>
              <div className="ms-5 width-6-col d-flex  justify-content-between">
                <ul role="list" className="nav-dropdown-list">
                  {item.features.map((item, index) => (
                    <div key={index}>
                      <li className="nav-dropdown-list-item">
                        <Link to={""}>
                          <h4 className="main-link">{item.mainTitle}</h4>
                        </Link>
                      </li>
                      {item.subTitles.map((item, index) => (
                        <li className="nav-dropdown-list-item" key={index}>
                          <Link to={item.route} className="color-bright-100">
                            {item?.subTitle}
                          </Link>
                        </li>
                      ))}
                      <p>{item?.quote}</p>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default NavItem;
