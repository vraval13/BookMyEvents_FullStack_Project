import styles from "./Whole_Movies.module.css";
import Movie_Catalog from "./Movie_Catalog";
import movie1 from "../assets/movie1.png";
import movie2 from "../assets/movie2.png";
import movie3 from "../assets/movie3.png";
import movie4 from "../assets/movie4.png";
import movie5 from "../assets/movie5.png";
import movie6 from "../assets/movie6.png";
import movie7 from "../assets/movie7.png";
import movie8 from "../assets/movie8.png";
import { Link } from "react-router-dom";

function Whole_Movies()
{
  return(
    <>
    <div className={styles.body_content_III}>
        <h3 className={styles.heading}>Recommended Movies</h3>

        <div className={styles.movieCatalogContainer}>
        {/* Movie-1 Starts */}
        <Movie_Catalog>
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie1} alt="" width="283.8px" height="319px" />
          <p className={styles.mname}>Yodha</p>
          <p className={styles.descr}>Action/Thriller</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-1 Ends */}
        
        {/* Movie-2 Starts*/}
        <Movie_Catalog>
          {/* <h1>Movie-2</h1> */}
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie2} alt="" width="283.8px" height="319px"/>
          <p className={styles.mname}>Shaitaan</p>
          <p className={styles.descr}>Supernatural/Thriller</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-2 Ends */}

        {/* Movie-3 Starts */}
        <Movie_Catalog>
          {/* <h1>Movie-3</h1> */}
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie3} alt="" width="283.8px" height="319px"/>
          <p className={styles.mname}>Article  370</p>
          <p className={styles.descr}>Drama/Political</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-3 Ends */}

        {/* Movie-4 Starts */}
        <Movie_Catalog>
          {/* <h1>Movie-4</h1> */}
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie4} alt="" width="283.8px" height="319px"/>
          <p className={styles.mname}>Teri Baaton Mein Aisa Uljha Jiya</p>
          <p className={styles.descr}>Comedy/Family</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-4 Ends */}
        
        {/* Movie-5 Starts */}
        <Movie_Catalog>
          {/* <h1>Movie-5</h1> */}
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie5} alt="" width="283.8px" height="319px"/>
          <p className={styles.mname}>Kasoombo</p>
          <p className={styles.descr}>Action/Drama</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-5 Ends */}
        
        {/* Movie-6 Starts*/}
        <Movie_Catalog>
          {/* <h1>Movie-6</h1> */}
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie6} alt="" width="283.8px" height="319px"/>
          <p className={styles.mname}>Dune: Part Two</p>
          <p className={styles.descr}>Action/Adventure</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-6 Ends */}

        {/* Movie-7 Starts */}
        <Movie_Catalog>
          {/* <h1>Movie-7</h1> */}
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie7} alt="" width="283.8px" height="319px"/>
          <p className={styles.mname}>Vanilla Ice Cream</p>
          <p className={styles.descr}>Drama/Family</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-7 Ends */}

        {/* Movie-8 Starts */}
        <Movie_Catalog>
          {/* <h1>Movie-8</h1> */}
          <Link to="/bookings" onClick={()=>{
            console.log(`Movie Bookings Clicked!`);
          }} style={{
            textDecoration: 'none',
            color:"white"
          }}>
          <img src={movie8} alt="" width="283.8px" height="319px"/>
          <p className={styles.mname}>Fighter</p>
          <p className={styles.descr}>Action/Thriller</p>
          </Link>
        </Movie_Catalog>
        {/* Movie-8 Ends */}
        </div>
      </div>
    </>
  )
}
export default  Whole_Movies;