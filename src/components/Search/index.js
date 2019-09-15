import React from "react";

function Search(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.summary}</td>
      <td><button className="save">Save</button></td>
    </tr>
  )
};

export default Search;