import "./Whatwedo.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
export default function Afterlogin() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/companyGet")
      .then((response) => {
        const responseData = response.data;
        setStudents(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <div className="conta">
      <Navbar2 />

      <div className="box">
        <h2> Job and Internship Alerts</h2>
        <div className="box">
          <ul>
            {students
              .filter((student) => student.companyType === "Placement")
              .map((student) => (
                <div className="about-us-container">
                  <div className="about-us-box">
                    <li key={student.id}>
                      <h5>{student.companyName}</h5>
                      <span >{student.description}</span>
                      <br />
                      <form style={{textAlign:'justify'}} action={student.websiteUrl}>
                        <button type="submit" id="button2">
                          Apply now
                        </button>
                      </form>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          </div>
      <div className="box">
        <h2> Upcoming Hackathons and Coding Contests</h2>
        <div className="box">
          <ul>
            {students
              .filter(
                (student) =>
                  student.companyType === "Hackathon" ||
                  student.companyType === "Coding Contest"
              )
              .map((student) => (
                <div className="about-us-container">
                  <div className="about-us-box">
                <li key={student.id} className="box">
                  <h5>{student.companyName}</h5>
                  <span style={{ textAlign: 'justify' }} >{student.description}</span>
                  <form action={student.websiteUrl}>
                    <button type="submit" id="button2">
                      Register
                    </button>
                  </form>
                </li>
                </div>
                </div>
              ))}
          </ul>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  );
}
