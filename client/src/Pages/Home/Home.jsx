import React from "react";
import HomeBanner from "../../Components/Banner/HomeBanner";
import RecentProducts from "../../Components/Products/RecentProducts";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>

      <div className="w-10/12 mx-auto">
        <RecentProducts></RecentProducts>
      </div>
    </div>
  );
};

export default Home;
