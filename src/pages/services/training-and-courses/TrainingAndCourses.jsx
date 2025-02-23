import { Banner } from "@components";
import { KeyApplications } from "../key-applications";
const TrainingAndCourses = () => {
  return (
    <div className="pt-5">
      <div className="pt-5">
        <Banner
          className="py-5"
          titles={[" Training & Courses", " Training & Courses"]}
          videosSrc={[
            "https://www.youtube.com/watch?v=OKu4b3aUtTI&ab_channel=5dVR",
            "https://www.youtube.com/watch?v=OKu4b3aUtTI&ab_channel=5dVR",
          ]}
          tabs={[
            {
              tabName: "Description",
              tabContent:
                " Empower individuals and organizations with specialized training and courses in immersive technology. Our programs are designed to develop skills in VR, AR, MR, and AI-powered XR applications, preparing professionals for the future of digital experiences.",
              id: 0,
            },
            {
              tabName: "Key Applications",
              tabContent: (
                <KeyApplications
                  applications={[
                    {
                      key: "Corporate Training: ",
                      value:
                        " Upskilling teams in immersive technology applications.",
                    },
                    {
                      key: "Educational Institutions:",
                      value: "Hands-on courses for students and professionals.",
                    },
                    {
                      key: "Workshops & Masterclasses:",
                      value: "Industry-specific immersive technology training.",
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
export default TrainingAndCourses;
