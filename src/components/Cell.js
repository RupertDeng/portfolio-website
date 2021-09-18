import React from 'react';
import './Cell.css';

export const Cell = React.memo(({isMobile, cellId, cellSize, cellBorder, cellRow, cellCol, cellType, numOfRows, numOfCols}) => {

  // inline style object to assign individual cell position, also setup random banner cell animation upon re-rendering;
  const cellLayout = {
    width: cellSize, 
    height: cellSize,
    borderWidth: cellBorder,
    gridArea: `${cellRow} / ${cellCol} / ${cellRow+1} / ${cellCol+1}`,
    animation: cellType === 'cell-banner' ? `${1.5 + Math.random() * 2}s steps(4, end) 0s 3 alternate none running fadein` : 'none'
  };


  // handle mouse hover effect to hightlight the current cell and neighbor cell
  let neighborCell = [[cellRow-1, cellCol], [cellRow+1, cellCol], [cellRow, cellCol+1], [cellRow, cellCol-1]];
  neighborCell = neighborCell.filter(e => e[0]>0 && e[0]<=numOfRows && e[1]>0 && e[1]<=numOfCols).map(e => (e[0]-1)*numOfCols + e[1]);

  const handleMouseHover = () => {
    if (!isMobile) {
      document.getElementById(cellId).classList.toggle('active-0');
      neighborCell.forEach(e => document.getElementById(e).classList.toggle('active-1'));
    }
  };

  const handleBannerClick = () => {
    if (!isMobile) {
      const grid = document.getElementById('grid-view');
      grid.classList.add('animate');
      setTimeout(()=>grid.classList.remove('animate'), 1000);
    } else {
      const banners = document.querySelectorAll('.cell-banner');
      banners.forEach(c=>{
        c.classList.add('shrink');
        setTimeout(()=>c.classList.remove('shrink'), 800);
      });
    }
  }

  const handleCellClick = () => {
    if (isMobile) {
      document.getElementById(cellId).classList.add('active-0');
      neighborCell.forEach(e=>document.getElementById(e).classList.add('active-1'));
      setTimeout(()=>{
        document.getElementById(cellId).classList.remove('active-0');
        neighborCell.forEach(e=>document.getElementById(e).classList.remove('active-1'));
      }, 500)
    }
  };


  return (
    <div id={cellId} className={cellType} style={cellLayout} onClick={cellType==='cell-banner' ? handleBannerClick : handleCellClick} 
    onMouseOver={handleMouseHover} onMouseOut={handleMouseHover}> </div>
  );

});
