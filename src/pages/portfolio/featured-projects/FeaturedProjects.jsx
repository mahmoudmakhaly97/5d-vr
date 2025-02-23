import { Banner } from "@components";
import AiInteract from "./AiInteract";
import Velux from "./Velux";
import FeelThePatient from "./FeelThePatient";

const FeaturedProjects = () => {
  return (
    <div className="py-5" style={{ paddingTop: "300px" }}>
      <Banner
        className="py-5 mt-5"
        titles={[
          "AI Interact – The Future of Soft Skills Training ",
          "Velux – AR Window Installation Guide  ",
          " Feel the Patient – Immersive VR for Pharmaceutical Storytelling ",
        ]}
        videosSrc={[
          "https://www.youtube.com/watch?v=mfEiIiixwrk&ab_channel=5dVR",
          "https://www.youtube.com/shorts/4YOM07aqwTE",
          "https://www.youtube.com/shorts/kN1lLRMpUks",
        ]}
        tabs={[
          {
            tabName: "AI Interact ",
            tabContent: <AiInteract />,
            id: 0,
          },
          {
            tabName: "Velux",
            tabContent: <Velux />,
            id: 1,
          },
          {
            tabName: "Feel the Patient",
            tabContent: <FeelThePatient />,
            id: 2,
          },
        ]}
      />
    </div>
  );
};

export default FeaturedProjects;
