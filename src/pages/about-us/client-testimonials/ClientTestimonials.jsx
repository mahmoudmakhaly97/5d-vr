import { Banner } from "./../../../components";

const ClientTestimonials = () => {
  return (
    <div className="py-5">
      <Banner
        className="py-5"
        tabs={[
          {
            tabName: "Capture",
            tabContent: "Content 1",
            id: 0,
          },
          {
            tabName: "Animate",
            tabContent: "Content 2",
            id: 1,
          },
          {
            tabName: "Live stream",
            tabContent: "Content 3",
            id: 2,
          },
          {
            tabName: "Edit",
            tabContent: "Content 4",
            id: 3,
          },
          {
            tabName: "Export",
            tabContent: "Content 5",
            id: 4,
          },
        ]}
      />
    </div>
  );
};
export default ClientTestimonials;
