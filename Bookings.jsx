import styles from "./Bookings.module.css";
import  { useState } from "react";
import React from "react";
import movie1cov from "../assets/movie1cov.png";
import movie2cov from "../assets/movie2cov.png";
import movie3cov from "../assets/movie3cov.png";
import movie4cov from "../assets/movie4cov.png";
import movie5cov from "../assets/movie5cov.png";
import movie6cov from "../assets/movie6cov.png";
import movie7cov from "../assets/movie7cov.png";
import movie8cov from "../assets/movie8cov.png";

function AvailableSeats({ totalSeats }) {
  return (
    <>
      <div className={styles.boxavailseats}>
        <p className={styles["total-seats"]}>
          Total Available Seats: {totalSeats}
        </p>
      </div>
    </>
  );
}

function Bookings() {
  const [selectedData, setSelectedData] = useState({
    selectedMovie: null,
    selectedSeats: [],
    totalAvailableSeats: 0,
    selectedDate: null,
    selectedTime: null,
  });

  const movies = [
    { id: 1, title: "Yodha", availableSeats: 100, coverImage: movie1cov },
    { id: 2, title: "Shaitaan", availableSeats: 80, coverImage: movie2cov },
    {
      id: 3,
      title: "Article  370",
      availableSeats: 120,
      coverImage: movie3cov,
    },
    {
      id: 4,
      title: "Teri Baaton Mein Aisa Uljha Jiya",
      availableSeats: 80,
      coverImage: movie4cov,
    },
    { id: 5, title: "Kasoombo", availableSeats: 120, coverImage: movie5cov },
    {
      id: 6,
      title: "Dune: Part Two",
      availableSeats: 80,
      coverImage: movie6cov,
    },
    {
      id: 7,
      title: "Vanilla Ice Cream",
      availableSeats: 120,
      coverImage: movie7cov,
    },
    { id: 8, title: "Fighter", availableSeats: 80, coverImage: movie8cov },
  ];

  const handleMovieSelect = (movie) => {
    setSelectedData({
      ...selectedData,
      selectedMovie: movie,
      totalAvailableSeats: movie.availableSeats,
      selectedSeats: [],
    });
  };

  const handleSeatSelect = (seat) => {
    setSelectedData({
      ...selectedData,
      selectedSeats: [...selectedData.selectedSeats, seat],
      totalAvailableSeats: selectedData.totalAvailableSeats - 1,
    });
  };

  const saveDetails = async () => 
  {
    const { selectedMovie, selectedTime, selectedSeats, selectedDate } = selectedData;
    const details = {
      movieName: selectedMovie ? selectedMovie.title : "",
      time: selectedTime,
      seat: JSON.stringify(selectedSeats),
      date: selectedDate
    };
    console.log("Details:", details);
    try
    {
      const response= await fetch(`http://localhost:5000/api/auth/bookings`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json",
        },
        body:JSON.stringify(details),
      });
      console.log(response);
    }
    catch(error)
    {
      console.log("register",error);
    }
  };

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: selectedData.selectedMovie
            ? `url(${selectedData.selectedMovie.coverImage})`
            : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <h2>Hello & Welcome at BookMyEvents!</h2>
        <div className={styles.selectmovie}>
          <h3>Select a movie:</h3>
          <ul style={{ cursor: "pointer" }}>
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
                {movie.title} ({movie.availableSeats} seats available)
              </li>
            ))}
          </ul>
        </div>
        {selectedData.selectedMovie && (
          <div className="selected-movie-container" style={{
            position:"relative",
            zIndex:"1"
          }}>
            <h3
              style={{
                width: "380px",
                height: "90px",
                border: "1px solid black",
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                padding: "3px",
                marginTop: "120px",
                background: "rgb(34,193,195)",
                background:
                  "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
              }}
            >
              Selected Movie: {selectedData.selectedMovie.title}
            </h3>
            <AvailableSeats totalSeats={selectedData.totalAvailableSeats} />
            <div className={styles["date-time-selection"]}>
              <h4>Select Date and Time:</h4>
              <input
                type="date"
                onChange={(e) =>
                  setSelectedData({ ...selectedData, selectedDate: e.target.value })
                }
              />
              <input
                type="time"
                onChange={(e) =>
                  setSelectedData({ ...selectedData, selectedTime: e.target.value })
                }
              />
            </div>
            <div className={styles["seat-selection"]}>
              <h4>Select your seats:</h4>
              <div
                style={{
                  border: "1px solid black",
                  padding: "20px",
                  gap: "50px",
                  boxShadow:
                    "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                  background: "rgb(238,174,202)",
                  background:
                    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
                  borderRadius: "20px",
                }}
              >
                {Array.from(
                  { length: selectedData.totalAvailableSeats },
                  (_, index) => (
                    <button
                      key={index}
                      disabled={selectedData.selectedSeats.includes(index)}
                      onClick={() => handleSeatSelect(index)}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </div>
            <div>
              <h4>Selected Seats:</h4>
              <div className={styles.selectSeat}>
                {selectedData.selectedSeats.map((seat) => (
                  <span key={seat}>Seat {seat + 1}, </span>
                ))}
              </div>
            </div>
            <button
              onClick={() =>
                setSelectedData({ ...selectedData, selectedSeats: [] })
              }
              style={{
                float: "left",
                marginTop:"10px"
              }}
            >
              Reset
            </button>
            <button
              onClick={saveDetails}
              style={{
                float: "right",
                marginTop:"10px"
              }}
            >
              Save Details
            </button>{" "}
            {/* Save Details Button */}
          </div>
        )}
      </div>
      <section className="mb-3">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117439.64101906223!2d72.38718054335936!3d23.097506500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84afc295bd6f%3A0x2848206a40d179bb!2sPVR%20Acropolis%20Ahemdabad!5e0!3m2!1sen!2sin!4v1713004794781!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
}

export default Bookings;
