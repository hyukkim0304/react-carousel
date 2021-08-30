import styles from "./Indicator.module.scss";

export default function Indicator({ data, curIdx, onClickHandler }) {
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
