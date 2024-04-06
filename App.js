import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import JobListings from "./components/JobListings";
import JobDetails from "./components/JobDetails";
import Header from "./components/Header";
import Slider from "./components/slider";
import About from "./components/about";

function App() {
  const banner = [
    {
      bannerImg:
        "https://img.freepik.com/premium-photo/we-are-hiring-collage-concept_23-2150726426.jpg?size=626&ext=jpg&ga=GA1.1.1546719746.1706173277&semt=ais",
      bannerLink: "https://www.flipkart.com/",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Slider banner={banner} />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/jobs" exact element={<JobListings />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
        </Routes>
        <About/>
      </div>
    </Router>
  );
}

export default App;
