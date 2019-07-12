import React from 'react';
import '../css/App.css';

export default function ClueList({clues, direction}) {
  
  
  return (
    <div className="cluelist">
        <h3 className="cluelist-title">{direction}</h3>
        <ol className="cluelist-list">
          {
            clues.map(function(clue, i){
              return (
                <li className="clue" key={i}>
                  {/* <span className="clue-label">{clue}</span> */}
                  <span className="clue-text">{clue}</span>
                </li>
              )
            })
          }
        </ol>
    </div>
  );
}