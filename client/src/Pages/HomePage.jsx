import React from "react";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
// components
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
import Projects from "../components/projcets/Projects";
import Services from "../components/services/Services";
const HomePage = () => {
  return (
    <div className="h-full w-full min-w-[280px] bg-white dark:bg-primary ">
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
