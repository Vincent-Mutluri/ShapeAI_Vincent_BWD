import React from "react";

function Footer() {
  var CurrYear = new Date().getFullYear();

  return <footer>Copyright @ {CurrYear} </footer>;
}

export default Footer;
