import styles from "./Simply_Image.module.css";
import Event_Catalog from "./Event_Catalog";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";

function LiveEvents()
{
  return(
    <>
    <div className={styles.hello}>
        <h2 className={styles.hellohead}>The Best of Live Events</h2>
        <div className={styles.hellowholecontain}>
          <Event_Catalog className={styles.workshops} id="work1">
            <img src={work1} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>WORKSHOPS</h3>
              <h3 className={styles.helloevents}>& MORE</h3>
              <p className={styles.helloeventsdescr}>30+ Events</p>
            </div>
          </Event_Catalog>

          <Event_Catalog className={styles.comedy} id="work2">
            <img src={work2} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>COMEDY</h3>
              <h3 className={styles.helloevents}>SHOWS</h3>
              <p className={styles.helloeventsdescr}>40+ Events</p>
            </div>
          </Event_Catalog>

          <Event_Catalog className={styles.music} id="work3">
            <img src={work3} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>MUSIC</h3>
              <h3 className={styles.helloevents}>SHOWS</h3>
              <p className={styles.helloeventsdescr}>10 Events</p>
            </div>
          </Event_Catalog>

          <Event_Catalog className={styles.kids} id="work4">
            <img src={work4} alt="" height={250} width={265} />
            <div className={styles.overlay}>
              <h3 className={styles.helloevents}>KIDS</h3>
              <h3 className={styles.helloevents}>ZONE</h3>
              <p className={styles.helloeventsdescr}>3 Events</p>
            </div>
          </Event_Catalog>
        </div>
      </div>
    </>
  )
}
export default LiveEvents;