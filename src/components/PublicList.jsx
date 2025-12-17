import React from 'react'

export default function PublicList(props) {
  return (
    <ol start={props.size}>
      <li>{props.publication}</li>
    </ol>
  );
}
