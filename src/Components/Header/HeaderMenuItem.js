import React from 'react';
import Logo from "./Logo";

function HeaderMenuItem(props) {
    const onPointerOverMenuItem = (n) => {
        console.log(n);
    }

    return (
      <li className="header">
          <a href={props.item.url} onPointerOver={() => onPointerOverMenuItem(props.item.title)} className='menu-link'>{props.item.title}</a>
      </li>
    );

}

export default HeaderMenuItem;
