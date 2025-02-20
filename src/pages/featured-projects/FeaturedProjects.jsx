 import { Banner } from "@components";
import AiInteract from "./AiInteract";
import Velux from "./Velux";
import FeelThePatient from "./FeelThePatient";

const FeaturedProjects = () => {
  return (
    <div className="py-5" style={{paddingTop:"300px"}}>
       <Banner  
        className="py-5 mt-5"
        tabs={[
          {
            tabName: "AI Interact ",
            tabContent:
        < AiInteract/> ,
            id: 0,
          },
          {
            tabName: "Velux",
            tabContent:
               <Velux />  , 
            id: 1,
          },
          {
            tabName: "Feel the Patient",
            tabContent:
              <FeelThePatient /> ,
            id: 2,
          },
       
        ]}
      />
    </div>  )
}

export default FeaturedProjects