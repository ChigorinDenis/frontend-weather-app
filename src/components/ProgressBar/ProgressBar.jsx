import React from 'react';
import './ProgressBar.scss';

function ProgressBar(props) {
  const { progress } = props;
  return (
    <div className="progress-bar">
      <div className="progress-bar__values">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="progress-bar__line">
        <div 
          className="progress-bar__indicator"
          style={{width: `${progress}%`}}
        >
        </div>
      </div>
      <span className="progress-bar__percent">%</span>
    </div>
  );
}

export default ProgressBar;