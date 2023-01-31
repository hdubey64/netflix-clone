import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaChevronRight } from "react-icons/fa";
import "./style.css";

const EmailInput = () => {
   return (
      <div className="m-auto">
         <InputGroup className="emailInput">
            <Form.Control
               placeholder="Email address"
               aria-label="Email address"
               className="emaiFeild"
            />
            <InputGroup.Text className="getInput" style={{ marginLeft: 1.5 }}>
               Get Started <FaChevronRight />
            </InputGroup.Text>
         </InputGroup>
      </div>
   );
};

export default EmailInput;
