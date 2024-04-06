// UserProfile.js

import React from "react";
import PropTypes from "prop-types";
import userData from "../userProfileData.json";
// import './UserProfile.css'; // Import CSS file for styling

const UserProfile = () => {
  const { name, email, skills, availability, preferences } = userData;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="profile-info">
          <p className="label">Name:</p>
          <p className="value">{name}</p>
        </div>
        <div className="profile-info">
          <p className="label">Email:</p>
          <p className="value">{email}</p>
        </div>
        <div className="profile-info">
          <p className="label">Skills:</p>
          <ul className="value">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="profile-info">
          <p className="label">Availability:</p>
          <p className="value">{availability}</p>
        </div>
        <div className="profile-info">
          <p className="label">Preferences:</p>
          <p className="value">{preferences}</p>
        </div>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    availability: PropTypes.string.isRequired,
    preferences: PropTypes.string.isRequired,
    // Add more user profile fields if necessary
  }).isRequired,
};

export default UserProfile;
