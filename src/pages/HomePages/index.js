import React from "react";
import AskQuestionSection from "../../components/AskQuestionSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import MobileSection from "../../components/MobileSection";
import TvSection from "../../components/TvSection";
import WatchSection from "../../components/WatchSection";
import MainLayout from "../../layouts/MainLayout";

const HomePage = () => {
   return (
      <div>
         <HeroSection />
         <MainLayout>
            <HeroSection />
            <TvSection />
            <MobileSection />
            <WatchSection />
            <AskQuestionSection />
            <Footer />
         </MainLayout>
      </div>
   );
};

export default HomePage;
