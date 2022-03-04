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
    width: `${resolutionTier === 'S' ? navWidth: (resolutionTier === 'M' ? navWidth *= 0.5 : navWidth *= 0.4)}px`
  };

  // handlers for click events on logo and menu
  const handleLogoClick = () => window.scrollTo({top: 0, behavior: 'smooth'});
  const handleAboutClick =() => document.getElementById('about').scrollIntoView({behavior: 'smooth'});
  const [pjtClick, setPjtClick] = useState(false);
  const pjtButtonRef = React.useRef();
  const handlePjtClick = () => {
    if (pjtClick) {
      setPjtClick(false);
    } else {
      setPjtClick(true);
      pjtButtonRef.current.focus();
    }
  }
  const handlePjtMenuClick = (projectId) => {
    const projectCard = document.getElementById(projectId);
    const rect = projectCard.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
      top: (rect.top+rect.bottom)/2 + scrollTop - window.innerHeight/2,
      behavior: 'smooth'
    });
    setTimeout(() => projectCard.classList.toggle('focused'), 600);
    setTimeout(() => projectCard.classList.toggle('focused'), 1300);
    setPjtClick(false);
  };

  // generate project menu list
  const createProjectMenuList = (projectList) => {
    let menuList = [];
    const pjtList = projectList.slice().reverse();
    
    pjtList.forEach(p => {
      menuList.push(
        (<li key={p.projectId + '-menu'} className='project-item' onMouseDown={()=>handlePjtMenuClick(p.projectId)}>
          <u>{p.projectName}</u>
        </li>)
      );
    });
    return menuList;
  };


  // link to app logo;
  const appLogo = '/images/logo-sketch.png';
  
  

  return (
    <nav className={pjtClick ? 'nav-container expand' : 'nav-container'} style={navLayout}>
      <div className='brand-container'>
        <img className='app-logo' src={appLogo} alt='logo-sketch' onClick={handleLogoClick}>
        </img>
        <p className='app-name'>Ruopeng's <br></br> Code Journal</p>
      </div>
      <div className='menu-container'>
        <button ref={pjtButtonRef} className={pjtClick ? 'project-nav opened' : 'project-nav'} onClick={handlePjtClick} onBlur={()=>setPjtClick(false)}>Project</button>
        <button className='about-nav' onClick={handleAboutClick}>About</button>
        <ul className={pjtClick ? 'project-menu active' : 'project-menu'} style={menuWidth}>
          {createProjectMenuList(projectList)}
        </ul>
      </div>
    </nav>
  );
});


