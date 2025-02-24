import { Banner } from "@components";
const OurVision = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[" Our Vision"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=Sfe4qMcveL8&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " To revolutionize industries through immersive, AI-powered XR solutions. We aim to transform the way businesses, educators, and entertainers interact with their audiences by creating innovative and engaging experiences that drive meaningful results.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default OurVision;
