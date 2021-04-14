import React from 'react'
import './App.css'
import { Table } from './Table'
import { HeaderTable, tableData } from './Data'

function App() {
  return (
    <div className="App">
      <Table headers={HeaderTable} data={tableData} />
    </div>
  )
}

export default App
