import { Banner } from "@components";
import { KeyApplications } from "../key-applications";
const AIPoweredXRSolutions = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["AI-Powered XR Solutions ", "AI-Powered XR Solutions "]}
          videosSrc={[
            "https://www.youtube.com/shorts/TH_gQN8a9h8",
            "https://www.youtube.com/shorts/TH_gQN8a9h8",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " AI-powered XR combines Artificial Intelligence with Extended Reality to create smarter, more interactive experiences. Our AI-driven solutions enhance training, customer service, and personalized learning.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Corporate Training:",
                      value: "AI-powered virtual instructors.",
                    },
                    {
                      key: "Retail:",
                      value: " AI-driven customer service assistants.",
                    },
                    {
                      key: "Healthcare:",
                      value: "  AI-powered diagnostic tools.",
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
export default AIPoweredXRSolutions;
