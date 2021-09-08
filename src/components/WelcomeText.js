import React from 'react';
import './WelcomeText.css';

export const WelcomeText = React.memo(({resolutionTier}) => {

  // definte welcome text location based on resolution tier
  let startRow, startCol, endRow, endCol, textSize;

  switch (resolutionTier) {
    case 'S':
      startRow = 24;
      startCol = 3;
      endRow = 26;
      endCol = 23;
      textSize = 0.8;
      break;
    case 'M':
      startRow = 23;
      startCol = 7;
      endRow = 25;
      endCol = 25;
      textSize = 1;
      break;
    case 'L':
      startRow = 23;
      startCol = 10;
      endRow = 25;
      endCol = 28;
      textSize = 1.2;
      break;
    default:
      startRow = 23;
      startCol = 10;
      endRow = 26;
      endCol = 28;
      textSize = 1.2;
  }

  const welcomeTextLayout = {
    gridArea: `${startRow} / ${startCol} / ${endRow} / ${endCol}`,
    fontSize: `${textSize}rem`
  };

  // separate line is one row below welcome text
  const separateLine = '/images/separate-line.svg'; 
  const separateLineLayout = {
    gridArea: `${startRow+2} / ${startCol} / ${startRow+3} / ${endCol}`,
    backgroundImage: `url(${separateLine})`
  };


  



  return (
    <>
      <p className='welcome-text' style={welcomeTextLayout}>
        <i>Welcome to my Code Journal! <br></br>
        Here I note down things I made and am learning. </i>
      </p>
      <div className='separate-line' style={separateLineLayout}></div>
    </>

  );

});