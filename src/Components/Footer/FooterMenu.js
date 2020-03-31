import React from 'react';

import Contact from "./Contact";
import FooterMenuItem from "./FooterMenuItem";


function FooterMenu(props) {
    return (
      <ul className="menu">
          {props.menuItems.map(el => <FooterMenuItem key={el.title} item={el} />)}
      </ul>

    );

}

export default FooterMenu;
