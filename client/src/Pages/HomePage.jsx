import React from "react";
// components
import Header from "../components/header/Header";
import Profile from "../components/profile/Profile";
const HomePage = () => {
  return (
    <div className="h-full w-full min-w-[280px] bg-primary">
      <Header />
      <Profile />
      <div
        className="center--content h-screen bg-slate-300 text-white"
        id="services"
      >
        Service
      </div>
      <div
        className="center--content h-screen bg-blue-300 text-white"
        id="projects"
      >
        Projects
      </div>
      <div
        className="center--content h-screen bg-red-300 text-white"
        id="contact"
      >
        Contact
      </div>
    </div>
  );
};

export default HomePage;
