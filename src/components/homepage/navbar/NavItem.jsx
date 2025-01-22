import arrowDown from "../../../assets/images/navbar/arrow-down.svg";
import Video from "../../common/Video";

const NavItem = ({ item }) => {
  return (
    <li className="nav-dropdown-wrap" key={item.id}>
      <a href="#" className="nav-dropdown-link w-inline-block">
        <p className="margin-right margin-tiny">{item.dropdownLink}</p>
        <img src={arrowDown} alt="arrow-down" />
      </a>

      <div className="nav-dropdown bg-switch-on visibility-hidden">
        <div className="nav-dropdown-bg bg-switch-on">
          <div className="container medium display-flex">
            <div className="display-flex justify-space-between t_display-block sizing-grow">
              <div className="width-6-col display-flex direction-vertical t_display-none">
                <a
                  href="#"
                  className="media-wrap _606x260 margin-bottom margin-large w-inline-block"
                >
                  <div className="media-asset display-flex justify-center w-embed">
                    <Video src={item.videoSrc} poster={item.videoPoster} />
                  </div>
                </a>
                <a href="#" className="text-decoration-none w-inline-block">
                  <h3>{item.videoDesc}</h3>
                </a>
              </div>
              <div className="width-1px bg-grey-500 margin-horizontal margin-huge t_display-none"></div>
              <div className="width-6-col display-flex direction-vertical justify-space-between">
                <ul role="list" className="w-list-unstyled nav-dropdown-list">
                
                  {
                    item.features.map((item)=>(
                    <div key={item.mainTitle}>
                        <li className="nav-dropdown-list-item">
                      <a href="#">
                      <h4 className="color-bright-100 main-link"  >{item.mainTitle}</h4>
                      </a>
                    </li>
                    {
                      item.subTitles.map(item=>(
                        <li className="nav-dropdown-list-item" key={item}>
                        <a href="#" className="color-bright-100">
                          {item}
                        </a>
                      </li>
                      ))
                    }
                    </div>
                    ))
                  }
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
