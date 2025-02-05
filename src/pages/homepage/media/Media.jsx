import media2 from "@images/media2.webp";
import media1 from "@images/media1.webp";
import play from "@images/play.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Media = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // When screen size is below 768px (tablet & mobile)
        settings: {
          slidesToShow: 1, // Show 1 item on mobile
          centerPadding: "0px", // Adjust spacing if needed
        },
      },
    ],
  };
  return (
    <section className="section padding-x-huge t_padding-huge m_padding-xx-large ">
      <div className="container">
        <div className="display-flex direction-vertical gap-x-large t_gap-small">
          <div className="display-flex justify-space-between gap-small m_direction-vertical">
            <div className="width-6-col t_width-6-col">
              <h2>Rokoko mocap is used by thousands of 3D creators</h2>
            </div>
            <div>
              <a href="#" className="button outline w-button">
                All user stories & reviews
              </a>
            </div>
          </div>
          <div className="display-flex direction-vertical gap-x-large">
            <div className="display-flex direction-vertical gap-small">
              <a
                href="#"
                className="media-wrap _1464x530 t_786x318 m_327x198 w-inline-block"
              >
                <img
                  src={media1}
                  loading="lazy"
                  alt=""
                  className="media-asset"
                />
              </a>
              <div className="display-flex m_direction-vertical m_gap-x-small">
                <div className="width-3-col t_width-4-col">
                  <a href="#" className="text-decoration-none w-inline-block">
                    <div className="display-flex align-center gap-x-small">
                      <img
                        src={play}
                        loading="lazy"
                        alt="open the link"
                        className="image-play"
                      />
                      <p>Watch the story</p>
                    </div>
                  </a>
                </div>
                <div className="width-1-col t_display-none"></div>
                <a
                  href="#"
                  className="width-6-col t_width-6-col text-decoration-none w-inline-block"
                >
                  <h3 className="h _4">
                    A masterclassName in remote collaboration & live holographic
                    show production with Nicolas Brunet
                  </h3>
                </a>
              </div>
            </div>
            {/* ..... */}
            <Slider {...settings}>
              <div className="display-flex direction-vertical gap-small t_gap-x-small">
                <a
                  href="#"
                  className="media-wrap _720x370 t_381x231 w-inline-block"
                >
                  <img
                    src={media1}
                    loading="lazy"
                    alt="Colourful animated 3D characters in a scene"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, 100vw"
                    className="media-asset"
                  />
                </a>
                <div className="display-flex justify-space-between gap-small t_direction-vertical  gap-2 my-3">
                  <span className="text-gray caption flex-grow-1">
                    5dVR Partners with TACIES for Immersive Science Education in
                    Oman
                  </span>
                  <p className="w-100 font-14">
                    We’re thrilled to collaborate with TACIES to bring
                    cutting-edge AR and VR experiences across Oman, enhancing
                    how science is taught and experienced.
                  </p>
                </div>
              </div>

              <div className="display-flex direction-vertical gap-small t_gap-x-small">
                <a
                  href="#"
                  className="media-wrap _720x370 t_381x231 w-inline-block"
                >
                  <img
                    src={media2}
                    loading="lazy"
                    alt="Ian Hubert in his studio"
                    className="media-asset"
                  />
                </a>
                <div className="display-flex justify-space-between gap-small t_direction-vertical  gap-2 my-3">
                  <span className="text-gray caption flex-grow-1">
                    Xceed Immersive and 5dVR Team Up for Large-Scale Projects in
                    Dubai
                  </span>
                  <p className="w-100 font-14">
                    Together with Xceed Immersive, we’re redefining immersive
                    experiences in the UAE, focusing on real estate, corporate
                    training, and entertainment.
                  </p>
                </div>
              </div>
              <div className="display-flex direction-vertical gap-small t_gap-x-small">
                <a
                  href="#"
                  className="media-wrap _720x370 t_381x231 w-inline-block"
                >
                  <img
                    src={media1}
                    loading="lazy"
                    alt="Colourful animated 3D characters in a scene"
                    sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, 100vw"
                    className="media-asset"
                  />
                </a>
                <div className="display-flex justify-space-between gap-small t_direction-vertical  gap-2 my-3">
                  <span className="text-gray caption flex-grow-1">
                    5dVR at LEAP 2025: Showcasing Immersive Innovation
                  </span>
                  <p className="w-100 font-14">
                    We’re excited to announce our participation in LEAP 2025,
                    the world’s largest technology event. Join us as we unveil
                    our latest advancements in VR, AR, and AI integration for
                    transformative experiences.
                  </p>
                </div>
              </div>

              <div className="display-flex direction-vertical gap-small t_gap-x-small">
                <a
                  href="#"
                  className="media-wrap _720x370 t_381x231 w-inline-block"
                >
                  <img
                    src={media2}
                    loading="lazy"
                    alt="Ian Hubert in his studio"
                    className="media-asset"
                  />
                </a>
                <div className="display-flex justify-space-between gap-small t_direction-vertical  gap-2 my-3">
                  <span className="text-gray caption flex-grow-1">
                    Web Summit Qatar: 5dVR Takes Center Stage{" "}
                  </span>
                  <p className="w-100 font-14">
                    As part of the Web Summit in Qatar, 5dVR is proud to present
                    how immersive technologies are reshaping industries.
                    Experience firsthand how we combine creativity and
                    technology to deliver groundbreaking solutions.
                  </p>
                </div>
              </div>
              <div className="display-flex direction-vertical gap-small t_gap-x-small">
                <a
                  href="#"
                  className="media-wrap _720x370 t_381x231 w-inline-block"
                >
                  <img
                    src={media2}
                    loading="lazy"
                    alt="Ian Hubert in his studio"
                    className="media-asset"
                  />
                </a>
                <div className="display-flex justify-space-between gap-small t_direction-vertical  gap-2 my-3">
                  <span className="text-gray caption flex-grow-1">
                    Technology Partner for RiseUp AI: Shaping the Future{" "}
                  </span>
                  <p className="w-100 font-14">
                    We’re honored to be the official technology partner for
                    RiseUp AI. From AI-driven immersive training to interactive
                    simulations, 5dVR is powering the future of artificial
                    intelligence in immersive applications.
                  </p>
                </div>
              </div>
            </Slider>

            {/* ... */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Media;
