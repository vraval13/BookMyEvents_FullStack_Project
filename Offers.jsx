import { useState } from 'react';
import styles from "./Offers.module.css";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaCcMastercard } from "react-icons/fa6";
import { SiBookmyshow } from "react-icons/si";
import { GiWallet } from "react-icons/gi";
import { FaGooglePay } from "react-icons/fa";
import offer1 from "../assets/offer1.jpg";
import offer2 from "../assets/offer2.jpg";
import offer3 from "../assets/offer3.jpg";
import offer4 from "../assets/offer4.jpg";


function Offers() {
  // State to track whether the content should be displayed or not for each card
  const [showContent, setShowContent] = useState(false);

  // Function to toggle the state when the "Know more" button is clicked
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className={styles.container} style={{
      marginTop:"-95px"
    }}>
      <div className={styles.head}>
        <center>
          <h2>FILTER OFFERS BY</h2>
          <div className={styles.headcards}>
            <div className={styles.iconWrapper}>
              <BsCreditCard2Front size={40} />
              <span>Credit Card</span>
            </div>
            <div className={styles.iconWrapper}>
              <FaCcMastercard size={40} />
              <span>Debit Card</span>
            </div>
            <div className={styles.iconWrapper}>
              <SiBookmyshow size={40} />
              <span>BookMyEvent</span>
            </div>
            <div className={styles.iconWrapper}>
              <GiWallet size={40} />
              <span>Paytm Wallet</span>
            </div>
            <div className={styles.iconWrapper}>
              <FaGooglePay size={40} />
              <span>GooglePay</span>
            </div>
          </div>
        </center>
      </div>
      <div className={styles.offers} style={{
        marginTop:"0px"
      }}>
        {/* Card-I */}
        <div className={styles.card} style={{
          width:"340px",
          marginLeft:"2px"
        }}>
          <img className={styles.cardImgTop} src={offer1} alt="Card image cap" style={{width: "300px", height: "300px"}}/>
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>SBI ELITE CREDIT CARD OFFER</h5>
            <div className={styles.cardTextWrapper} style={{ display: showContent ? "flex" : "none" }}>
              <p className={styles.cardText}>
                Get 2 free movie tickets or INR 500 less <br />
                <span>Valid till :31 Mar 2026 23:59</span>
              </p>
            </div>
            <button className={styles.btn + " btn btn-primary"} onClick={toggleContent}>
              {showContent ? "Hide details" : "Know more"}
            </button>
          </div>
        </div>
        {/* Card-II */}
        <div className={styles.card} style={{
          width:"340px",
          marginLeft:"2px"
        }}>
          <img className={styles.cardImgTop} src={offer2} alt="Card image cap" style={{width: "300px", height: "300px"}}/>
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>YES BANK MARQUEE CREDIT CARD OFFER</h5>
            <div className={styles.cardTextWrapper} style={{ display: showContent ? "flex" : "none" }}>
            <p className={styles.cardText}>
              Buy 1 Get 1 free movie ticket and with MARQUEE Credit Card<br />
              <span>Valid till :31 Dec 2025 23:59</span>
            </p></div>
            <button className={styles.btn + " btn btn-primary"} onClick={toggleContent}>
              {showContent ? "Hide details" : "Know more"}
            </button>
          </div>
        </div>
        {/* Card-III */}
        <div className={styles.card} style={{
          width:"340px",
          marginLeft:"2px"
        }}>
          <img className={styles.cardImgTop} src={offer3} alt="Card image cap" style={{width: "300px", height: "300px"}}/>
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>IDFC FIRST BANK CREDIT CARD OFFER</h5>
            <div className={styles.cardTextWrapper} style={{ display: showContent ? "flex" : "none" }}>
            <p className={styles.cardText}>
              Get 750 INR on movie ticket and FnB and/or Non-movie twice a month <br />
              <span>Valid till :31 Mar 2024 23:59</span>
            </p>
            </div>
            <button className={styles.btn + " btn btn-primary"} onClick={toggleContent}>
              {showContent ? "Hide details" : "Know more"}
            </button>
          </div>
        </div>
        {/* Card-IV */}
        <div className={styles.card} style={{
          width:"340px",
          marginLeft:"2px"
        }}>
          <img className={styles.cardImgTop} src={offer4} alt="Card image cap" style={{width: "300px", height: "300px"}}/>
          <div className={styles.cardBody}>
            <h5 className={styles.cardTitle}>VISA INFINITE CREDIT ARD OFFER</h5>
            <div className={styles.cardTextWrapper} style={{ display: showContent ? "flex" : "none" }}>
            <p className={styles.cardText}>
              Get Discounts on movies, F&B and non-movies <br />
              <span>Valid till :31 Dec 2024 23:59</span>
            </p>
            </div>
            <button className={styles.btn + " btn btn-primary"} onClick={toggleContent}>
              {showContent ? "Hide details" : "Know more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
