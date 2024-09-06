import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="about-us-container">
        <div className="about-us-box">
        <h1>Quick Links</h1>
      {/* <div className="marquee-container" style={{ border: "2px solid white", padding: "2px" }}> */}
        <marquee behavior="scroll" direction="left" scrollamount="5" style={{ height: "1cm", width: "100%" }}>
          <a style={{ fontSize: "1.2em", color:"white" }} href="https://hackfest.gnitscollege.in/">HackFest 2024 - A National Level Hackathon</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style={{ fontSize: "1.2em", color:"white" }} href="https://www.gnits.ac.in/blog/">Checkout GNITS Blog</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a style={{ fontSize: "1.2em", color:"white" }} href="https://www.naukri.com/campus/career-guidance/top-skills-to-crack-campus-placement-interviews">Top Skills to Conquer Campus Placement Interviews (With Expert Tips!) </a>
        </marquee>
      </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-box">
        <h1>About Us</h1>
        <p className="text-justify">G. Narayanamma Institute of Technology Science (for Women), Hyderabad Is Committed to Imparting Quality Education and Training for Women Empowerment in the Field of “engineering and Technology” and to Satisfy Applicable Requirements. GNITS Is the Top Women’s Engineering College in Hyderabad Which Is Leading the Future for Women in Engineering and Technology.Our prominent recruiters include in  Microsoft , PayPal , Flipkart ,JP Morgan Chase & Co. , Salesforce,  ServiceNow , Teradata , S&P Global , SS & C Technologies , Ford Business Solutions ,Providence, Blue Yonder, CleanHarbors, MindSprint , IDFC First Bank, Accenture, Flipkart , APTIV, Quantium , Mu Sigma, AT & T , Stellantis  , Ashok Leyland , Skillsoft  , UST  , PWC  , State Street   , OpenText, Pega Systems, Sirius – A CDW Company   , Providence , Carrier Technologies India Limited  , IBM, Alstom  , Darwinbox,   Merilytics , Deloitte  , Bank of America  , Micron  , UiPath  , CBRE  , Accolite Digital  , Silicon Labs , AVEVA , Worley , Zelis, Telstra.</p>
      </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-box">
        <h1>Testimonials</h1>
        <p className="text-justify">"Our college taught us, how a woman can do every sort of work, how to face society, how to judge and plan life, to take responsibilities and of course poured us with the knowledge to obtain better careers. It moulded us in a perfect way to grow higher and higher. Thank you GNITS." - Katta Abhinaya,FPGA Senior Design Engineer-1,Xilinx</p>
        <p className="text-justify">"My journey with GNITS has been an amazing one with the great learning experience and opportunities to grow in life and career. GNITS has always been one such platform where we could just come up and portray the talent within us." - R. Juhitha, Software Engineer, JPMC</p>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
