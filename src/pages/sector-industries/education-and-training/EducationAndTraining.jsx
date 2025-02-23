import { Banner } from "@components";
const EducationAndTraining = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[" 📌 Transforming Learning Through Immersive Technology "]}
          videosSrc={[
            "https://www.youtube.com/watch?v=jAvWptBjM7M&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "We revolutionize education and training by integrating Virtual Reality (VR), Augmented Reality (AR), and Mixed Reality (MR) to create engaging, interactive learning experiences. Whether in schools, universities, or corporate training programs, our solutions enhance retention, provide hands-on practice, and bridge the gap between theory and real-world application.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default EducationAndTraining;
