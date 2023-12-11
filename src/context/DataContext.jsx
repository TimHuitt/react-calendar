import { createContext, useContext, useState } from 'react'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])

  const addData = (newData) => {
    setData((prev) => ([...prev, newData]))
  }

  const resetData = () => {
    setData([])
  }

  return (
    <DataContext.Provider value={{ data, addData, resetData }}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => {
  return useContext(DataContext)
}

