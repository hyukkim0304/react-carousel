import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Easel from "./Easel";
import Arrow, { DIRECTION } from "./Arrow";
import Indicator from "./Indicator";
import Modal from "components/modal/Modal";

import styles from "./index.module.scss";

const mockData = require("slider-data.json");

export default function Carousel() {
  const [curIdx, setCurIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => incrementIdx(),
    onSwipedRight: () => decrementIdx(),
  });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={styles.carouselContainer}>
      <Arrow direction={DIRECTION.PREV} onClickHandler={decrementIdx} />
      <div {...swipeHandlers} className={styles.carouselWrapper}>
        <div
          className={styles.easelContainer}
          style={{ transform: `translateX(-${curIdx * 100}%)` }}
        >
          {mockData.map((data) => {
            return (
              <Easel
                data={data}
                key={data.alt}
                onClickHandler={() => {
                  toggleModal();
                }}
              />
            );
          })}
        </div>
      </div>
      <Arrow direction={DIRECTION.NEXT} onClickHandler={incrementIdx} />
      <Indicator data={mockData} curIdx={curIdx} onClickHandler={setIdx} />
      <Modal
        show={showModal}
        children={<Easel data={mockData[curIdx]} />}
        onClickHandler={toggleModal}
      />
    </div>
  );
}
