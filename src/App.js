import React, { useState, useEffect } from "react"
import Form from "./Form"
import { nanoid } from "nanoid"
import List from "./List"
import Alert from "./Alert"

function App() {
  const [items, setItems] = useState([])
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const nextItems = [...items, newItem]
    setItems(nextItems)
  }
  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  )
}

export default App
