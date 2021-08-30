import Carousel from "./components/carousel";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>Page Heading</header>
      <div className={styles.carouselContainer}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
