import Carousel from "./components/carousel";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      {/* must be on a static text file. I just put it here since this is not a challenge I have solve in this assessment. */}
      <header className={styles.header}>Page Heading</header>
      {/* same as above */}
      <p className={styles.overheadText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur
        facilisis posuere. Curabitur eu nisl quis purus porttitor ultrices eu eu
        sem. In at ex sit amet libero euismod imperdiet. Proin porttitor aliquam
        congue.
      </p>
      {/* I put a wrapper here so Carousel component itself doesn't have opinion on spacing. Dummy spacing component would work too I guess */}
      <div className={styles.carouselContainer}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
