import React from 'react';
import styles from "./Team.module.css";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.png";


function Team() {
  return (
    <>
      <div className={styles.team}>
        <div className="py-5 team4">
          <div className="container">
            <div className="row justify-content-center mb-4">
              <div className="col-md-7 text-center">
                <h3 className="mb-3" style={{
                  fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  lineHeight:"1",
                  fontSize: "2rem",
                  marginTop:"-60px"
                }}>Our BookMyEvents Team</h3>
                <h6 className="subtitle"
                style={{
                  fontFamily:"Georgia, 'Times New Roman', Times, serif",
                  fontSize:"1.2rem"
                }}>
                  "Meet our experienced and professional team at BookMyEvents!
                  With a combined wealth of expertise and a dedication to
                  excellence, our team is committed to delivering top-notch
                  services and creating an exceptional experience for our
                  customers. You can rely on us to provide amazing features and
                  outstanding customer support, making your experience with us
                  truly memorable."
                </h6>
              </div>
            </div>
            <div className="row">
              {/* First column */}
              <div className="col-lg-4 mb-4 left-img">
                {/* Row */}
                <div className="row vravalimg">
                  <div className="col-md-12">
                    <img
                      src={team1}
                      alt="Vyom Raval"
                      className="img-fluid rounded-circle"
                      style={{ width: "360px", height: "345px", border: "2px solid black" }}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">
                        <strong>Vyom Raval</strong>
                      </h5>
                      <h6 className="subtitle mb-3">Full Stack Developer</h6>
                      <p>
                        You can rely on our amazing features list and also our
                        customer services will be a great experience.
                      </p>
                      <div className="social"
                      style={{marginTop: "10px"}}
                      >
                        <a href="https://www.facebook.com/vyom.raval.167/" target="_blank"> <i className="fab fa-facebook" 
                      style={{ 
                      color: "blue",
                      backgroundColor:"#222",
                      fontSize:"16px",
                      color:"white", 
                      margin:"5px",
                      height:"35px",
                      width:"35px",
                      lineHeight:"35px",
                      textAlign:"center",
                      borderRadius:"5px",
                      transition:"0.5s"
                      }}
                      ></i></a>
                        <a href="https://www.instagram.com/cool_guy_0304/" target="_blank"> <i className="fab fa-instagram" 
                        style={{ 
                          color: "lightblue",
                          backgroundColor:"#222",
                          fontSize:"16px",
                          color:"white", 
                          margin:"5px",
                          height:"35px",
                          width:"35px",
                          lineHeight:"35px",
                          textAlign:"center",
                          borderRadius:"5px",
                          transition:"0.5s"
                        }}
                        ></i></a>
                        <a href="https://www.linkedin.com/in/vyom-raval-490108252/" target="_blank"> <i className="fab fa-linkedin" 
                        style={{ 
                          color: "pink",
                          backgroundColor:"#222",
                          fontSize:"16px",
                          color:"white", 
                          margin:"5px",
                          height:"35px",
                          width:"35px",
                          lineHeight:"35px",
                          textAlign:"center",
                          borderRadius:"5px",
                          transition:"0.5s"
                        }}
                        ></i></a>
                        <a href="https://github.com/vraval13" target="_blank"> <i className="fab fa-github" 
                        style={{ 
                          color: "white",
                          backgroundColor:"#222",
                          fontSize:"16px",
                          color:"white", 
                          margin:"5px",
                          height:"35px",
                          width:"35px",
                          lineHeight:"35px",
                          textAlign:"center",
                          borderRadius:"5px",
                          transition:"0.5s"
                        }}
                        ></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Row */}
              </div>
              {/* First column */}
              <div className="col-lg-4 mb-4 center-img">
                {/* Row */}
                <div className="row vravalimg">
                  <div className="col-md-12">
                    <img
                      src={team2}
                      alt="Sunil Gautam"
                      className="img-fluid rounded-circle"
                      style={{ width: "360px", height: "345px", border: "2px solid black" }}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">
                        <strong>Dr. Sunil Gautam</strong>
                      </h5>
                      <h6 className="subtitle mb-3">Guider & Instructor</h6>
                      <p>
                        {/* You can rely on our amazing features list and also our
                        customer services will be a great experience. */}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Row */}
              </div>
              {/* Second column (moved to the right) */}
              <div className="col-lg-4 mb-4 right-img">
                {/* Row */}
                <div className="row saijimg">
                  <div className="col-md-12">
                    <img
                      src={team3}
                      alt="Saiji Desai"
                      className="img-fluid rounded-circle"
                      style={{ width: "360px", height: "345px", border: "2px solid black" }}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="pt-2">
                      <h5 className="mt-4 font-weight-medium mb-0">
                        <strong>Saiji Desai</strong>
                      </h5>
                      <h6 className="subtitle mb-3">Full Stack Developer</h6>
                      <p>
                        You can rely on our amazing features list and also our
                        customer services will be a great experience.
                      </p>
                      <div className="social">
                      {/* <a href="https://www.facebook.com/vyom.raval.167/" target="_blank"> <i className="fab fa-facebook" 
                      style={{ 
                      color: "blue",
                      backgroundColor:"#222",
                      fontSize:"16px",
                      color:"white", 
                      margin:"5px",
                      height:"35px",
                      width:"35px",
                      lineHeight:"35px",
                      textAlign:"center",
                      borderRadius:"5px",
                      transition:"0.5s"
                      }}
                      ></i></a> */}
                        <a href="https://www.instagram.com/saiji_desai07/" target="_blank"> <i className="fab fa-instagram" 
                        style={{ 
                          color: "lightblue",
                          backgroundColor:"#222",
                          fontSize:"16px",
                          color:"white", 
                          margin:"5px",
                          height:"35px",
                          width:"35px",
                          lineHeight:"35px",
                          textAlign:"center",
                          borderRadius:"5px",
                          transition:"0.5s"
                        }}
                        ></i></a>
                        <a href="https://www.linkedin.com/in/saiji-desai/" target="_blank"> <i className="fab fa-linkedin" 
                        style={{ 
                          color: "pink",
                          backgroundColor:"#222",
                          fontSize:"16px",
                          color:"white", 
                          margin:"5px",
                          height:"35px",
                          width:"35px",
                          lineHeight:"35px",
                          textAlign:"center",
                          borderRadius:"5px",
                          transition:"0.5s"
                        }}
                        ></i></a>
                        <a href="https://github.com/saiji07" target="_blank"> <i className="fab fa-github" 
                        style={{ 
                          color: "white",
                          backgroundColor:"#222",
                          fontSize:"16px",
                          color:"white", 
                          margin:"5px",
                          height:"35px",
                          width:"35px",
                          lineHeight:"35px",
                          textAlign:"center",
                          borderRadius:"5px",
                          transition:"0.5s",
                          // transform:"scale(1.2)"
                        }}
                        ></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Row */}
              </div>
              {/* Second column */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
