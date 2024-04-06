import React from "react";
import JobList from "./JobListings";
import "./home.css";
import Freelencer from "./freelencer";
function Home() {
  return (
    <div className="main-cnt">
      <div className="left">
        <JobList />
      </div>
      <div className="right">
        <Freelencer />
      </div>
    </div>
  );
}

export default Home;
