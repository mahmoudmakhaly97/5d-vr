import icon1 from "../../../assets/images/features/icon1.svg";
import icon2 from "../../../assets/images/features/icon2.svg";
import icon3 from "../../../assets/images/features/icon3.svg";
import icon4 from "../../../assets/images/features/icon4.svg";
const Features = () => {
  return (
    <div className="section padding-x-huge t_padding-huge m_padding-x-large">
      <div className="container">
        <div className="display-flex gap-x-huge t_gap-small m_gap-0 m_rows-gap-large m_children-wrap">
          <div className="width-3-col m_width-half m_padding-horizontal m_padding-tiny">
            <div className="display-flex direction-vertical gap-tiny align-center">
              <img src={icon1} loading="lazy" alt="" />
              <p className="color-bright-100 text-align-center">
                30-day trial with refund guarantee
              </p>
            </div>
          </div>
          <div className="width-3-col m_width-half m_padding-horizontal m_padding-tiny">
            <div className="display-flex direction-vertical gap-tiny align-center">
              <img src={icon2} loading="lazy" alt="" />
              <p className="color-bright-100 text-align-center">
                Worldwide tracked delivery
              </p>
            </div>
          </div>
          <div className="width-3-col m_width-half m_padding-horizontal m_padding-tiny">
            <div className="display-flex direction-vertical gap-tiny align-center">
              <img src={icon3} loading="lazy" alt="" />
              <p className="color-bright-100 text-align-center">
                Pay in 12 payments (USA)
              </p>
            </div>
          </div>
          <div className="width-3-col m_width-half m_padding-horizontal m_padding-tiny">
            <div className="display-flex direction-vertical gap-tiny align-center">
              <img
              src={icon4}
                loading="lazy"
                alt=""
              />
              <p className="color-bright-100 text-align-center">
                Dedicated support team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
