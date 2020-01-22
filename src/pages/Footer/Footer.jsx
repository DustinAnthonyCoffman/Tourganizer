import React from 'react';
import './Footer.css';



const Footer = (props) => {
    let footer = props.user ?
      <div className="Footer">
      </div>
      :
      <div>
          <h2>Please login</h2>
      </div>;
  
    return (
      <div>
        {footer}
      </div>)
}

export default Footer;