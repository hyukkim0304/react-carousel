import styles from "./Easel.module.scss";

export default function Easel({
  data: { id, image, alt },
  // default value is for wether to add or remove pointer cursor on image
  onClickHandler = null,
}) {
  const imageURL = `/slider-assets/${image}`;

  return (
    <div
      className={`${styles.easelWrapper} ${onClickHandler && styles.clickable}`}
      onClick={onClickHandler}
    >
      <img className={styles.image} src={imageURL} alt={alt} key={id}></img>
    </div>
  );
}
