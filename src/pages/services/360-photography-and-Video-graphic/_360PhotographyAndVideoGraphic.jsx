import { Banner } from "@components";
import { KeyApplications } from "../key-applications";
const _360PhotographyAndVideoGraphic = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[
            "360° Photography & Videography",
            "360° Photography & Videography",
          ]}
          videosSrc={[
            "https://www.youtube.com/watch?v=6c7eo56Cuvo&ab_channel=5dVRR",
            "https://www.youtube.com/watch?v=6c7eo56Cuvo&ab_channel=5dVRR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " Capture the world in stunning 360-degree detail. Perfect for virtual tours, marketing campaigns, and immersive storytelling.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Real Estate:",
                      value: "Virtual property tours.",
                    },
                    {
                      key: "Tourism:",
                      value: " Immersive travel experiences.",
                    },
                    {
                      key: "Events: ",
                      value: "Virtual event showcases.",
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
export default _360PhotographyAndVideoGraphic;
