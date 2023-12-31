import React, { useState } from "react"
import Form from "./Form"
import Items from "./Items"
import { nanoid } from "nanoid"

import List from "./List"
import Alert from "./Alert"
import { ToastContainer, toast } from "react-toastify"
// const getLocalStorage = () => {
//   let list = localStorage.getItem("list")
//   if (list) {
//     list = JSON.parse(localStorage.getItem("list"))
//   } else {
//     list = []
//   }
//   return list
// }

//the same as above but more succint
const defaultList = JSON.parse(localStorage.getItem("list") || [])

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items))
}
function App() {
  const [items, setItems] = useState(defaultList)
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const nextItems = [...items, newItem]
    setItems(nextItems)
    setLocalStorage(nextItems)
    toast.success("Item added to the list", {
      autoClose: 1500,
      hideProgressBar: true,
    })
  }
  const removeItem = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems)
    setLocalStorage(nextItems)
    toast.success("Item removed", {
      autoClose: 1500,
      hideProgressBar: true,
    })
  }
  const editItem = (id) => {
    const nextItems = items.map((item) => {
      if (item.id === id) {
        const nextItem = { ...item, completed: !item.completed }
        return nextItem
      }
      return item
    })
    setItems(nextItems)
    setLocalStorage(nextItems)
  }
  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App
