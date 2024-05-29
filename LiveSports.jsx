import styles from "./Simply_Image.module.css";
import Event_Catalog from "./Event_Catalog";
import sport1 from "../assets/sport1.jpg";
import sport2 from "../assets/sport2.jpg";
import sport3 from "../assets/sport3.jpg";
import sport4 from "../assets/sport4.jpg";
function LiveSports()
{
  return(
    <>
    <div className={styles.hello}>
        <h2 className={styles.hellohead}>Top Games & Sport Events</h2>
        <div className={styles.hellowholecontain}>
          <Event_Catalog className={styles.workshops} id="work1">
            <img src={sport1} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>ICC T20</h3>
              <h3 className={styles.helloevents}>WORLD CUP 2024</h3>
              {/* <p className={styles.helloeventsdescr}>30+ Events</p> */}
            </div>
          </Event_Catalog>

          <Event_Catalog className={styles.comedy} id="work2">
            <img src={sport2} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>TATA</h3>
              <h3 className={styles.helloevents}>WPL 2024</h3>
              {/* <p className={styles.helloeventsdescr}>40+ Events</p> */}
            </div>
          </Event_Catalog>

          <Event_Catalog className={styles.music} id="work3">
            <img src={sport3} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>TATA</h3>
              <h3 className={styles.helloevents}>IPL 2024</h3>
              {/* <p className={styles.helloeventsdescr}>10 Events</p> */}
            </div>
          </Event_Catalog>

          <Event_Catalog className={styles.kids} id="work4">
            <img src={sport4} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>HERO</h3>
              <h3 className={styles.helloevents}>ISL 2024</h3>
              {/* <p className={styles.helloeventsdescr}>3 Events</p> */}
            </div>
          </Event_Catalog>
        </div>
      </div>
    </>
  )
}
export default LiveSports;