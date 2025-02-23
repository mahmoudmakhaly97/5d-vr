import { Banner } from "@components";
import { KeyApplications } from "../key-applications";

const VirtualReality = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[
            " Virtual Reality (VR) Solutions ",
            " Virtual Reality (VR) Solutions ",
          ]}
          videosSrc={[
            "https://www.youtube.com/watch?v=YWYM7iYGjoE&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=YWYM7iYGjoE&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " VR creates fully immersive digital environments that transport users into new worlds. At 5dVR, we design and develop VR solutions that revolutionize industries, from training and education to entertainment and real estate.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Corporate Training:",
                      value:
                        " Hands-on skill-building without real-world risks.",
                    },
                    {
                      key: "Healthcare:",
                      value: " VR surgical training and patient therapy.",
                    },
                    {
                      key: "Real Estate: ",
                      value: " Virtual property tours for remote buyers.",
                    },
                    {
                      key: "Entertainment: ",
                      value: " VR gaming and interactive experiences.",
                    },
                  ]}
                />
              ),
              id: 1,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default VirtualReality;
