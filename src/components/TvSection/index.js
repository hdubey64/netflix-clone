import { Container, Row, Col } from "reactstrap";
import SectionBanner from "../atoms/SectionBanner";
import SectionTitle from "../atoms/SectionTitle";
import ReactPlayer from "react-player";
import "./style.css";

const TvSection = () => {
   return (
      <div>
         <Container>
            <div className="tvContent">
               <Row>
                  <Col md={12} lg={6} className="m-auto">
                     <SectionTitle>
                        <h1>Enjoy on your TV.</h1>
                        <p>
                           Watch on smart TVs, PlayStation, Xbox, Chromecast,
                           Apple TV, Blu-ray players and more..
                        </p>
                     </SectionTitle>
                  </Col>
                  <Col md={12} lg={6} className="m-auto">
                     <SectionBanner>
                        <img
                           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                           alt="Banner"
                        />
                        <video
                           src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                           muted
                           autoPlay={"autoplay"}
                           loop
                           preLoad="auto"
                           playsInline
                        />
                     </SectionBanner>
                  </Col>
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default TvSection;
