import { Container } from "reactstrap";
import { Features } from "./features";
// import { Demo } from "./demo";
import { Industry } from "./industry";
import { Media } from "./media";
import { InterestedWithUs } from "./interested-with-us";
import { GlobalPresence } from "./global-presense";
import { Experience } from "./experience";
import { Partnerships } from "./partnerships";
import { AboutUs } from "./about-us";

const HomePage = () => {
  return (
    <>
      <Container>
        <Experience />
        <AboutUs />
        <Features />
        {/* <Demo /> */}
        <Partnerships />
        <InterestedWithUs />
        <GlobalPresence />
        <Industry />
        <Media />
      </Container>
    </>
  );
};
export default HomePage;
