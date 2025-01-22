const Experts = () => {
  return (
    <section className="section padding-x-huge t_padding-huge m_padding-xx-large">
      <div className="container">
        <div>
          <div className="splide quotes position-relative">
            <div className="splide__track">
              <ul role="list" className="splide__list">
                <li className="splide__slide sizing-fixed width-full bg-dark-900 bg-switch-on">
                  <div className="display-flex gap-small t_direction-vertical t_gap-medium">
                    <div className="width-2-col display-flex align-center sizing-fixed t_width-9-col t_order-last">
                      <div>
                        <p className="p color-bright-100">Loacher Films</p>
                        <p>3D Artist & Filmmaker</p>
                      </div>
                    </div>
                    <div className="width-1-col"></div>
                    <div className="width-7-col t_width-9-col padding-top t_padding-small">
                      <div className="padding-top padding-huge">
                        <blockquote>
                          “If Im using motion capture I want to use it for
                          everything. Not just simple animations, I want to run,
                          I want to fall, I want to do stunts... I was impressed
                          on every front by the Smartsuit Pro and Smartgloves,
                          so thats why I chose Rokoko.”
                        </blockquote>
                      </div>
                    </div>
                    <div className="width-2-col t_display-none"></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="display-flex gap-x-small position-absolute top-0 right-0 m_left-0">
              <div
                tabIndex="0"
                className="carousel-arrow prev interactive color-bright-100 border-color-bright-100"
              >
                <div className="user-select-none">←</div>
              </div>
              <div
                tabIndex="0"
                className="carousel-arrow next interactive color-bright-100 border-color-bright-100"
              >
                <div className="user-select-none">→</div>
              </div>
            </div>
            <div className="display-flex gap-small t_direction-vertical position-absolute width-full top-0 pointer-events-none t_width-6-col padding-top m_padding-xx-large">
              <div className="width-2-col t_display-none"></div>
              <div className="width-1-col t_display-none"></div>
              <div className="width-3-col">
                <div className="color-bright-100 margin-bottom margin-x-small">
                  <span className="splide-index">1</span> <span>of</span>{" "}
                  <span className="splide-length">1</span>
                </div>
                <div className="splide-progress">
                  <div className="splide-progress-bar bg-bright-100 bg-switch-on"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experts;
