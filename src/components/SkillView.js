import React from 'react';
import './ProjectView.css';
import {SkillIcon} from './SkillIcon';
import {SkillList} from './SkillData';
import './SkillView.css';

export const SkillView = React.memo(({resolutionTier, numOfRows, numOfCols}) => {
  let startRow, startCol, iconWidth, iconHeight, rowGap, colGap, textSize;

  iconWidth = 2;
  iconHeight = 2;
  rowGap = 1;
  colGap = 1;
  startCol = 3;

  switch (resolutionTier) {
    case 'S':
      startRow = numOfRows - 11;
      textSize = 0.75;
      break;
    case 'M':
      startRow = numOfRows - 11;
      textSize = 0.95;
      break;
    case 'L':
      startRow = numOfRows - 8;
      textSize = 1.2;
      break;
    default:
      startRow = numOfRows - 8;
      textSize = 1.2;
  }

  const textStyle = {
    gridArea: `${startRow} / ${startCol} / ${startRow+1} / ${numOfCols-startCol+2}`,
    fontSize: `${textSize}rem`
  };

  const generateSkillIcons = (SkillList) => {
    let skillIcons = [];
    let row = startRow+2;
    let col = startCol;

    for (const skill of SkillList) {
      skillIcons.push((<SkillIcon key={skill.skillName} iconRow={row} iconCol={col} iconWidth={iconWidth} iconHeight={iconHeight}
        iconId={skill.skillName} iconImage={skill.skillImage} />));
      if (col + iconWidth*2 + colGap <= numOfCols) {
        col = col + iconWidth + colGap
      } else {
        row = row + iconHeight + rowGap;
        col = startCol;
      }
    }

    return skillIcons;
  };



  return (
    <>
      <div className='skill-text' style={textStyle}><i>Skills Activated</i></div>
      {generateSkillIcons(SkillList)}
    </>
  );



});