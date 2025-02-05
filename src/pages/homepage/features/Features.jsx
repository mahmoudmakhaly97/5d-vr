import { Col, Container, Row } from "reactstrap";
import icon1 from "@images/features/icon1.svg";
import icon2 from "@images/features/icon2.svg";
import icon3 from "@images/features/icon3.svg";
import icon4 from "@images/features/icon4.svg";
import { ImageMaker } from "@components/common";
const featuresData = [
  {
    icon: icon1,
    text: "Innovation at the Core",
  },
  {
    icon: icon2,
    text: "Client-Centric Solutions ",
  },
  {
    icon: icon3,
    text: "Creativity Unleashed Excellence and Quality",
  },
  {
    icon: icon4,
    text: "Collaboration and Partnership",
  },
];
const Features = () => {
  return (
    <Container className="py-3">
      <Row className="g-3 text-center">
        {featuresData.map((item, index) => (
          <Col sm={6} lg={3} key={index}>
            <div className="d-flex flex-column gap-3 align-items-start align-items-sm-center">
              <ImageMaker src={item.icon} />
              <p>{item.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Features;
