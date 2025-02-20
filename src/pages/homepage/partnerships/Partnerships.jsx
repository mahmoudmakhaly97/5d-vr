import { Col, Container, Row } from "reactstrap";
 import { ImageMaker } from "@components/common";
import img from "@images/key-partnership/img.jpg"
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
    <Container className="py-lg-5 py-3">
      <Row className="g-3 g-lg-5">
        <Col lg={6}>
          <div className="d-flex flex-column gap-4">
            <h2>{partnershipsData[0]}</h2>
            {partnershipsData.slice(1).map((item) => (
              <p className="text-gray" key={item.title}>
                <strong>{item.title} </strong>
                <span>{item.desc}</span>
              </p>
            ))}
        
          </div>
        </Col>
        <Col lg={6}>
        <ImageMaker src={img} className="rounded-3"   />

        </Col>
      </Row>
    </Container>
  );
};
export default Partnerships;
