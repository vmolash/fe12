import React from 'react';


const onMouseOverMenuItem = (n) => {
    console.log(n);
};
function FooterMenuItem(props) {


    return (

      <li>
          <a href={props.item.url} onMouseOver={() => onMouseOverMenuItem(props.item.title) }  className="menu-link">{props.item.title} </a>
      </li>
    );

}

export default FooterMenuItem;
