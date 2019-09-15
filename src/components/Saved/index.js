import React from "react";

function Saved(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.summary}</td>
      <td><button className="delete">Delete</button></td>
    </tr>
  );
}

export default Saved;