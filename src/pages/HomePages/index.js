import { Container } from "@mui/material";
import React from "react";
import AskQuestionSection from "../../components/AskQuestionSection";
import ChildrenSection from "../../components/ChildrenSection";
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
         <Container className="borderVishal">
            <MainLayout>
               <TvSection />
            </MainLayout>
         </Container>
         <hr />
         <Container>
            <MainLayout>
               <MobileSection />
            </MainLayout>
         </Container>
         <hr />
         <Container>
            <MainLayout>
               <WatchSection />
            </MainLayout>
         </Container>
         <hr />
         <Container>
            <MainLayout>
               <ChildrenSection />
            </MainLayout>
         </Container>

         <hr />
         <Container>
            <MainLayout>
               <AskQuestionSection />
            </MainLayout>
         </Container>

         <hr />
         <Footer />
      </div>
   );
};

export default HomePage;
