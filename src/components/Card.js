import React from 'react';
import './Card.css';

export const Card = React.memo(({cardRow, cardCol, cardWidth, cardHeight, cardId, cardImage, cardLabel, cardClick}) => {

  const cardLayout = {
    gridArea: `${cardRow} / ${cardCol} / ${cardRow+cardHeight} / ${cardCol+cardWidth}`,
  };

  const handleCardClick = () => {
    cardClick(parseInt(cardId.split('-').slice(-1)))
  };


  return (
    <div id={cardId} className='project-card' style={cardLayout} onClick={handleCardClick} tabIndex='0'>
      <div className='card-image' style={{backgroundImage: `url(${cardImage})`}}></div>
      <p className='card-label'>
        <b>{cardLabel}</b>
      </p>
    </div>
  );

});