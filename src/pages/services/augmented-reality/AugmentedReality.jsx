import { Banner } from "@components";
import { KeyApplications } from "../key-applications";

const AugmentedReality = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[
            " Augmented Reality (AR) Experiences",
            " Augmented Reality (AR) Experiences",
          ]}
          videosSrc={[
            "https://www.youtube.com/shorts/mcbYzt1iC0g",
            "https://www.youtube.com/shorts/mcbYzt1iC0g",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "  AR blends the physical and digital worlds, enhancing real-world experiences with interactive digital overlays. Our AR solutions drive engagement, improve learning, and transform marketing and retail experiences.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Retail : ",
                      value:
                        "  AR-powered virtual try-ons and product visualizations.",
                    },
                    {
                      key: "Marketing :",
                      value: " Interactive AR campaigns and advertisements.",
                    },
                    {
                      key: "Education:",
                      value: " AR-guided learning experiences.",
                    },
                    {
                      key: "Cultural Heritage: ",
                      value: " AR-guided museum tours.",
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
export default AugmentedReality;
