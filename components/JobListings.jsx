// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import React from "react";
import jobListingsData from "../jobListings.json"; // Import JSON data
import "./JobList.css";

const JobList = () => {
   
  return (
    <div className="job-cnt">
      <h2 className="job-list-title">Job Listings</h2>
      <ul className="job-list">
        {jobListingsData.map((job) => (
          <div className="card-container">
            <div className="contentleft">
              <img
                className="round"
                src="https://media.licdn.com/dms/image/C4E0BAQFDKVnlWyo9MQ/company-logo_100_100/0/1672777937309/the_chef_agency_logo?e=2147483647&v=beta&t=QlJuH8Y6JL-k89Ee6J2GZJqM2fZ1Ul47455tJF5tNjU"
                alt="user"
              />
            </div>
            <div className="contentright">
              <h3 className="jobtitle">{job.title}</h3>
              <p>{job.description}</p>
              <h6>Type: {job.type}</h6>
              <p>
                Location: {job.location} <br /> Timings: {job.timings}
              </p>

              <div className="skills">
                <h6>Skills</h6>
                <ul>
                  <li>UI / UX</li>
                  <li>Front End Development</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node</li>
                </ul>
              </div>
              <div>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          </div>
          // <li key={job._id} className='job-item '>
          //   <h3>{job.title}</h3>
          //   <p>{job.description}</p>
          //   <p>Type: {job.type}</p>
          //   <p>Location: {job.location}</p>
          //   <p>Timings: {job.timings}</p>
          //   {job.remote && <p>Remote Work: Available</p>}
          //   {/* Additional options */}
          //   {/* Display skills required */}
          //   {job.skills && (
          //     <div>
          //       <p>Skills Required:</p>
          //       <ul>
          //         {job.skills.map(skill => (
          //           <li key={skill}>{skill}</li>
          //         ))}
          //       </ul>
          //     </div>
          //   )}
          //   {/* Display application deadline */}
          //   {job.deadline && <p>Application Deadline: {job.deadline}</p>}
          //   {/* Display contact details */}
          //   {/* {job.contact && (
          //     <div>
          //       <p>Contact Details:</p>
          //       <p>Name: {job.contact.name}</p>
          //       <p>Email: {job.contact.email}</p>
          //       <p>Phone: {job.contact.phone}</p>
          //     </div>
          //   )} */}
          //   {/* Add more options as needed */}
          //   {/* Button to apply for job */}
          //   <button className='apply-btn'>Apply Now</button>
          // </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
