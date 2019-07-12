import React from 'react';
import '../css/App.css';
import classnames from 'classnames';

export default function Cell({
  content,
  fill,
  gridNum,
  index,
  isHilighted,
  isSelected,
  onCellSelected,
}) {
  
  const xOffset = 33 * (index%15)
  const yOffset = 33 * Math.floor(index/15)
  const isBlack = content === '.' ? true : false;

  return (
    <g onClick={()=>onCellSelected(index)}>
        <rect 
          x={3 + xOffset} 
          y={3 + yOffset} 
          width="33.00" 
          height="33.00" 
          className={classnames(
            'cell', 
            {'cell-selected': isSelected}, 
            {'cell-black': isBlack},
            {'cell-hilighted': isHilighted},
          )}
          />
        <text x={5 + xOffset} y={14.5 + yOffset} textAnchor="start" fontSize="11.00">{gridNum !== 0 ? gridNum : ''}</text>
        <text x={19.5 + xOffset} y={33.25 + yOffset} textAnchor="middle" fontSize={22 - (content.length * 2.5)}>
          {fill}
        </text>
    </g>
  );
}