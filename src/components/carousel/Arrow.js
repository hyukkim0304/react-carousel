import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import styles from "./Arrow.module.scss";

export const DIRECTION = {
  NEXT: "next",
  PREV: "prev",
};

export default function Arrow({ direction, onClickHandler }) {
  const Icon =
    direction === DIRECTION.NEXT ? NavigateNextIcon : NavigateBeforeIcon;

  return (
    <button
      className={`${styles.arrow} ${styles[direction]}`}
      onClick={onClickHandler}
    >
      <Icon fontSize="large" />
    </button>
  );
}
