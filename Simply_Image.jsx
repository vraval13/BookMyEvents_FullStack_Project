import confuse2 from "../assets/confuse2.jpg";
import styles from "./Simply_Image.module.css";
function Simply_Image() {
  return (
    <>
      <div className={styles.simpleimg}>
        <div className={styles.simpleimgleft}>
          <img src={confuse2} alt="" height={500} width={640} />
        </div>
        <div className={styles.simpleimgright}>
          <h2 className={styles.heading}>
            Still Confused About What to Choose?
          </h2>
          <p className={styles.descr}>
            Are you finding it challenging to decide among the wide array of
            entertainment options available? We understand! With so many
            exciting events, plays, movies, and more to choose from, it can be
            overwhelming.
            <br />
            <br />
            But fret not! Take your time to explore our diverse selection of
            entertainment offerings.
            <br />
            <br />
            Take a deep breath, relax, and let the anticipation of a fantastic
            time ahead guide you. Your next unforgettable entertainment
            experience awaits!
          </p>
          <a href="#" className={styles.btn}>
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              viewBox="0 0 448 512"
              width="1em"
              height="1em"
            >
              <path
                fill="currentColor"
                d="M291.823 244.485L160.485 113.137c-9.373-9.373-24.569-9.373-33.941 0L113.137 126.4c-9.357 9.373-9.357 24.522 0 33.895l108.484 108.48L113.137 377.6c-9.373 9.373-9.373 24.569 0 33.941l13.371 13.371c9.373 9.373 24.569 9.373 33.941 0l131.338-131.348c9.357-9.373 9.357-24.522 0-33.895z"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* <div className={styles.hello}>
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
      </div> */}
    </>
  );
}

export default Simply_Image;
