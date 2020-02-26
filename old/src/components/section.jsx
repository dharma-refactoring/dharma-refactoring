import React from "react"
import ListItem from "./list-item"

const Section = props => (
  <section>
    <h2>{props.title}</h2>
    <ul>
      {props.contents.map((c, i) => (
        <ListItem key={i} {...c} />
      ))}
    </ul>
  </section>
)

export default Section
