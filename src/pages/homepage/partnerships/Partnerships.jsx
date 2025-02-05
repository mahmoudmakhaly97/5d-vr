import { Col, Container, Row } from "reactstrap";
import { Button, Video } from "@components/common";
const partnershipsData = [
  "Our Key Partnerships",
  {
    title: "TACIES – Oman : ",
    desc: "A collaboration aimed at pushing the boundaries of immersive  education and science, enhancing interactive experiences across  Oman. Together, we are pioneering AR and VR solutions that inspire curiosity and foster learning.",
  },
  {
    title: "Xceed Immersive – Dubai : ",
    desc: " Partnering to deliver world-class immersive solutions in the UAE, from corporate training to large-scale entertainment experiences. Xceed Immersive and 5dVR work hand-in-hand to redefine possibilities in AR, VR, and MR technologies.",
  },
];
const Partnerships = () => {
  return (
    <Container>
      <Row className="g-3 g-lg-0">
        <Col lg={6}>
          <div className="d-flex flex-column gap-4">
            <h2>{partnershipsData[0]}</h2>
            {partnershipsData.slice(1).map((item) => (
              <p className="text-gray" key={item.title}>
                <strong>{item.title} </strong>
                <span>{item.desc}</span>
              </p>
            ))}
            <div className="display-flex gap-small children-wrap">
              <Button variant="secondary">Lorem Ipsum</Button>
              <Button variant="outline">Lorem Ipsum</Button>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="display-flex justify-center">
            <figure className="width-4-col-in-6-col t_width-full">
              <div className="media-wrap _472x630">
                <div className="media-asset d-flex  ">
                  <Video
                    poster="https://cdn.prod.website-files.com/5e6b63ac3b6e253f11889f39/64d34a994c0b4c9be2693f52_Coil_Doggo_Thumbnail-min.webp"
                    src="https://media.rokoko.com/Coil_Doggo_1080x1442.mp4"
                  />
                </div>
              </div>
            </figure>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Partnerships;
