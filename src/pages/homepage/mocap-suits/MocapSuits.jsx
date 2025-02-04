import { Col, Container, Row } from "reactstrap";
import { Button } from "@components/common";
const MocapSuits = () => {
  return (
    <div className="py-4 bg_section MocapSuits">
      <section className="py-5  ">
        <Container className="py-5">
          <h2 className="text-center mb-3">
            Mocap suits vs video-based mocap systems
          </h2>
          <Row className="py-4   ">
            <Col md={4}></Col>
            <Col md={4}>
              <h5 className="text-gray title">Mocap suits</h5>
            </Col>
            <Col md={4}>
              <h5 className="text-gray title">Video-based mocap systems</h5>
            </Col>
          </Row>{" "}
          <Row className="py-4  ">
            <Col md={4}>
              <h5 className="text-gray d-flex gap-2">
                Real-time tracking
                <span className="info">i</span>
              </h5>
            </Col>
            <Col md={4}>
              <h5>Supported</h5>
            </Col>
            <Col md={4}>
              <h5>Not supported</h5>
            </Col>
          </Row>
          <Row className="py-4  ">
            <Col md={4}>
              {" "}
              <h5 className="text-gray d-flex gap-2">
                Tracking space <span className="info">i</span>
              </h5>
            </Col>
            <Col md={4}>
              {" "}
              <h5>Flexible, mocap anywhere</h5>
            </Col>
            <Col md={4}>
              {" "}
              <hf>Limited, distance constraints</hf>
            </Col>
          </Row>
          <Row className="py-4  ">
            <Col md={4}>
              {" "}
              <h5 className="text-gray d-flex gap-2">
                Set up time <span className="info">i</span>
              </h5>
            </Col>
            <Col md={4}>
              {" "}
              <h5>Fast, 1 min</h5>
            </Col>
            <Col md={4}>
              {" "}
              <h5>Slow, 15 min</h5>
            </Col>
          </Row>
          <div className="display-flex justify-center mt-4">
            <Button variant="outline"> See the full comparison</Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default MocapSuits;
