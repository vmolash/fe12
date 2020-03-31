import React from 'react';
import Logo from "./Logo";
import HeaderMenu from './HeaderMenu';


function Header(props) {
    return (
      <div className="header">
          <Logo />
          <HeaderMenu menuItems={props.menuItems}/>
      </div>
    );

}

export default Header;
