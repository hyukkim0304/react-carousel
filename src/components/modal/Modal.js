import styles from "./Modal.module.scss";

export default function Modal({ show, children, onClickHandler }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalWrapper} onClick={onClickHandler}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
