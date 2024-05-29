import styles from "./Movie_Catalog.module.css";
function Movie_Catalog(props)
{
  return(
    <>
      <div className={styles.container}>
        {props.children}
      </div>
    </>
  )
}
export default Movie_Catalog;