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
      <Arrow direction={DIRECTION.PREV} onClickHandler={decrementIdx} />
      <Easel data={curImageData} />
      <Arrow direction={DIRECTION.NEXT} onClickHandler={incrementIdx} />
      <Indicator data={mockData} curIdx={curIdx} onClickHandler={setIdx} />
    </div>
  );
}
