import { Col, Container, Row } from "reactstrap";
import { Button } from "@components/common";
const MocapSuits = () => {
  const tableData = [
    {
      title: "   Real-time tracking",
      desc1: "Supported",
      desc2: "Not supported",
    },
    {
      title: "Tracking space",
      desc1: "Flexible, mocap anywhere",
      desc2: "Limited, distance constraints  ",
    },
    {
      title: " Set up time",
      desc1: "Fast, 1 min",
      desc2: "Slow, 15 min",
    },
  ];
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
          {tableData.map((item, index) => (
            <Row className="py-4" key={index}>
              <Col md={4}>
                <h5 className="text-gray d-flex gap-2">
                  {item.title}
                  <span className="info">i</span>
                </h5>
              </Col>
              <Col md={4}>
                <h5>{item.desc1}</h5>
              </Col>
              <Col md={4}>
                <h5> {item.desc2} </h5>
              </Col>
            </Row>
          ))}
          <div className="display-flex justify-center mt-4">
            <Button variant="outline"> See the full comparison</Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
export default MocapSuits;
