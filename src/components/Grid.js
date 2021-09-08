import React from 'react';
import {Cell} from './Cell';
import {WelcomeText} from './WelcomeText';
import {createWelcomeBanner} from './WelcomeBanner';
import {ProjectView} from './ProjectView';
import './Grid.css';


export const Grid = React.memo(({resolutionTier, numOfRows, numOfCols, cellSize, cellBorder}) => {

  // inline style object to assign grid layout
  const gridLayout = {
    gridTemplateRows: `repeat(${numOfRows}, ${cellSize}px))`,
    gridTemplateColumns: `repeat(${numOfCols}, ${cellSize}px))`,
  };

  // function to generate the cells in grid
  const generateCells = (tier, cellSize, cellBorder, numOfRows, numOfCols) => {
    const cellList = [];
    const banner = createWelcomeBanner(tier, numOfCols);
    let type, id;
    for (let r = 1; r <= numOfRows; r++) {
      for (let c = 1; c <= numOfCols; c++) {
        id = (r-1) * numOfCols + c;
        if (banner.has(id)) {
          type = 'cell-banner';
        } else {
          type = 'cell-default';
        }
        cellList.push((<Cell cellId={id} key={id} cellSize={cellSize} cellBorder={cellBorder} cellRow={r} cellCol={c} cellType={type} 
          numOfRows={numOfRows} numOfCols={numOfCols} />))
      }     
    }
    return cellList;
  };


  
  return (
    <>
      <div className='grid-container'>
        <div id='grid-view' className='grid' style={gridLayout}>
          {generateCells(resolutionTier, cellSize, cellBorder, numOfRows, numOfCols)}
          <WelcomeText resolutionTier={resolutionTier} />
          <ProjectView resolutionTier={resolutionTier} numOfRows={numOfRows} numOfCols={numOfCols} />
        </div>
      </div>
    </>
  );


});