import styles from "./Modal.module.scss";

export default function Modal({ show, children, onClickHandler }) {
  if (!show) {
    return null;
  }

  return (
    // I believe clicking outside of the modal to close it pretty norm, but a X button would be nice too.
    <div className={styles.modalWrapper} onClick={onClickHandler}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
