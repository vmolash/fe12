import React from 'react';
import Logo from "./Logo";

function HeaderMenuItem(props) {
    return (
      <li className="header">
          <a href={props.item.url} className='menu-link'>{props.item.title}</a>
      </li>
    );

}

export default HeaderMenuItem;
