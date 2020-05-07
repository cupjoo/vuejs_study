import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1><a href="#welcome" onClick={
          () => props.onClick()}>WEB</a></h1>
      World Wide WEB
    </header>
  );
};

export default Header;
