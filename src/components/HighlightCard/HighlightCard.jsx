import React from 'react';
import './HighlightCard.scss';

function HighlightCard(props) {
  const { title, unit, value, children} = props;
  return (
    <div className="highlight-card">
      <span className="highlight-card__title">
        {title}
      </span>
      <div className="highlight-card__quantity">
        <strong>{value}</strong>
        <span>{unit}</span>
      </div>
      {children && <div className="highlight-card__option">{children}</div>}
    </div>
  );
}

export default HighlightCard;