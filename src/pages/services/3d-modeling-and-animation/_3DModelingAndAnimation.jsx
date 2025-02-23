import { Banner } from "@components";
import { KeyApplications } from "../key-applications";
const _3DModelingAndAnimation = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["3D Modeling & Animation", "3D Modeling & Animation"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=aG8tRbyCQLQ&list=PL_Gw46Q3y1aVvQYbsY5JAiurKCgaN7YHp&index=1&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=aG8tRbyCQLQ&list=PL_Gw46Q3y1aVvQYbsY5JAiurKCgaN7YHp&index=1&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "  Bring ideas to life with high-quality 3D models and animations. Ideal for product visualization, architectural design, and entertainment.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Architecture:",
                      value: "3D building renderings.",
                    },
                    {
                      key: "Gaming:",
                      value: " Character and environment design.",
                    },
                    {
                      key: "Marketing: ",
                      value: "Animated product demos.",
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
export default _3DModelingAndAnimation;
