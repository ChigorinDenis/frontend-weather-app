import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames  from 'classnames';
import { changeMeasurement } from '../../reducers/uiReducer.js';
import './MeasurementUnit.scss';

const buildBtnClass = (value, measurement) => {
  const btnClass = classNames({
    measurement__btn: true,
    measurement__btn_active: value === measurement,
  });
  return btnClass;
}

function MeasurementUnit() {
  const ui = useSelector((state) => state.ui);
  const dispach = useDispatch();
  return (
    <div className="measurement">
      <div 
        className={buildBtnClass('C', ui.measurement)}
        onClick={() => dispach(changeMeasurement('C'))}
      > 
        <span>&deg;C</span>
      </div>
      <div
        className={buildBtnClass('F', ui.measurement)}
        onClick={() => dispach(changeMeasurement('F'))}
      >
        <span>&deg;F</span>
      </div>
    </div>
  )
}

export default MeasurementUnit;
