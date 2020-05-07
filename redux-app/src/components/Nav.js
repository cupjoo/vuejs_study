import React from "react";

const Nav = (props) => {
  let tags = [];
  props.data.forEach(d => {
    tags.push(
      <li key={d.id}>
        <a href="#" data-id={d.id} onClick={
          (e) => props.onClick(Number(e.target.dataset.id))}>{d.title}</a>
      </li>
    )
  });
  return (
    <nav>
      <ol>
        {tags}
      </ol>
    </nav>
  );
};

export default Nav;
