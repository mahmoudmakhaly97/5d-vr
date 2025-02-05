import img1 from "@images/full1.webp";
import img2 from "@images/full2.webp";
import img3 from "@images/full3.webp";
import img4 from "@images/full4.webp";
import { Button } from "@components/common";
const AboutUs = () => {
  return (
    <section className="section padding-x-huge t_padding-huge m_padding-xx-large">
      <div className="container">
        <div className="display-flex direction-vertical gap-x-large">
          <div className="display-flex justify-space-between gap-small m_direction-vertical">
            <div className="display-flex width-6-col">
              <h2>
                Transforming Ideas into Immersive Experiences That Shape the
                Future.
              </h2>
            </div>
            <div className="width-4-col">
              <div className="display-flex direction-vertical gap-small align-start">
                <p className="text-gray">
                  Where Technology Meets Imagination to Build the Extraordinary.
                </p>
                <Button variant="secondary"> Know More</Button>
              </div>
            </div>
          </div>
          <div className="display-flex direction-vertical gap-small">
            <figure className="display-flex direction-vertical gap-tiny">
              <a
                href="#"
                className="media-wrap _1464x530 t_786x318 m_327x198 w-inline-block"
              >
                <img src={img1} loading="lazy" alt="" className="media-asset" />
              </a>
            </figure>
            <div className="display-flex justify-space-between gap-small t_direction-vertical">
              <div className="width-4-col t_width-6-col">
                <div className="display-flex direction-vertical gap-x-small">
                  <h3 className="h _4">Full Performance Capture</h3>
                  <div className="display-flex children-wrap gap-small">
                    <a href="#" className="button w-button">
                      Learn more
                    </a>
                    <a href="#" className="button no-outline w-button">
                      Get a demo →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul role="list" className="display-flex gap-small carousel">
            <li className="width-4-col sizing-fixed t_width-4-col m_width-2-col">
              <div className="display-flex direction-vertical gap-small">
                <a href="" className="media-wrap _472x630 w-inline-block">
                  <img
                    src={img2}
                    loading="lazy"
                    sizes="(max-width: 479px) 58vw, (max-width: 767px) 61vw, (max-width: 991px) 30vw, 27vw"
                    alt=""
                    className="media-asset"
                  />
                </a>
                <div className="display-flex direction-vertical gap-x-small">
                  <a
                    href="#"
                    className="display-flex text-decoration-none w-inline-block"
                  >
                    <h3 className="h _4">Featured projects</h3>
                  </a>
                  <div className="display-flex children-wrap gap-small">
                    <a href="#" className="button w-button">
                      Learn more
                    </a>
                    <a href="#" className="button no-outline w-button">
                      Get a demo →
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="width-4-col sizing-fixed t_width-4-col m_width-2-col">
              <div className="display-flex direction-vertical gap-small">
                <a href="#" className="media-wrap _472x630 w-inline-block">
                  <img
                    src={img3}
                    loading="lazy"
                    sizes="(max-width: 479px) 58vw, (max-width: 767px) 61vw, (max-width: 991px) 30vw, 27vw"
                    alt=""
                    className="media-asset"
                  />
                </a>
                <div className="display-flex direction-vertical gap-x-small">
                  <a
                    href="#"
                    className="display-flex text-decoration-none w-inline-block"
                  >
                    <h3 className="h _4">Industries We Serve</h3>
                  </a>
                  <div className="display-flex children-wrap gap-small">
                    <a href="#" className="button w-button">
                      Learn more
                    </a>
                    <a href="#" className="button no-outline w-button">
                      Get a demo →
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="width-4-col sizing-fixed t_width-4-col m_width-2-col">
              <div className="display-flex direction-vertical gap-small">
                <a href="#" className="media-wrap _472x630 w-inline-block">
                  <img
                    src={img4}
                    loading="lazy"
                    sizes="(max-width: 479px) 58vw, (max-width: 767px) 61vw, (max-width: 991px) 30vw, 27vw"
                    alt=""
                    className="media-asset"
                  />
                </a>
                <div className="display-flex direction-vertical gap-x-small">
                  <a
                    href="#"
                    className="display-flex text-decoration-none w-inline-block"
                  >
                    <h3 className="h _4">Discover AI in XR</h3>
                  </a>
                  <div className="display-flex children-wrap gap-small">
                    <a href="#" className="button w-button">
                      Learn more
                    </a>
                    <a href="#" className="button no-outline w-button">
                      Get a demo →
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
