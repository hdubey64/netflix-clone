import "./style.css";

const MainLayout = ({ children }) => {
   return (
      <>
         <hr />
         <div className="main-layout sectionBlack">{children}</div>
      </>
   );
};

export default MainLayout;
