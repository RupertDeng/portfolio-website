import React from 'react';
import './Footer.css';

export const Footer = React.memo(({footerWidth}) => {

  const footerLayout = {
    width: `${footerWidth}px`
  };

  return (
    <div className='footer' style={footerLayout}>
      <p className='footer-text'>Copyright @ Ruopeng Deng 2021</p>
    </div>
  );

});