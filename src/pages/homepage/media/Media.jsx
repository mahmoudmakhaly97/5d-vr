import { Col, Container, Row } from "reactstrap";
import { Button, Video } from "@components/common";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import media2 from "@images/media2.webp";
import media1 from "@images/media1.webp";
import xceedVideo from "../../../assets/videos/xceed.mp4";
import xceedImg from "../../../assets/images/xceedImg.jpg";
import leap from "../../../assets/images/leap.png";
import Qatar from "../../../assets/images/Qatar.jpg";
const mediaData = [
  {
    imgUrl: media1,
    title: "5dVR Partners with TACIES for Immersive Science Education in Oman",
    text: "  We’re thrilled to collaborate with TACIES to bring cutting-edge AR  and VR experiences across Oman, enhancing how science is taught and experienced.",
    videoUrl: xceedVideo,
  },
  {
    imgUrl: xceedImg,
    title: "Xceed Immersive and 5dVR Team Up for Large-Scale Projects in Dubai",
    text: " Together with Xceed Immersive, we’re redefining immersive   experiences in the UAE, focusing on real estate, corporate training, and entertainment.",
  },
  {
    imgUrl: leap,
    title: " 5dVR at LEAP 2025: Showcasing Immersive Innovation",
    text: "   We’re excited to announce our participation in LEAP 2025, the world’s largest technology event. Join us as we unveil our latest advancements in VR, AR, and AI integration for transformative   experiences.",
  },
  {
    imgUrl: Qatar,
    title: " Web Summit Qatar: 5dVR Takes Center Stage",
    text: " As part of the Web Summit in Qatar, 5dVR is proud to present how  immersive technologies are reshaping industries. Experience firsthand how we combine creativity and technology to deliver  groundbreaking solutions.",
  },
  {
    imgUrl: media2,
    title: " Technology Partner for RiseUp AI: Shaping the Future ",
    text: "We’re honored to be the official technology partner for RiseUp AI.  From AI-driven immersive training to interactive simulations, 5dVR is powering the future of artificial intelligence in immersive applications.",
  },
];
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <Container>
      <Row className="align-items-lg-center g-3 mb-3 mb-lg-5  ">
        <Col lg={6}>
          <h2>Stay Connected with 5dVR</h2>
        </Col>
        <Col lg={6} className="d-flex justify-content-lg-end">
          <Button variant="outline"> Go to Blog </Button>
        </Col>
      </Row>
      {/* <Row className="py-3">
        <div className="media-wrap _1464x530 t_786x318 m_327x198 w-inline-block ">
          <img src={media1} loading="lazy" alt="" className="media-asset " />
        </div>
      </Row> */}
      <Row>
        <Col lg={3}></Col>

        <Col lg={9}>
          <h3 className="h _4">
            Follow our journey as we innovate, collaborate, and inspire across
            global events and partnerships.
          </h3>
        </Col>
      </Row>

      <Slider {...settings} className="my-3 my-lg-5">
        {mediaData.map((item, index) => (
          <div
            className="display-flex direction-vertical gap-small t_gap-x-small"
            key={index}
          >
            <a
              href="#"
              className="media-wrap _720x370 t_381x231 w-inline-block"
            >
              {item.videoUrl ? (
                <Video className="media-asset w-video" src={item.videoUrl} />
              ) : (
                <img src={item.imgUrl} className="media-asset" />
              )}
              {/* <img src={item.imgUrl} className="media-asset" /> */}
            </a>
            <div className="display-flex justify-space-between gap-small t_direction-vertical  gap-2 my-3">
              <span className="text-gray  flex-grow-1">{item.title}</span>
              <p className="w-100 font-14 text-white">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};
export default Media;
