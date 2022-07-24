import React from "react";
import Chart from "../chart/Chart";
import Featured from "../featured-chart/Featured";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
