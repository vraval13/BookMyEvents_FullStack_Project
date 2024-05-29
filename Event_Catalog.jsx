import styles from "./Event_Catalog.module.css";
function Event_Catalog(props) {
  return (
    <>
      <div className={styles.container}>{props.children}</div>
    </>
  );
}
export default Event_Catalog;
