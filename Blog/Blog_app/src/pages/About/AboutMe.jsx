import React from "react";
import "./AboutMe.css";
import profile1 from "../../assets/Images/profile1.jpg";
import profile2 from "../../assets/Images/profile2.jpg";


const AboutMe = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
      </header>

      <section className="about-content">
        <div className="profile-section">
          <img
            src={profile2}
            alt="Akshita Mishra"
            className="profile-picture"
          />
          <div className="profile-details">
            <h2>Akshita Mishra</h2>
            <p>
              I'm a passionate and enthusiastic developer currently pursuing my
              MCA at the IPS Acedamy Indore. I have a keen interest in Full-Stack Development,
              Machine Learning, and building innovative solutions.
            </p>
          </div>
        </div>

        <div className="additional-info">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Degree:</strong> MCA
            </li>
            <li>
              <strong>Institution:</strong> IPS Acedamy Indore
            </li>
            <li>
              <strong>Graduation Year:</strong> 2026
            </li>
          </ul>

          <h3>Skills</h3>
          <ul className="skills-list">
            <li>Frontend: React.js, Next.js, HTML, CSS</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Databases: MongoDB, Firebase</li>
            <li>Others: Tailwind CSS, Git, Socket.io</li>
          </ul>

          <h3>Contact Details</h3>
          <ul className="contact-details">
            <li>
              <strong>Email:</strong> akshitamishra712@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8319555124
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
