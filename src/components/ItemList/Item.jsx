import React from 'react'

export default function Item(prop) {
  return (
    <div style = {{backgroundColor : "blue", color : "yellow", textAlign: "center"}}>{prop.greeting}</div>
  )
}