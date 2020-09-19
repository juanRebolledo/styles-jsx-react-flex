import React, { createContext, useReducer } from "react";

import StylesSheetReducer from "context/StylesSheetReducer";

const initialState = {
  cardStyles: {
    cardContainer: {
      width: "200px",
      height: "400px",
      boxShadow: "0 0 0.25rem 0 #ced4da",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "0.5s",
      margin: "10px",
      backgroundColor: "#fff",
    },
    cardImageContainer: {
      width: "100%",
      height: "80%",
    },
    cardTitleContainer: {
      height: "20%",
    },
    cardImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "5px 5px 0 0",
    },
  },
  containerStyles: {
    alignItems: "center",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    height: "calc(100% - 50px)",
    width: "90%",
  },
};
export const StylessheetContext = createContext(initialState);

export const StylessheetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StylesSheetReducer, initialState);

  const setCardStyles = (cardStyles) => {
    dispatch({
      type: "CARD_STYLES",
      payload: cardStyles,
    });
  };

  const setContainerStyles = (containerStyles) => {
    dispatch({
      type: "CONTAINER_STYLES",
      payload: containerStyles
    })
  }

  return (
    <StylessheetContext.Provider
      value={{
        cardStyles: state.cardStyles,
        containerStyles: state.containerStyles,
        setCardStyles: setCardStyles,
        setContainerStyles: setContainerStyles
      }}
    >
      {children}
    </StylessheetContext.Provider>
  );
};
