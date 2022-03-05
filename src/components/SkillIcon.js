import React from 'react';
import './SkillIcon.css';

export const SkillIcon = React.memo(({iconRow, iconCol, iconWidth, iconHeight, iconId, iconImage}) => {

  const iconStyle = {
    gridArea: `${iconRow} / ${iconCol} / ${iconRow+iconHeight} / ${iconCol+iconWidth}`,
    backgroundImage: `url(${iconImage})`
  };

  return (
    <div title={iconId} className='skill-icon' style={iconStyle}>
    </div>
  );

});