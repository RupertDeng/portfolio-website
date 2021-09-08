import React from 'react';
import './Cell.css';

export const Cell = React.memo(({cellId, cellSize, cellBorder, cellRow, cellCol, cellType, numOfRows, numOfCols}) => {

  // inline style object to assign individual cell position, also setup random banner cell animation upon re-rendering;
  const cellLayout = {
    width: cellSize, 
    height: cellSize,
    borderWidth: cellBorder,
    gridArea: `${cellRow} / ${cellCol} / ${cellRow+1} / ${cellCol+1}`,
    animation: cellType === 'cell-banner' ? `${1.5 + Math.random() * 2}s steps(4, end) 0s 5 alternate none running fadein` : 'none'
  };


  // handle mouse hover effect to hightlight the current cell and neighbor cell
  let neighborCell = [[cellRow-1, cellCol], [cellRow+1, cellCol], [cellRow, cellCol+1], [cellRow, cellCol-1]];
  neighborCell = neighborCell.filter(e => e[0]>0 && e[0]<=numOfRows && e[1]>0 && e[1]<=numOfCols).map(e => (e[0]-1)*numOfCols + e[1]);

  const handleMouseHover = () => {
    document.getElementById(cellId).classList.toggle('active-0');
    neighborCell.forEach(e => document.getElementById(e).classList.toggle('active-1'));
  };

  const handleBannerClick = () => {
    document.getElementById('grid-view').classList.toggle('animate');
  }


  return (
    <div id={cellId} className={cellType} style={cellLayout} onClick={cellType==='cell-banner' ? handleBannerClick : null} 
    onMouseOver={handleMouseHover} onMouseOut={handleMouseHover}> </div>
  );

});
