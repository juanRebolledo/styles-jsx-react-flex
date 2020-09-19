import React, { useState } from "react";

import "styles/Card.css";

export default function Card({ cardStyles, cardTitle, cardImage }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cardContainer, cardImageContainer, cardTitleContainer } = cardStyles
  const openOrClose = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };
  return (
    <div style={ isOpen ? {...cardContainer, width: "90%", height: "90%" } : {...cardContainer} } onClick={() => openOrClose()}>
      <div style={ cardImageContainer }>
        <img style={ cardStyles.cardImage } src={cardImage} alt="Imagen cargada desde unsplash" />
      </div>
      <div style= { cardTitleContainer }>
        <p>{cardTitle}</p>
      </div>
    </div>
  );
}
