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
  // I think i can move this to very top level and have a single modal globally. Unless I need modal within a modal
  const [showModal, setShowModal] = useState(false);

  const totalImageCt = mockData.length;

  // simple index increment method. Make it to move to the first if it reaches the end.
  const incrementIdx = () => {
    if (curIdx >= totalImageCt - 1) {
      setCurIdx(0);
    } else {
      setCurIdx(curIdx + 1);
    }
  };

  // same as above but to the start instead of the end.
  const decrementIdx = () => {
    if (curIdx <= 0) {
      setCurIdx(totalImageCt - 1);
    } else {
      setCurIdx(curIdx - 1);
    }
  };

  // hard set index for indicator clicks. I think I can combine all three index manipulate functions into one with multiple args. I prefer shorter precise code though
  const setIdx = (idx) => {
    setCurIdx(idx);
  };

  // help of a library. I researched a bit about making this from scratch. Overwhelmed
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
          // I would love to hear some opinions on this. Simply there were too many options I can't specify all in css file. I decided to go with inline style.
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
        // passing children to make it more dynamic
        children={<Easel data={mockData[curIdx]} />}
        onClickHandler={toggleModal}
      />
    </div>
  );
}
