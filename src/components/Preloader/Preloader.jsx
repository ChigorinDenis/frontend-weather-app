import React from 'react';
import './Preloader.scss';

const Preloader = (props) => {
  const { type, size } = props;
  return (
    <div className={`preloader ${type} ${size}`}></div>
  )
 
};

export default Preloader;