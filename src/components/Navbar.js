import React, {useState} from 'react';
import './Navbar.css';
import {projectList} from './ProjectData';


export const NavBar = React.memo(({resolutionTier, navHeight, navWidth, sizeUnit}) => {

  //inline css object to definte navbar dimension and sub-menu width;
  const navLayout = {
    height: `${navHeight}px`,
    width: `${navWidth}px`,
    transform: `translateY(${sizeUnit/4}px)`
  };

  const menuWidth = {
    width: `${resolutionTier === 'S' ? navWidth: navWidth * 0.4}px`
  };

  // handlers for click events on logo and menu
  const handleLogoClick = () => window.scrollTo({top: 0, behavior: 'smooth'});
  const handleAboutClick =() => document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  const [pjtClick, setPjtClick] = useState(false);
  const handlePjtMenuClick = (projectId) => {
    const projectCard = document.getElementById(projectId);
    projectCard.scrollIntoView({behavior: 'smooth', inline: 'center', block: 'center'});
    setTimeout(() => projectCard.classList.toggle('focused'), 500);
    setTimeout(() => projectCard.classList.toggle('focused'), 1200);
    setPjtClick(false);
  };

  // generate project menu list
  const createProjectMenuList = (projectList) => {
    let menuList = [];
    projectList.forEach(p => {
      menuList.push(
        (<li key={p.projectId + '-menu'} className='project-item' onMouseDown={()=>handlePjtMenuClick(p.projectId)}>
          <u>{p.projectName}</u>
        </li>)
      );
    });
    return menuList;
  };

  const appLogo = '/images/logo-sketch.svg';
  

  return (
    <nav className={pjtClick ? 'nav-container expand' : 'nav-container'} style={navLayout}>
      <div className='brand-container'>
        <img className='app-logo' src={appLogo} alt='logo-sketch' 
        onKeyPress={e => {if (e.key==='Enter') handleLogoClick()}} onClick={handleLogoClick} tabIndex='0'>
        </img>
        <p className='app-name'>Ruopeng's <br></br> Code Journal</p>
      </div>
      <div className='menu-container'>
        <button className='project-nav' onClick={()=>setPjtClick(!pjtClick)} onBlur={()=>setPjtClick(false)}>Projects</button>
        <button className='about-nav' onClick={handleAboutClick}>About</button>
        <ul className={pjtClick ? 'project-menu active' : 'project-menu'} style={menuWidth}>
          {createProjectMenuList(projectList)}
        </ul>
      </div>
    </nav>
  );
});
