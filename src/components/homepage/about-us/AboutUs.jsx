import Video from "../../common/Video";

const AboutUs = () => {
  return (
    <div>
      <div className="padding-top padding-huge"></div>

      <header>
        <section className="section padding-x-huge t_padding-huge">
          <div className="container">
            <div className="display-flex direction-vertical gap-x-large">
              <div className="display-flex justify-space-between gap-small t_direction-vertical">
                <div className="width-6-col t_width-6-col">
                  <h1>
                    Capture your body’s motion in real-time with Smartsuit Pro
                    II
                  </h1>
                </div>
                <div className="width-4-col t_width-6-col">
                  <div className="display-flex justify-end">
                    <div className="display-flex direction-vertical gap-small">
                      <p>
                        Transform your studio, classNameroom or bedroom into a
                        stage and breathe life into your 3D characters with
                        lifelike animations, for only{" "}
                        <span className="location-based-price">$2,245</span>
                        <br />
                      </p>
                      <div className="display-flex gap-small children-wrap">
                        <a
                          href="https://store.rokoko.com/products/smartsuit-pro-ii"
                          target="_blank"
                          className="button breaking-no-wrap w-button"
                        >
                          Buy Smartsuit Pro II
                        </a>
                        <a
                          href="/products/full-performance-capture"
                          className="button outline breaking-no-wrap w-button"
                        >
                          Buy Full Performance Capture
                        </a>
                        <p>
                          <a href="/mocap/indie-creator-bundle">
                            See if you qualify for indie pricing
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <figure className="display-flex direction-vertical gap-tiny">
                <div className="media-wrap _1464x530 t_786x318 m_327x198">
                  <div className="media-asset display-flex justify-center w-embed">
                    <Video
                      poster={
                        "https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/634e50fcd2c73b4998e83f6f_SSP2-LAUNCH-1464x530-thumbnail.webp"
                      }
                      src={"https://media.rokoko.com/SSP2-LAUNCH-1464x530.mp4"}
                      message="  Your browser does not support the video tag.
"
                    />
                  </div>
                </div>
                <p className="caption">
                  Smartsuit Pro II launch video, a new era in motion capture
                  technology begins
                </p>
              </figure>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};
export default AboutUs;
