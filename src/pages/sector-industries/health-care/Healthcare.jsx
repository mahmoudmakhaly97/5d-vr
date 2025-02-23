import { Banner } from "@components";
const Healthcare = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[" 📌 Innovating Patient Care and Medical Training"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=p4k0irFqlhY&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                "Immersive technologies are redefining healthcare, from medical training to patient therapy. We provide XR-powered solutions that enhance surgical precision, medical education, and therapeutic treatments, helping doctors, patients, and healthcare professionals achieve better outcomes.",
              id: 0,
            },
          ]}
        />
      </div>
    </div>
  );
};
export default Healthcare;
