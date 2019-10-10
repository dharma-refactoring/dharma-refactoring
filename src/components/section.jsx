import React from "react"

const Section = props => (
  <section>
    <h2>{props.title}</h2>
    <ul>
      {props.contents.map(c => (
        <Content {...c} />
      ))}
    </ul>
  </section>
)

const Content = props => (
  <li>
    <span>{props.feature}</span>
    {props.descriptions.length > 0 ? (
      <ul>
        {props.descriptions.map(description => (
          <li>{description}</li>
        ))}
      </ul>
    ) : null}
  </li>
)

export default Section
