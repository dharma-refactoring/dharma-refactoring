import React from "react"

const ListItem = props => (
  <li>
    <span>{props.feature}</span>
    {props.descriptions.length > 0 ? (
      <ul>
        {props.descriptions.map((description, i) => (
          <li key={i}>{description}</li>
        ))}
      </ul>
    ) : null}
  </li>
)

export default ListItem
