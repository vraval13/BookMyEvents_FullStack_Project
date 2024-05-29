import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import Typed from "typed.js";
import "./App.css";
import Logo from "./assets/Logo.png";
import { FaLocationCrosshairs } from "react-icons/fa6"; //for Loc Icon
import { LuSearchCode } from "react-icons/lu"; //for search icon
import { VscThreeBars } from "react-icons/vsc"; //for three bars
import { IoIosArrowDropdown } from "react-icons/io"; //for dropdown in location
import { TbLocationFilled } from "react-icons/tb"; //for detect location icon
import { GiIndiaGate } from "react-icons/gi"; //for india gate icon
import { TfiGift } from "react-icons/tfi"; //for offcanvas gift icon
import { MdOutlineNotificationAdd } from "react-icons/md"; //for  offcanvas notify icon
import { FaArrowsTurnRight } from "react-icons/fa6"; //for offcanvas right arrow icon
import { TiShoppingCart } from "react-icons/ti"; //for offcanvas  cart icon
import { PiTelevisionBold } from "react-icons/pi"; //for offcanvas stream icon
import { FcCustomerSupport } from "react-icons/fc"; //for offcanvas help icon
import { MdOutlineSettings } from "react-icons/md"; //for offcanvas setting icon
import { BsFillGiftFill } from "react-icons/bs"; //for offcanvas reward icon
import "bootstrap/dist/css/bootstrap.min.css"; //Import Bootstrap CSS
import BodyII from "./Components/BodyII";
import Whole_Movies from "./Components/Whole_Movies"; //Import  whole movies component
import LiveSports from "./Components/LiveSports";
import Simply_Image from "./Components/Simply_Image"; //Import simply image components
import LiveEvents from "./Components/LiveEvents";
import Team from "./Components/Team"; //Import team
import Footer from "./Components/Footer"; // Import footer
import Offers from "./Components/Offers";
import AI from "./Components/AI";
// import NavBar from "./Components/NavBar"; // Import navbar
import bom from "./assets/bom.png";
import blr from "./assets/blr.png";
import hyd from "./assets/hyd.png";
import amd from "./assets/amd.png";
import chandig from "./assets/chandig.jpeg";
import maa from "./assets/maa.png";
import pq from "./assets/pq.png";
import kol from "./assets/kol.png";
import kochi from "./assets/kochi.png";

import LoginButton from "./Components/login";
import LogoutButton from "./Components/logout";
import {gapi} from "gapi-script";

const clientId = "212265629594-jmt62rr9hokov5ucsv7iu5p6dlmft00u.apps.googleusercontent.com";

// "Abu Road","Adipur","Agartala","Agra","Ahmednagar","Ajmer","Alwar","Amravati","Amreli","Anand","Baroda","Bhavnagar","Bharuch","Bikaner","Bhiwandi","Bareilly","Bareja","Bavla",
// "Bhilai","Bhubaneswar","Bhutan","Gurugram","Jaisalmer","Jaipur","Jalandhar","Jammu","Jamnagar","Kanpur","Karjat","Noida","Fatehpur","Farizabad","Ooty",
function ExtendedCityList({ handleCitySelection }) {
  const cities = [
    "Abu Road",
    "Adipur",
    "Agartala",
    "Agra",
    "Ahmednagar",
    "Ajmer",
    "Alwar",
    "Amravati",
    "Amreli",
    "Anand",
    "Baroda",
    "Bhavnagar",
    "Bharuch",
    "Bikaner",
    "Bhiwandi",
    "Bareilly",
    "Bareja",
    "Bavla",
    "Bhilai",
    "Bhubaneswar",
    "Bhutan",
    "Gurugram",
    "Jaisalmer",
    "Jaipur",
    "Jalandhar",
    "Jammu",
    "Jamnagar",
    "Kanpur",
    "Karjat",
    "Noida",
    "Fatehpur",
    "Farizabad",
    "Ooty",
  ];
  return (
    <div className="extended-city-list">
      {cities.map((city) => (
        <div
          className="extended-city-list-op"
          key={city}
          onClick={() => handleCitySelection(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
}

function App() {
  const apiKey = "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";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationWindowOpen, setLocationWindowOpen] = useState(false);
  const [isExtendedCityListOpen, setExtendedCityListOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchValue,setsearchValue]=useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [imageIndex, setImageIndex] = useState(0);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isOrdersOpen, setOrdersOpen] = useState(false);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const {user,loginWithRedirect}=useAuth0(); //google singin

  console.log("Current user",user);
  const togglePanel = () => {
    setPanelOpen(!isPanelOpen);
  };

  const handleNotificationsClick = () => {
    setNotificationOpen(true);
  };

  const handleBackButtonClick = () => {
    setNotificationOpen(false);
  };

  const handleYourOrdersClick = () => {
    setOrdersOpen(true);
  };

  const handleOBackButtonClick = () => {
    setOrdersOpen(false);
  };
  // const handleNextImage = () => {
  //   setImageIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const handlePrevImage = () => {
  //   setImageIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };
  useEffect(() => {
    // Initialize Typed instance when component mounts
    const options = {
      strings: [
        "Welcome to BookMyEvents",
        "How may I Help You!",
        "Search for Movies, Events, Plays, Sports and Activities...",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(".text", options);

    // Image change logic
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === 8 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      typed.destroy();
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() =>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLocationWindow = () => {
    setLocationWindowOpen(!isLocationWindowOpen);
  };

  const toggleExtendedCityList = () => {
    setExtendedCityListOpen(!isExtendedCityListOpen);
  };

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation(
            `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
          );
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleCitySelection = (city) => {
    setSelectedLocation(city);
    setsearchValue(city);
    // toggleLocationWindow();
  };

  const [userData,setUserData]=useState(null);
  
  const handleLoginClick = () =>{
    const sampleUserData = {
      email: "ravalvyom17@gmail.com",
      familyName: "Raval",
      givenName: "Vyom",
      googleId: "111154031364698337834",
      imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocI9KVn2H86gqHZblVvETHkyxIOcYKj8ab1LhYt4cbq0fK3vWcal=s96-c",
      name: "Vyom Raval"
    };
    setUserData(sampleUserData);
  };

  const [showUserData, setShowUserData] = useState(true);
  const handleLogoutClick =() =>{
    setShowUserData(false);
  }
  return (
    <>
      <div className="nav">
        <nav>
          <div className="left">
            <img
              src={Logo}
              alt=""
              onClick={() => {
                window.location = "/";
              }}
            />
          </div>
          <div className="center">
            <div className="input-group rounded centerinp">
              <span className="search-icon">
                <LuSearchCode size={40} />
              </span>
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search for Movies, Events, Plays, Sports and Activities..."
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </div>
          <div className="right">
            <div className="first">
              <div className="dropdown">
                <button
                  className="btn btn-secondary"
                  id="btndrop"
                  type="button"
                  onClick={toggleLocationWindow}
                  style={{
                    width: "140px",
                    fontFamily:"bold",
                    fontSize:"18px",
                  }}
                >
                  <FaLocationCrosshairs size={19} />
                  <strong> Location </strong>
                  <IoIosArrowDropdown size={16} />
                </button>
                {isLocationWindowOpen && (
                  <div
                    className={`location-window ${
                      isExtendedCityListOpen ? "extended" : ""
                    }`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for your city"
                      value={searchValue}
                      onChange={(e)=>setSearchValue(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={handleDetectLocation}
                    >
                      <span id="detectbtn-1" className="detect-location-btn">
                        <TbLocationFilled size={20} />
                        <span>Detect My Location !</span>
                      </span>
                    </button>

                    <div className="popular-cities">
                      <strong id="popular-cities-head">Popular Cities</strong>
                      <br />
                      <img
                        src={bom}
                        alt=""
                        width="60px"
                        height="60px"
                        id="bom "
                        className="monupic"
                      />
                      <GiIndiaGate
                        size={60}
                        id="giindiagate"
                        className="monupic"
                      />
                      <img
                        src={blr}
                        alt=""
                        width="60px"
                        height="60px"
                        id="blr"
                        className="monupic"
                      />
                      <img
                        src={hyd}
                        alt=""
                        width="60px"
                        height="60px"
                        id="hyd"
                        className="monupic"
                      />
                      <img
                        src={amd}
                        alt=""
                        width="60px"
                        height="60px"
                        id="amd"
                        className="monupic"
                      />
                      <img
                        src={chandig}
                        alt=""
                        width="75px"
                        height="75px"
                        id="chandig"
                        className="monupic"
                      />
                      <img
                        src={maa}
                        alt=""
                        width="60px"
                        height="60px"
                        id="maa"
                        className="monupic"
                      />
                      <img
                        src={pq}
                        alt=""
                        width="75px"
                        height="75px"
                        id="pq"
                        className="monupic"
                      />
                      <img
                        src={kol}
                        alt=""
                        width="65px"
                        height="65px"
                        id="kol"
                        className="monupic"
                      />
                      <img
                        src={kochi}
                        alt=""
                        width="50px"
                        height="50px"
                        id="kochi"
                        className="monupic"
                      />

                      <div className="city-list">
                        {[
                          "Mumbai",
                          "Delhi-NCR",
                          "Bengaluru",
                          "Hyderabad",
                          "Ahmedabad",
                          "Chandigarh",
                          "Chennai",
                          "Pune",
                          "Kolkat",
                          "Kochi",
                        ].map((city) => (
                          <div
                            key={city}
                            className={`city ${
                              selectedLocation === city ? "selected" : ""
                            }`}
                            onClick={() => handleCitySelection(city)}
                          >
                            {selectedLocation === "Delhi-NCR" &&
                              city === "Delhi-NCR" && <GiIndiaGate size={20} />}
                            {city}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={toggleExtendedCityList}
                    >
                      <span id="viewmore">View More Cities</span>
                    </button>

                    {isExtendedCityListOpen && (
                      <ExtendedCityList
                        handleCitySelection={handleCitySelection}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="second" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: "20px",
              backgroundColor: "#f0f0f0",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width:"200px",
              height:"70px",
              marginTop:"25px",
              transition: "box-shadow 0.3s, transform 0.3s",
              cursor: "pointer",
            }}>
            {/* <Link to={"/login"}> */}
                  {/* <button
                    type="button"
                    id="btnsignin"
                    className="btn btn-outline-primary"
                    style={{
                      width: "130px",
                      fontFamily:"bold",
                      fontSize:"23px",
                      backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)"
                    }}
                    onClick={async ()=> await loginWithRedirect()}
                    >
                    Sign in
                  </button> */}
                  <button onClick={handleLoginClick} style={{
                    color: "white",
                    width: "150px",
                    height: "130px",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}><LoginButton/></button>
                  {/* <LogoutButton /> */}
            {/* </Link> */}
            </div>
            <div className="third">
              <VscThreeBars size={40} id="btn3bars" onClick={toggleMenu} />
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`offcanvas offcanvas-start ${isMenuOpen ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasExample"
        style={{
          marginTop: "90px",
        }}
      >
        <div className="offcanvas-header">
        <h5 className="offcanvas-title">
            <strong>Hey There! {showUserData  && userData ? userData.name : ''}</strong>
        </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleMenu}
          ></button>
        </div>
        <div
          className="offcanvas-body"
          style={{
            marginTop: "-10px",
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <hr className="off-separate-line" />
          <div className="off-first off-content">
            <div className="off-first-left">
              <TfiGift size={40} />
            </div>
            <div className="off-first-center">
              Unlock special offers & great benefits.
            </div>
            <div className="off-first-right">
              <Link to={"/reglogform"}>
                <button
                  type="button"
                  id="btnlogsign"
                  className="btn btn-outline-primary"
                >
                  Login / Register
                </button>
              </Link>
            </div>
          </div>
          <div
            className="off-second off-content"
            onClick={handleNotificationsClick}
          >
            <div className="off-second-left">
              <MdOutlineNotificationAdd size={40} />
            </div>
            <div className="off-second-right">Notifications</div>
            <Link><div className="off-second-right1">
              <FaArrowsTurnRight size={25} />
            </div>
            </Link>
          </div>
          <div
            className="off-third off-content"
            onClick={handleYourOrdersClick}
          >
            <div className="off-third-left">
              <TiShoppingCart size={40} />
            </div>
            <div className="off-third-right">Your Orders</div>
            <div className="off-third-right1">
              <FaArrowsTurnRight size={25} />
            </div>
          </div>
          <Link
            to={"/askai"}
            onClick={() => {
              console.log("Help & Support Clicked!");
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <div className="off-fiveth off-content">
              <div className="off-fiveth-left">
                <FcCustomerSupport size={40} />
              </div>
              <div className="off-fiveth-right">Help & Support</div>
              <div className="off-fiveth-right1">
                <FaArrowsTurnRight size={25} />
              </div>
            </div>
          </Link>
          <div className="off-sixth off-content" onClick={togglePanel}>
            <div className="off-sixth-left">
              <MdOutlineSettings size={40} />
            </div>
            <div className="off-sixth-right">Account & Settings</div>
            <div className="off-sixth-right1">
              <FaArrowsTurnRight size={25} />
            </div>
          </div>
          {isPanelOpen && (
          <div className="sliding-panel" style={{
            marginLeft:"10px",
            lineHeight:"1.2px",
            backgroundColor:"azure",
            borderRadius:"16px",
            border:"2px solid beige",
            boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          }}>
            <div className="panel-content">
              <h5>Saved Payment Modes
              <FaArrowsTurnRight size={20} style={{
                float:"right",
                marginRight:"22px",
                marginTop:"5px",
                color:"red"
              }}/></h5>
            </div>
            <div className="panel-content">
            <h5>Saved Devices
              <FaArrowsTurnRight size={20} style={{
                float:"right",
                marginRight:"22px",
                marginTop:"5px",
                color:"red"
              }}/></h5>
            </div>
          </div>
        )}
          <Link
            to={"/offers"}
            onClick={() => {
              console.log("Rewards Clicked!");
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <div className="off-seventh off-content">
              <div className="off-seventh-left">
                <BsFillGiftFill size={40} />
              </div>
              <div className="off-seventh-right">Rewards</div>
              <div className="off-seventh-right1">
                <FaArrowsTurnRight size={25} />
              </div>
            </div>
          </Link>
          {/* <button className="off-signout">
            <strong>Sign out</strong>
          </button> */}
          <div style={{
            height:"70px",
            marginTop:"2px",
            textAlign:"center"
          }} onClick={handleLogoutClick}><LogoutButton /></div>
        </div>
      </div>
      {/* Notifications content  */}
      <div
        className={`offcanvas offcanvas-start ${
          isNotificationOpen ? "show" : ""
        }`}
        tabIndex="-1"
        id="notificationOffcanvas"
      >
        <div
          className="offcanvas-body"
          style={{
            marginTop: "100px",
          }}
        >
          <h3>No messages for you!</h3>
          <button
            className="btn btn-primary"
            onClick={handleBackButtonClick}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              width: "100%",
            }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
      {/* Yours Order content  */}
      <div
        className={`offcanvas offcanvas-start ${isOrdersOpen ? "show" : ""}`}
        tabIndex="-1"
        id="ordersOffcanvas"
      >
        <div
          className="offcanvas-body"
          style={{
            marginTop: "100px",
          }}
        >
          <h4
            style={{
              fontFamily: "cursive",
            }}
          >
            You don't seem to have any bookings.
          </h4>
          <button
            className="btn btn-primary"
            onClick={handleOBackButtonClick}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              width: "100%",
            }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
      <div className="body-content-I">
        <div className="body-content-I-left">
          <Link
            to="/"
            onClick={() => {
              console.log(`Home Clicked`);
            }}
          >
            Home
          </Link>
          <Link
            to="/movies"
            onClick={() => {
              console.log(`Movie Clicked`);
            }}
          >
            Movies
          </Link>
          <Link
            to="/events"
            onClick={() => {
              console.log(`Events Clicked`);
            }}
          >
            Events
          </Link>
          <Link
            to="/sports"
            onClick={() => {
              console.log(`Sports Clicked`);
            }}
          >
            Sports
          </Link>
        </div>
        <div className="body-content-I-right">
          <Link to="/offers">Offers</Link>
          <Link
            to="/askai"
            onClick={() => {
              console.log(`Ask Ai clicked`);
            }}
          >
            Ask AI
          </Link>
          <Link
            to="/team"
            onClick={() => {
              console.log(`Team Clicked`);
            }}
          >
            About
          </Link>
        </div>
      </div>
      <Outlet />
      {/* <BodyII imageIndex={imageIndex}></BodyII>
      <Whole_Movies></Whole_Movies>
      <LiveSports></LiveSports>
      <Simply_Image></Simply_Image>
      <LiveEvents></LiveEvents> */}
      {/* <Offers></Offers> */}
      {/* <AI></AI> */}
      {/* <Team></Team> */}
      <section className="mb-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.146122092979!2d72.54249587351167!3d23.128333612376604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832f45125167%3A0x876cb1cb23c25bdb!2sNirma%20University!5e0!3m2!1sen!2sin!4v1713004295447!5m2!1sen!2sin" 
      width="100%" 
      height="450"
      allowFullScreen
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
