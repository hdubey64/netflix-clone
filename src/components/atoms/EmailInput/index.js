import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Input, Button } from "reactstrap";
import { FaChevronRight } from "react-icons/fa";
import "./style.css";

const EmailInput = () => {
   return (
      <div className="emailInput">
         <div>
            <InputGroup className="inputContent" size="400">
               <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  className="inputFeild"
               />

               <Button className="getInput">
                  GetStarted
                  <FaChevronRight />
               </Button>
            </InputGroup>
         </div>
      </div>
   );
};

export default EmailInput;
