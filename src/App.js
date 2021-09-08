import {NavBar} from './components/Navbar';
import {Grid} from './components/Grid';
import {About} from './components/About';
import {Footer} from './components/Footer';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  // useState and useEffect to update the window width upon resizing
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {window.removeEventListener('resize', handleResize)};
  }, [])

  // definte grid layout for responsiveness
  const defineGridLayout = (width) => {
    let tier, size, rows, cols;

    if (width <= 576) {
      tier = 'S';
      size = 15;
      rows = 100;
      cols = 24;
    } else if (width <= 992) {
      tier = 'M';
      size = 20;
      rows = 67;
      cols = 30;
    } else {
      tier = 'L'
      size = 25;
      rows = 65;
      cols = 36;
    }

    return [tier, rows, cols, size];
  };

  const [resolutionTier, numOfRows, numOfCols, cellSize] = defineGridLayout(windowWidth);
  const cellBorder = 1;

  // definte activeWidth and sizeUnit using the grid information for other components
  const activeWidth = cellSize * numOfCols;
  const sizeUnit = cellSize;
  const navHeight = sizeUnit * (resolutionTier === 'S' ? 3.5 : 2.5);
  const navWidth = activeWidth - sizeUnit;

  

  return (
    <div className='app'>
      <NavBar resolutionTier={resolutionTier} navHeight={navHeight} navWidth={navWidth} sizeUnit={sizeUnit}/>
      <Grid resolutionTier={resolutionTier} numOfRows={numOfRows} numOfCols={numOfCols} cellSize={cellSize} cellBorder={cellBorder} />
      <About resolutionTier={resolutionTier} aboutWidth={activeWidth}/>
      <Footer footerWidth={activeWidth} />
    </div>
  );
}

export default App;
