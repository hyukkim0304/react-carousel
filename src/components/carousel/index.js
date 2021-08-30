import { useState } from "react";
import Easel from "./Easel";
import Arrow, { DIRECTION } from "./Arrow";
import Indicator from "./Indicator";

import styles from "./index.module.scss";

const mockData = require("slider-data.json");

export default function Carousel() {
  const [curIdx, setCurIdx] = useState(0);

  const curImageData = {
    ...mockData[curIdx],
    image: `/slider-assets/${mockData[curIdx].image}`,
  };

  const totalImageCt = mockData.length;

  const incrementIdx = () => {
    if (curIdx >= totalImageCt - 1) {
      setCurIdx(0);
    } else {
      setCurIdx(curIdx + 1);
    }
  };

  const decrementIdx = () => {
    if (curIdx <= 0) {
      setCurIdx(totalImageCt - 1);
    } else {
      setCurIdx(curIdx - 1);
    }
  };

  const setIdx = (idx) => {
    setCurIdx(idx);
  };

  return (
    <div className={styles.carouselWrapper}>
      <p className={styles.overheadText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur
        facilisis posuere. Curabitur eu nisl quis purus porttitor ultrices eu eu
        sem. In at ex sit amet libero euismod imperdiet. Proin porttitor aliquam
        congue.
      </p>
      <Arrow direction={DIRECTION.PREV} onClickHandler={decrementIdx} />
      <div className={styles.easelWrapper}>
        <Easel data={curImageData} />
      </div>
      <Arrow direction={DIRECTION.NEXT} onClickHandler={incrementIdx} />
      <Indicator data={mockData} curIdx={curIdx} onClickHandler={setIdx} />
    </div>
  );
}
