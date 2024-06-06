import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Footer() 
{
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.container}
      >
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
          {/* Section: Social media */}
          <section
            className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            style={{
              borderTop: "2px solid red",
              borderRadius: "5px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              backgroundColor: "antiquewhite",
            }}
          >
            {/* Left Portion */}
            <div
              className="me-5 d-none d-lg-block"
              style={{
                fontSize: "1.2em",
              }}
            >
              <span>
                <strong> Get connected with us on social networks:</strong>
              </span>
            </div>
            {/* Right Portion */}
            <div>
              <a
                href="/"
                className="sqs-svg-icon--wrapper facebook"
                style={{
                  padding: "10px",
                  fontFamily: "proxima-nova",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "22px",
                  letterSpacing: ".01em",
                  lineHeight: "1.7rem",
                  textTransform: "none",
                  color: "blue",
                }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="/"
                className="sqs-svg-icon--wrapper email"
                target="_blank"
                style={{
                  padding: "10px",
                  fontFamily: "proxima-nova",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "22px",
                  letterSpacing: ".01em",
                  lineHeight: "1.7rem",
                  textTransform: "none",
                  color: "lightblue",
                }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="/"
                className="sqs-svg-icon--wrapper google"
                target="_blank"
                style={{
                  padding: "10px",
                  fontFamily: "proxima-nova",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "22px",
                  letterSpacing: ".01em",
                  lineHeight: "1.7rem",
                  textTransform: "none",
                  color: "green",
                }}
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                href="/"
                className="sqs-svg-icon--wrapper instagram"
                style={{
                  padding: "10px",
                  fontFamily: "proxima-nova",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "22px",
                  letterSpacing: ".01em",
                  lineHeight: "1.7rem",
                  textTransform: "none",
                  color: "pink",
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="/"
                className="sqs-svg-icon--wrapper linkedin"
                target="_blank"
                style={{
                  padding: "10px",
                  fontFamily: "proxima-nova",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "22px",
                  letterSpacing: ".01em",
                  lineHeight: "1.7rem",
                  textTransform: "none",
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="/"
                className="sqs-svg-icon--wrapper github"
                style={{
                  padding: "10px",
                  fontFamily: "proxima-nova",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: "22px",
                  letterSpacing: ".01em",
                  lineHeight: "1.7rem",
                  textTransform: "none",
                  color: "black",
                }}
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>
          {/* Section: Social media */}

          {/* Section: Links  */}
          <section>
            <div className="container text-center text-md-start mt-5">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>
                    <strong>Quick Links</strong>
                  </h6>
                  <p>
                    <ul
                      class="list-group list-group-flush"
                      style={{
                        boxShadow:
                          "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
                        cursor: "pointer",
                      }}
                    >
                      <Link>
                        <li class="list-group-item">
                          <strong>Login / Register</strong>
                        </li>
                      </Link>
                      <Link>
                        <li class="list-group-item">
                          <strong>Notifications</strong>
                        </li>
                      </Link>
                      <Link>
                        <li class="list-group-item">
                          <strong>Yours Orders</strong>
                        </li>
                      </Link>
                      <Link
                        to={"/askai"}
                        onClick={() => {
                          console.log("Help & Support Clicked!");
                        }}
                      >
                        <li class="list-group-item">
                          <strong>Help & Support</strong>
                        </li>
                      </Link>
                      <Link>
                        <li class="list-group-item">
                          <strong>Account & Settings</strong>
                        </li>
                      </Link>
                    </ul>
                  </p>
                </div>
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content Section*/}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>
                    <strong>Our Services</strong>
                  </h6>
                  <p>
                    <ul
                      class="list-group list-group-flush"
                      style={{
                        fontSize: "13pt",
                        cursor: "pointer",
                        boxShadow:
                          "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",
                      }}
                    >
                      <Link to={"/movies"} Navigate={"/"}>
                        <li class="list-group-item">Book Movies</li>
                      </Link>
                      <Link to={"/movies"} Navigate={"/"}>
                        <li class="list-group-item active">Book Plays</li>{" "}
                      </Link>
                      <Link to={"/events"} Navigate={"/"}>
                        <li class="list-group-item">Book Events</li>
                      </Link>
                      <Link to={"/sports"} Navigate={"/"}>
                        <li class="list-group-item active">Book Matches</li>
                      </Link>
                      <Link to={"/events"} navigate={"/"}>
                        <li class="list-group-item">Book Concert</li>
                      </Link>
                    </ul>
                  </p>
                </div>
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>
                    <strong>Contact Info</strong>
                  </h6>
                  <p
                    style={{
                      display: "grid",
                      color: "black",
                      justifyContent: "space-around",
                      gap: "10px",
                    }}
                  >
                    <ul
                      class="list-group list-group-flush"
                      style={{
                        boxShadow:
                          "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
                      }}
                    >
                      <li class="list-group-item">
                        <a
                          href="#"
                          style={{
                            color: "black",
                          }}
                        >
                          <i class="fas fa-chevron-right"></i>
                          <strong>+91 9409541314</strong>
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          href="#"
                          style={{
                            color: "black",
                          }}
                        >
                          <i class="fas fa-chevron-right"></i>
                          <strong>+91 6351968332</strong>
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          href="mailto:ravalvyom17@gmail.com"
                          target="_blank"
                          style={{
                            color: "black",
                          }}
                        >
                          <i class="fas fa-envelope"></i>
                          <strong>ravalvyom17@gmail.com</strong>
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          href="mailto:desaisaiji7@gmail.com"
                          target="_blank"
                          style={{
                            color: "black",
                          }}
                        >
                          <i class="fas fa-envelope"></i>
                          <strong>desaisaiji7@gmail.com</strong>
                        </a>
                      </li>
                      <li class="list-group-item">
                        <a
                          href="https://www.google.com/maps/place/Nirma+University/@23.1286841,72.5428675,17z/data=!3m1!4b1!4m6!3m5!1s0x395e832f45125167:0x876cb1cb23c25bdb!8m2!3d23.1286792!4d72.5454424!16zL20vMGIwZjZk?entry=ttu"
                          style={{
                            color: "black",
                          }}
                        >
                          <i class="fas fa-map-marker-alt"></i>{" "}
                          <strong>Ahmedabad, India</strong>
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>

                {/* Grid column */}

                {/* Add other grid columns similarly */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}

          {/* Copyright */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2024 Copyright:
            <a className="text-reset fw-bold" href="/">
              BookMyEvents.com
            </a>
          </div>
          {/* Copyright */}
        </footer>
      </div>
    </>
  );
}
export default Footer;
