import React from 'react';
import './ProjectView.css';
import {Card} from './Card';
import {projectList} from './ProjectData';

export const ProjectView = React.memo(({resolutionTier, numOfRows, numOfCols}) => {
  let startRow, startCol, pjtWidth, pjtHeight, rowGap, colGap;

  switch (resolutionTier) {
    case 'S':
      startRow = 30;
      startCol = 5;
      pjtWidth = 16;
      pjtHeight = 16;
      rowGap = 2;
      colGap = 70;
      break;
    case 'M':
      startRow = 29;
      startCol = 3;
      pjtWidth = 12;
      pjtHeight = 12;
      rowGap = 2;
      colGap = 2;
      break;
    case 'L':
      startRow = 29;
      startCol = 3;
      pjtWidth = 10;
      pjtHeight = 10;
      rowGap = 1;
      colGap = 1;
      break;
    default:
      startRow = 29;
      startCol = 4;
      pjtWidth = 14;
      pjtHeight = 14;
      rowGap = 2;
      colGap = 2;
  }

  const [pjtClicked, setPjtClicked] = React.useState(0);
  const pjt = pjtClicked === 0 ? null : projectList[pjtClicked-1];

  //disable background scroll when modal is open, partially working on ios
  React.useEffect(() => {
    const handleTouchMove = e => e.preventDefault();
    if (pjtClicked !== 0) {
      document.body.style.overflowY = 'hidden';
      document.addEventListener('touchmove', handleTouchMove, {passive: false});
    } else {
      document.body.style.overflowY = 'overlay';
    }
    return () => document.removeEventListener('touchmove', handleTouchMove);
  }, [pjtClicked]);

  const modalRef = React.useRef();

  //function to generate project cards
  const generateProjectCards = (projectList) => {
    let projectCards = [];
    let row = startRow;
    let col = startCol;

    for (const project of projectList) {
      projectCards.push((<Card key={project.projectId} cardRow={row} cardCol={col} cardWidth={pjtWidth} cardHeight={pjtHeight}
        cardId={project.projectId} cardImage={project.projectCoverImage} cardLabel={project.projectName} cardClick={setPjtClicked} />));
      if (col + pjtWidth*2 + colGap <= numOfCols) {
        col = col + pjtWidth + colGap
      } else {
        row = row + pjtHeight + rowGap;
        col = startCol;
      }
    }

    return projectCards;
  };

  return (
    <>
      {generateProjectCards(projectList)}
      {pjtClicked !== 0 && (
        <div className='popup-container' onClick={()=>setPjtClicked(0)}>
          <div className='popup-box'>
            <img className='project-showcase' src={pjt.projectShowcase} alt={pjt.projectId + 'showcase'} onClick={e => e.stopPropagation()}></img>
            <div className='project-detail' onClick={e => e.stopPropagation()}>
              <p className='project-title'><b>{pjt.projectName}</b></p>
              <p className='project-desc' ref={modalRef} onTouchMove={e=>{
                if (modalRef.current.scrollHeight > modalRef.current.clientHeight) {
                  e.stopPropagation();
                } else {
                  e.preventDefault();
                }
              }}>{pjt.projectDescription}</p>
              {(pjt.projectLink !== '' || pjt.projectRepo !== '') && (
              <div className='project-links'>
                {pjt.projectLink !== '' && (<a className='pjtlink' href={pjt.projectLink} target="_blank" rel="noopener noreferrer"><u>Link to App</u></a>)}
                {pjt.projectRepo !== '' && (<a className='pjtlink' href={pjt.projectRepo} target="_blank" rel="noopener noreferrer"><u>Link to Github</u></a>)}
              </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});