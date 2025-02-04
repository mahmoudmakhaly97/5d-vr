import { Col, Container, Row } from "reactstrap";
import icon1 from "@images/features/icon1.svg";
import icon2 from "@images/features/icon2.svg";
import icon3 from "@images/features/icon3.svg";
import icon4 from "@images/features/icon4.svg";
import { ImageMaker } from "@components/common";
const featuresData = [
  {
    icon: icon1,
    text: "30-day trial with refund guarantee",
  },
  {
    icon: icon2,
    text: "Worldwide tracked delivery",
  },
  {
    icon: icon3,
    text: "Pay in 12 payments (USA)",
  },
  {
    icon: icon4,
    text: "Dedicated support team",
  },
];
const Features = () => {
  return (
    <div className="section padding-x-huge t_padding-huge m_padding-x-large bg_section px-0">
      <Container>
        <Row className="g-3 text-center">
          {featuresData.map((item, index) => (
            <Col md={3} key={index}>
              <div className="display-flex direction-vertical gap-tiny align-center">
                <ImageMaker src={item.icon} />
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Features;
