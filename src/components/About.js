import React from 'react';
import './About.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export const About = React.memo(({resolutionTier, aboutWidth}) => {

  //inline style object for About Me section layout
  const direction = resolutionTier === 'S' ? 'column' : 'row';
  
  const aboutLayout = {
    width: `${aboutWidth}px`,
    flexDirection: `${direction}`
  };

  const fontSize = {
    fontSize: `${resolutionTier === 'L' ? 1 : 0.9}rem`
  };

  const iconLayout = {
    justifyContent: resolutionTier === 'S' ? 'center' : 'flex-end',
    marginTop: resolutionTier === 'S' ? '10px' : '5px'
  };

  const pictureSelf = '/images/picture-self.png';


  return (
    <div id='about' className='about-container' style={aboutLayout}>
      <img className='picture-self' src={pictureSelf} alt='me'></img>
      <div className='text-container'>
        <p className='self-intro' style={fontSize}>
          The name is <b>Ruopeng (Rupert) Deng</b>. Majored in Physics and Ph.D. in Materials Science.
          <br></br>
          After dedicating myself over a decade to studying physical world, specifically semiconductor processing, I started to wonder how the virtual world works under the hood.
          <br></br>
          The thought pulled me deeply in, and I began to teach myself, from simple python 'Hello World' to data structure and algorithm, to advanced topics like distributed system.
          The more I learned, the more I appreciate the underlying intricacy and wisdom. It is truly fascinating!
          <br></br>
          The undertaking of learning and trying new things has never been so thrilling. I do hope that I could keep up this journey of exploration, "to infinity and beyond" ...
        </p>
        <div className='contact-icon-container' style={iconLayout}>
          <a href='https://github.com/RupertDeng' target="_blank" rel="noopener noreferrer" className='contact-icon'>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href='https://www.linkedin.com/in/ruopeng-deng-2980244b/' target="_blank" rel="noopener noreferrer" className='contact-icon'>
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a href='mailto:rupert.deng@gmail.com' className='contact-icon'>
            <FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon>
          </a>

        </div>
      </div>
    </div>
  );

});