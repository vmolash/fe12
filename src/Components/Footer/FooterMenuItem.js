import React from 'react';

function FooterMenuItem(props) {
    return (
      <li>
          <a href={props.item.url} className="menu-link">{props.item.title} </a>
      </li>
    );

}

export default FooterMenuItem;
