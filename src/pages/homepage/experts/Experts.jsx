import { useState } from "react";
import { Col, Container, Row } from "reactstrap";
const expertsData = [
  {
    name: "Loacher Films",
    job: "3D Artist & Filmmaker",
    quote:
      "“Great customer support, killer products at an even better price point. By leaps and bounds the best mocap suit and gloves in the industry for the price right now.”",
  },
  {
    name: "Brian Parnell",
    job: "NoMatter Studio, behind the game 'Praey for the Gods'",
    quote:
      "“The Smartsuit Pro has allowed us to improve our cutscenes, and add more subtle animations for our characters. It's also allowed us much more creative freedom to try out new ideas that in the past were simply too difficult or time consuming.”",
  },
  {
    name: "Loacher Films",
    job: "3D Artist & Filmmaker",
    quote:
      "“Great customer support, killer products at an even better price point. By leaps and bounds the best mocap suit and gloves in the industry for the price right now.”",
  },
];
const Experts = () => {
  const [step, setStep] = useState(0);
  const handleIncreaseStep = () => {
    if (step >= 2) return;
    setStep((prev) => prev + 1);
  };
  const handleDecreaseStep = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };
  return (
    <section className="py-3 py-lg-5 bg_section experts">
      <Container>
        <Row className="align-items-center">
          <Col lg={3}></Col>
          <Col lg={9}>
            <div className="d-flex justify-content-between">
              <div className="d-flex  flex-column gap-2 w-100">
                <h5 className="count"> {step + 1} of 3</h5>
                <div className="border-container">
                  <span
                    className={
                      step === 0 ? "first" : step === 1 ? "second" : "third"
                    }
                  ></span>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div
                  className="carousel-arrow  pointer"
                  onClick={handleDecreaseStep}
                >
                  ←
                </div>

                <div
                  className="carousel-arrow  pointer"
                  onClick={handleIncreaseStep}
                >
                  →
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="splide__slide sizing-fixed width-full bg-switch-on">
          <Row className="py-3 py-lg-5">
            <Col sm={2} className="flex-1">
              <div className="pb-3">
                <p>{expertsData[step].name}</p>
                <p className="text-gray">{expertsData[step].job}</p>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={9}>
              <blockquote>{expertsData[step].quote}</blockquote>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default Experts;
