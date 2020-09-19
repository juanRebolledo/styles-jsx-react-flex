import React from "react";

export default function Option({
  cardContainerStyles,
  incrementSize,
  decrementSize,
  prop,
}) {
  return (
    <div className="option">
      {cardContainerStyles && (
        <span>
          {`${prop[0].toLocaleUpperCase() + prop.substr(1)}:${
            cardContainerStyles[prop]
          }`}
        </span>
      )}

      <div className="container-buttons">
        <button onClick={() => incrementSize(prop)} className="b-plus">
          +
        </button>
        <button onClick={() => decrementSize(prop)} className="b-minus">
          -
        </button>
      </div>
    </div>
  );
}
