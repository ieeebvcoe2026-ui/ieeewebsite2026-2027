import React from "react";
import Herosection from "../components/Herosection";
import HomeCard from "../components/HomeCard";
import MembershipBenefits from "../components/MembershipBenefits";
import teamImg from "../assets/team.jpg"

const Home = () => {
  return (
    <>
      <Herosection teamImage={teamImg} />
      <HomeCard />
      <MembershipBenefits />
    </>
  );
};

export default Home;
