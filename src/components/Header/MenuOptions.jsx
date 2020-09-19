import React, { useState, useContext } from "react";

import { StylessheetContext } from "context/StylessheetsState";
import { useEffect } from "react";

import Option from "./Menu/Option";

export default function MenuOptions() {
  const {
    cardStyles,
    setCardStyles,
    containerStyles,
    setContainerStyles,
  } = useContext(StylessheetContext);
  const [cardContainerStyles, setCardContainerStyles] = useState({});

  useEffect(() => {
    setCardContainerStyles(cardStyles.cardContainer);
  }, [cardStyles, cardContainerStyles]);

  const incrementSize = (property) => {
    setCardStyles({
      ...cardStyles,
      cardContainer: {
        ...cardContainerStyles,
        [property]: +cardContainerStyles[property].split("p")[0] + 5 + "px",
      },
    });
  };

  const decrementSize = (property) => {
    setCardStyles({
      ...cardStyles,
      cardContainer: {
        ...cardContainerStyles,
        [property]: cardContainerStyles[property].split("p")[0] - 5 + "px",
      },
    });
  };

  const setPropertyFromSelect = (e) => {
    const { target } = e;
    const { name, value } = target;
    setContainerStyles({ ...containerStyles, [name]: value });
  };

  const flexWrap = ["wrap", "nowrap", "wrap-reverse"];

  return (
    <div className="optionMenuContainer">
      <div className="cubik"></div>

      <div className="container-form">
        <p>Card Container</p>
        <Option
          cardContainerStyles={cardContainerStyles}
          incrementSize={incrementSize}
          decrementSize={decrementSize}
          prop="width"
        />
        <Option
          cardContainerStyles={cardContainerStyles}
          incrementSize={incrementSize}
          decrementSize={decrementSize}
          prop="height"
        />
        <Option
          cardContainerStyles={cardContainerStyles}
          incrementSize={incrementSize}
          decrementSize={decrementSize}
          prop="borderRadius"
        />
        <p>Container</p>
        <div className="option">
          <span>Flex Wrap</span>
          <select name="flexWrap" onChange={setPropertyFromSelect}>
            <option value={containerStyles.flexWrap}>
              {containerStyles.flexWrap}
            </option>
            {flexWrap
              .filter((item) => item !== containerStyles.flexWrap)
              .map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}
