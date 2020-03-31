import React from 'react';

import Contact from "./Contact";
import FooterMenu from "./FooterMenu";


function Footer(props) {
    return (
      <div className="footer">
          <FooterMenu menuItems={props.menuItems}/>
          <Contact />
      </div>
    );

}

export default Footer;
