import React from 'react';
import { NearMe } from '@material-ui/icons';
import './WindDirection.scss';

const deplaceWindMarker = (deg) => (Math.round(deg - 45));
function WindDirection(props) {
  const { direction, compass } = props;
  const windMarker = deplaceWindMarker(direction);
  return (
    <div className='wind-direction'>
      <div className='wind-direction__circle'>
        <NearMe
          fontSize="small"
          className='wind-direction__icon'
          style={{'transform': `rotate(${windMarker}deg)`}}
        />
      </div>
      <span className='wind-direction__text'>{compass}</span>
    </div>
  );
}

export default WindDirection;