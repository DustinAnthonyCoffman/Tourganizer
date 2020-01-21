import React from 'react';





const Footer = (props) => {
    let footer = props.user ?
      <div>
    <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Github</li>
          <li>Email</li>
      </ul>
      </div>
      :
      <div>
          <h2>You need to login</h2>
      </div>;
  
    return (
      <div>
        {footer}
      </div>)
}

export default Footer;