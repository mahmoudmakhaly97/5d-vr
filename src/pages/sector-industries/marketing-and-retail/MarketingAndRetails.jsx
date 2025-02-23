import { Banner } from "@components";

const MarketingAndRetails = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["📌 Enhancing Customer Engagement with Immersive Solutions"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=xaUOI-ZWXEA&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "We help brands create unforgettable shopping and marketing experiences using XR technology. From virtual try-ons to interactive AR campaigns, our solutions boost engagement, increase conversions, and enhance brand loyalty.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default MarketingAndRetails;
