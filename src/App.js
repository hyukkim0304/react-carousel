import Carousel from "./components/carousel";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>Page Heading</header>
      <p className={styles.overheadText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur
        facilisis posuere. Curabitur eu nisl quis purus porttitor ultrices eu eu
        sem. In at ex sit amet libero euismod imperdiet. Proin porttitor aliquam
        congue.
      </p>
      <div className={styles.carouselContainer}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
