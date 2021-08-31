import styles from "./Easel.module.scss";

export default function Easel({ data }) {
  const { id, image, alt } = data;

  return (
    <div className={styles.easelWrapper}>
      <img className={styles.image} src={image} alt={alt} key={id}></img>
    </div>
  );
}
