import { Banner } from "@components";
const WhyChoose5dVr = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={["Why Choose 5dVR? "]}
          videosSrc={[
            "https://www.youtube.com/watch?v=jAvWptBjM7M&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " We combine deep expertise in XR technologies with cutting-edge AI research and development. Our 5dAI team comprises experts in machine learning, natural language processing, computer vision, and avatar design.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default WhyChoose5dVr;
