import React, { useState, createContext } from "react"

const Context = createContext()

const Provider = ({ children }) => {
  const [open, setOpen] = useState(true)

  return (
    <Context.Provider value={{ open, setOpen }}> {children} </Context.Provider>
  )
}

const Consumer = Context.Consumer

export { Context, Provider, Consumer }
