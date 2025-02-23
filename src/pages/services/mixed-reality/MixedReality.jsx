import { Banner } from "@components";
import { KeyApplications } from "../key-applications";
const MixedReality = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[
            "Mixed Reality (MR) Solutions",
            "Mixed Reality (MR) Solutions",
          ]}
          videosSrc={[
            "https://www.youtube.com/watch?v=1xXHM74yE8A&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=1xXHM74yE8A&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " MR combines the best of VR and AR, allowing users to interact with virtual objects in real-world settings. We develop MR solutions for advanced training, design visualization, and interactive installations.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Healthcare:",
                      value: "MR-assisted surgeries and patient interactions.",
                    },
                    {
                      key: "Engineering: ",
                      value: " MR-based product design and prototyping.",
                    },
                    {
                      key: "Events: ",
                      value: " Interactive MR installations for exhibitions.",
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
export default MixedReality;
