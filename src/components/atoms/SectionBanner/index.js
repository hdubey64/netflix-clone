import { Box } from "@mui/material";
import "./style.css";

const SectionBanner = ({ children }) => {
   return (
      <div className="sectionBanner">
         <div className="bannerContent">{children}</div>
      </div>
   );
};

export default SectionBanner;
