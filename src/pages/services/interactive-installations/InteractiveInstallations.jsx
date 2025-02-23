import { Banner } from "@components";
import { KeyApplications } from "../key-applications";
const InteractiveInstallations = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[" Interactive Installations", " Interactive Installations"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=_vCgrEMLUR4&list=PL_Gw46Q3y1aU_mbzoeo1kH1fy0cnjdj7M&index=1&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=_vCgrEMLUR4&list=PL_Gw46Q3y1aU_mbzoeo1kH1fy0cnjdj7M&index=1&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " Engage audiences with cutting-edge interactive installations that blend technology, creativity, and storytelling. From immersive brand activations to experiential exhibits, we design solutions that captivate and educate.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Retail & Marketing:",
                      value:
                        " Interactive brand activations and digital product showcases.",
                    },
                    {
                      key: "Museums & Exhibitions:",
                      value: "Hands-on educational installations.",
                    },
                    {
                      key: "Events & Entertainment:",
                      value:
                        " Immersive installations for enhanced audience engagement.",
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
export default InteractiveInstallations;
