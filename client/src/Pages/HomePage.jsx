import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
// components
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import Projects from "../components/projcets/Projects";
import Services from "../components/services/Services";
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <div className="h-full w-full min-w-[280px] overflow-x-hidden bg-white dark:bg-primary ">
      <Header />
      <Profile />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
