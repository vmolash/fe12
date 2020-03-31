import React from 'react';
import Logo from "./Logo";
import HeaderMenuItem from "./HeaderMenuItem";



function HeaderMenu(props) {
    return (
      <ul className="header">
          {props.menuItems.map(el => <HeaderMenuItem key={el.title} item={el} />)}
      </ul>
    );

}

export default HeaderMenu;
