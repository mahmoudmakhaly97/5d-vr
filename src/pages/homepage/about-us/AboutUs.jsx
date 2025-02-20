import {   Container  } from "reactstrap";
 


 import HoveredCard from "./HoveredCard";
const AboutUs = () => {
  const data = [
    {
      images: [
        "/full-performance/Discover ai in xr 1.png",
        "/full-performance/Discover ai in xr 2.png",
        "/full-performance/Discover ai in xr 3.png",
        "/full-performance/Discover ai in xr 4.png",
        "/full-performance/Discover ai in xr 5.png",
        "/full-performance/Discover ai in xr 6.png",
        "/full-performance/Discover ai in xr 7.png",
        "/full-performance/Discover ai in xr 8.png",
        "/full-performance/Discover ai in xr 9.png"
      ],
    },
    {
      images: [
        "/full-performance/Industries we serve 1.png",
        "/full-performance/Industries we serve 2.png",
        "/full-performance/Industries we serve 3.png",
        "/full-performance/Industries we serve 4.png",
        "/full-performance/Industries we serve 5.png",
        "/full-performance/Industries we serve 6.png",
        "/full-performance/Industries we serve 7.png",
        "/full-performance/Industries we serve 8.png",
        "/full-performance/Industries we serve 9.png"
      ],
    },
    {
      images: [
        "/full-performance/Featured Projects 1.png",
        "/full-performance/Featured Projects 2.png",
        "/full-performance/Featured Projects 3.png",
        "/full-performance/Featured Projects 4.png",
        "/full-performance/Featured Projects 5.png",
        "/full-performance/Featured Projects 6.png",
        "/full-performance/Featured Projects 7.png",
        "/full-performance/Featured Projects 8.png",
        "/full-performance/Featured Projects 9.png"
      ],
    },
  ];
  
  return (
    <Container className="py-3 py-lg-5">
      <div >
      
        <div>
           <div className="py-3 d-flex gap-2 flex-column align-items-start">
            <h3 className="h _4">Full Performance Capture</h3>
            <h2 className="h _5 color-grey-500">
            <h2 className="h _5 color-grey-500">
            Transforming Ideas into Immersive Experiences That Shape the Future.

            </h2>
            </h2>          </div>
        </div>
        <ul role="list" className="display-flex gap-small carousel">
          {data.map((item, index) => (
            <HoveredCard  key={index} images={item.images} />  
           
             
          ))}
        </ul>
      </div>
    </Container>
  );
};
export default AboutUs;
