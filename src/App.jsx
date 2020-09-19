import React, { useState } from "react";

import "./App.css";

import Home from "components/Home";
import Header from "components/Header/Header";

import { StylessheetProvider } from "context/StylessheetsState";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openOrCloneMenuOptions = () => {
    if (menuIsOpen) setMenuIsOpen(false);
    else setMenuIsOpen(true);
  };
  return (
    <div className="App">
      <StylessheetProvider>
        <>
          <Header
            openOrCloneMenuOptions={openOrCloneMenuOptions}
            menuIsOpen={menuIsOpen}
          />
          <Home />
        </>
      </StylessheetProvider>
    </div>
  );
}

export default App;
