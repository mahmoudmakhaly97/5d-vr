import img1 from "../../../assets/images/services/img1.jpg";
import img2 from "../../../assets/images/services/img2.webp";
import img3 from "../../../assets/images/services/img3.webp";
const Services = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="display-flex justify-space-between gap-small m_direction-vertical">
            <div className="width-6-col t_width-6-col">
              <h2>
                Studio grade motion capture, anywhere, for only{" "}
                <span className="location-based-price">$2,245</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <section className="section padding-xx-large t_padding-x-huge m_padding-x-large">
        <div className="container">
          <div className="display-flex justify-space-between t_direction-vertical t_gap-x-large">
            {/* Left Column */}
            <div className="width-6-col t_width-6-col">
              <div className="display-flex gap-small t_gap-tiny m_direction-vertical">
                {/* Thumbnail Gallery */}
                <div className="width-2-col-in-6-col display-flex direction-vertical gap-small t_width-2-col-in-6-col t_gap-tiny m_direction-horizontal m_justify-space-between m_gap-tiny">
                  {[img1, img2, img3].map((item, index) => (
                    <div className="sizing-grow" key={index}>
                      <div className="media-wrap _224x234 t_111x136">
                        <img
                          loading="lazy"
                          sizes="(max-width: 479px) 29vw, (max-width: 767px) 31vw, (max-width: 991px) 100vw, 246.66015625px"
                          //   srcSet={`images/${imageName}-p-500.webp 500w, images/${imageName}.webp 629w`}
                          id={`gallery-thumbnail-${index + 1}`}
                          alt="Thumbnail"
                          src={item}
                          className="media-asset"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Gallery */}
                <div className="width-4-col-in-6-col t_sizing-grow m_order-first">
                  <div className="media-wrap _472x750 m_327x425">
                    {[img1, img2, img3].map((item, index) => (
                      <img
                        key={index}
                        loading="lazy"
                        sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 100vw, 517.32421875px"
                        // srcSet={`images/${imageName}-p-500.webp 500w, images/${imageName}.webp 629w`}
                        id={`gallery-image-${index + 1}`}
                        alt="Gallery"
                        src={item}
                        className="media-asset"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="width-5-col t_width-6-col">
              <div className="display-flex direction-vertical gap-small justify-space-between">
                <p className="p color-bright-100">
                  Designed for indie creators and loved by the worlds leading
                  studios, the Smartsuit Pro II captures your bodys motion and
                  streams the data over WiFi in real-time to your digital
                  characters.
                  <br />
                  <br />
                  Effortlessly empower your characters using our inertial motion
                  capture suit.
                </p>
                <div className="display-flex gap-small children-wrap">
                  <a
                    href="https://store.rokoko.com/products/smartsuit-pro-ii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button w-button"
                  >
                    Buy Smartsuit Pro II
                  </a>
                  <a
                    href="/products/full-performance-capture"
                    className="button outline w-button"
                  >
                    Buy Full Performance Capture
                  </a>
                  <p className="caption">
                    Or <a href="/request-quote">request a quote</a> for a custom
                    mocap bundle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
