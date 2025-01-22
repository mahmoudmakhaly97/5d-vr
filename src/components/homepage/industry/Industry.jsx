import img1 from "../../../assets/images/industry/img1.png";
import img2 from "../../../assets/images/industry/img2.png";
import img3 from "../../../assets/images/industry/img3.png";
import img4 from "../../../assets/images/industry/img4.png";
import img5 from "../../../assets/images/industry/img5.png";
import img6 from "../../../assets/images/industry/img6.png";
import img7 from "../../../assets/images/industry/img7.png";
import img8 from "../../../assets/images/industry/img8.png";
import img9 from "../../../assets/images/industry/img9.png";
import img10 from "../../../assets/images/industry/img10.png";
import img11 from "../../../assets/images/industry/img11.png";
import img12 from "../../../assets/images/industry/img12.png";
const Industry = () => {
  return (
    <div className="section padding-x-huge t_padding-huge m_padding-xx-large">
      <div className="container">
        <div className="display-flex justify-space-between gap-x-large m_direction-vertical m_gap-x-large">
          <div className="width-5-col">
            <div className="display-flex direction-vertical align-start gap-small">
              <h2 className="h _2">The industrys favorite mocap system</h2>
              <p>
                World-className indie creators and award-winning studios have
                chosen Rokoko as their mocap tools of choice
              </p>
            </div>
          </div>
          <div className="width-6-col t_width-7-col t_sizing-fixed">
            <div className="display-flex justify-space-between gap-x-large t_gap-small">
              <div className="display-flex direction-vertical align-start justify-center gap-xx-large t_gap-large">
                <div className="height-small t_height-x-small">
                  <img
                    src={img1}
                    loading="lazy"
                    width="136.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img2}
                    loading="lazy"
                    width="97"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img3}
                    loading="lazy"
                    width="118.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
              </div>
              <div className="display-flex direction-vertical align-start justify-center gap-xx-large t_gap-large">
                <div className="height-small t_height-x-small">
                  <img
                    src={img4}
                    loading="lazy"
                    width="79"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img5}
                    loading="lazy"
                    width="60.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img6}
                    loading="lazy"
                    width="84.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
              </div>
              <div className="display-flex direction-vertical align-start justify-center gap-xx-large t_gap-large">
                <div className="height-small t_height-x-small">
                  <img
                    src={img7}
                    loading="lazy"
                    width="48.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img8}
                    loading="lazy"
                    width="93"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img9}
                    loading="lazy"
                    width="50.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
              </div>
              <div className="display-flex direction-vertical align-start justify-center gap-xx-large t_gap-large">
                <div className="height-small t_height-xx-small">
                  <img
                    src={img10}
                    loading="lazy"
                    width="41"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img11}
                    loading="lazy"
                    width="44.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
                <div className="height-small t_height-x-small">
                  <img
                    src={img12}
                    loading="lazy"
                    width="74.5"
                    alt=""
                    className="display-block width-full height-full fit-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Industry;
