import { Container } from "reactstrap";
import EmailInput from "../atoms/EmailInput";
import Input from "../atoms/EmailInput";
import Header from "../Header";
import "./style.css";

const HeroSection = () => {
   return (
      <div className="heroSection">
         <Header />
         <Container>
            <div className="heroContent">
               <h1>Unlimited movies, TV shows and more.</h1>
               <h5> Watch anywhere. Cancel anytime.</h5>
               <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
               </p>
               <div className="heroInput">
                  <EmailInput />
               </div>
            </div>
         </Container>
      </div>
   );
};

export default HeroSection;
