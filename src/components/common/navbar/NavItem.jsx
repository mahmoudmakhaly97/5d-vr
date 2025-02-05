import { Link } from "react-router-dom";
import { ImageMaker, Video } from "@components";
import arrowDown from "../../../assets/images/navbar/arrow-down.svg";

const NavItem = ({ item }) => {
  return (
    <li className="nav-dropdown-wrap">
      <Link to="" className="nav-dropdown-link w-inline-block pb-4">
        <p className="me-2">{item?.dropdownLink}</p>
        <ImageMaker src={arrowDown} alt="arrow-down" />
      </Link>

      <div className="nav-dropdown bg-switch-on visibility-hidden">
        <div className="nav-dropdown-bg bg-switch-on">
          <div className="container medium display-flex">
            <div className="display-flex justify-space-between t_display-block sizing-grow">
              <div className="width-6-col display-flex direction-vertical t_display-none">
                <div className="media-wrap _606x260 margin-bottom margin-large w-inline-block">
                  <div className="media-asset display-flex justify-center w-embed">
                    <Video src={item?.videoSrc} poster={item?.videoPoster} />
                  </div>
                </div>
                <h6 className="video-desc">{item?.videoDesc}</h6>
              </div>
              <div className="width-1px bg-grey-500 margin-horizontal margin-huge t_display-none"></div>
              <div className="width-6-col d-flex  justify-content-between">
                <ul role="list" className="nav-dropdown-list">
                  {item?.features.map((item, index) => (
                    <div key={index}>
                      <li className="nav-dropdown-list-item">
                        <Link to={""} className="color-bright-100">
                          <h4 className="color-bright-100 font-20">
                            {item.mainTitle}
                          </h4>
                        </Link>
                        <li className="nav-dropdown-list-item" key={index}>
                          <Link to={item.route} className="color-bright-100">
                            <h4 className="font-20"> {item?.subTitle}</h4>
                          </Link>
                        </li>
                      </li>
                      {item?.subTitles?.map((item, index) => (
                        <li className="nav-dropdown-list-item" key={index}>
                          <Link to={item.route} className="color-bright-100">
                            <h4 className="font-20"> {item?.subTitle}</h4>
                          </Link>
                        </li>
                      ))}
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
