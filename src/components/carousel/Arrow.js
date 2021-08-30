import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import styles from "./Arrow.module.scss";

export const DIRECTION = {
  NEXT: "NEXT",
  PREV: "PREV",
};

export default function Arrow({ direction, onClickHandler }) {
  const Icon =
    direction === DIRECTION.NEXT ? NavigateNextIcon : NavigateBeforeIcon;

  const arrowStyle = "circle";

  return (
    <button
      className={`${styles.arrow} ${styles[arrowStyle]}`}
      onClick={onClickHandler}
    >
      <Icon fontSize="large" />
    </button>
  );
}
