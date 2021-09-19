import {NavBar} from './components/Navbar';
import {Grid} from './components/Grid';
import {About} from './components/About';
import {Footer} from './components/Footer';
import './App.css';
import React, {useState, useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';

function App() {

  // isMobile prop to idenfity mobile device and treat with diffent animation strategy
  const isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

  // kick off smoothscroll to handle ios scroll behavior;
  smoothscroll.polyfill();

  // useState and useEffect to update the window width upon resizing
  const defineResolutionTier = (width) => {
    let tier;
    if (width <= 576) {
      tier = 'S';
    } else if (width <= 992) {
      tier = 'M';
    } else {
      tier = 'L'
    }
    return tier;
  };

  const [resolutionTier, setResolutionTier] = useState(defineResolutionTier(window.innerWidth));

  useEffect(() => {
    const isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    const handleResize = (e) => {
      if (!isMobile) {
        if (e === 'resize') {setResolutionTier(defineResolutionTier(window.innerWidth))};
      } else {
        if (e === 'orientationchange') {setTimeout(
          ()=>{setResolutionTier(defineResolutionTier(window.outerWidth))}, 100)};
      }
    }
    const orientationChange = () => handleResize('orientationchange');
    const sizeChange = () => handleResize('resize');

    window.addEventListener('orientationchange', orientationChange);
    window.addEventListener('resize', sizeChange);
    return () => {window.removeEventListener('resize', sizeChange); window.removeEventListener('orientationchange', orientationChange)};
  }, []);


  // definte grid layout for responsiveness
  const defineGridLayout = (tier) => {
    let size, rows, cols;
    if (tier === 'S') {
      size = 15;
      rows = 100;
      cols = 24;
    } else if (tier === 'M') {
      size = 20;
      rows = 67;
      cols = 30;
    } else {
      size = 25;
      rows = 65;
      cols = 36;
    }
    return [rows, cols, size];
  };

  const [numOfRows, numOfCols, cellSize] = defineGridLayout(resolutionTier);
  const cellBorder = 1;

  // definte activeWidth and sizeUnit using the grid information for other components
  const activeWidth = cellSize * numOfCols;
  const sizeUnit = cellSize;
  const navHeight = sizeUnit * (resolutionTier === 'S' ? 3.5 : 2.5);
  const navWidth = activeWidth - sizeUnit;


  return (
    <div className='app'>
      <NavBar resolutionTier={resolutionTier} navHeight={navHeight} navWidth={navWidth} sizeUnit={sizeUnit}/>
      <Grid isMobile={isMobile} resolutionTier={resolutionTier} numOfRows={numOfRows} numOfCols={numOfCols} cellSize={cellSize} cellBorder={cellBorder} />
      <About resolutionTier={resolutionTier} aboutWidth={activeWidth}/>
      <Footer footerWidth={activeWidth} />
    </div>
  );
}

export default App;
