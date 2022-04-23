/*****************************************
 * * Nadeem Abomokh 206622755
 * * Mohammad Hussen 208133454
 * * 45/4
 *****************************************/

import React from 'react';
import './footer.css';

/*****************************************
 * * COMPONENT
 *****************************************/

// inline styling in JSX
const Footer = (props) => {
  const code = (
    <footer>
      <p>
        &copy; {props.year} {props.name}
      </p>
    </footer>
  );
  return code;
};

export default Footer;
