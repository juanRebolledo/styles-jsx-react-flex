import React from "react";

import "styles/Header.css";
import MenuOptions from "components/Header/MenuOptions";

export default function Header({ openOrCloneMenuOptions, menuIsOpen }) {
  return (
    <header >
      <div onClick={() => openOrCloneMenuOptions()} className="setting">
        <img
          src="https://image.flaticon.com/icons/svg/2099/2099058.svg"
          alt="Settings"
        />
      </div>
        {menuIsOpen && <MenuOptions /> }
    </header>
  );
}
