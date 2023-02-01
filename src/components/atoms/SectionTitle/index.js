import { Box } from "@mui/material";
import "./style.css";

const SectionTitle = ({ children }) => {
   return (
      <div className="sectionTitle">
         <div className="titleContent">{children}</div>
      </div>
   );
};

export default SectionTitle;
