import { Banner } from "@components";
const WhyChoose5dVr = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["Why Choose 5dVR? "]}
          videosSrc={[
            "https://www.youtube.com/watch?v=Sfe4qMcveL8&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "5dVR creates cutting-edge immersive solutions using Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR). Our 5dAI initiative leverages advanced artificial intelligence to create lifelike, multilingual, and emotionally intelligent avatars. We partner with industry leaders to deliver high-quality, scalable experiences that transform how businesses operate and connect with their audiences. Explore the future of interaction.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default WhyChoose5dVr;
