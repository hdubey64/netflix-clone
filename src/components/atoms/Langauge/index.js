import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import {
   Dropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import "./style.css";

const ChangeLanguage = ({ direction }) => {
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const toggle = () => setDropdownOpen((prevState) => !prevState);

   return (
      <div className="d-flex">
         <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            direction={direction}
            className="backgroundChange"
         >
            <DropdownToggle caret>
               <FaGlobe className="me-1" />
               English
            </DropdownToggle>
            <DropdownMenu>
               <DropdownItem header>English</DropdownItem>
               <DropdownItem>हिंदी</DropdownItem>
            </DropdownMenu>
         </Dropdown>
      </div>
   );
};

ChangeLanguage.propTypes = {
   direction: PropTypes.string,
};

export default ChangeLanguage;
