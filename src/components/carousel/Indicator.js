import styles from "./Indicator.module.scss";

export default function Indicator({ data, curIdx, onClickHandler }) {
  //with more time, I'd love to make this smarter. This compoenent will fail if there are too many images.

  return (
    <div className={styles.indicatorWrapper}>
      {data.map((imageData, idx) => {
        const { alt } = imageData;

        return (
          <button
            className={`${styles.indicator} ${
              idx === curIdx && styles.selected
            }`}
            key={alt}
            onClick={() => {
              onClickHandler(idx);
            }}
          ></button>
        );
      })}
    </div>
  );
}
