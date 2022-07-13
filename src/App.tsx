import React, { useState } from 'react'
import { HashRouter} from 'react-router-dom'
import routers from './routers/index.ts'
import { renderRoutes } from 'react-router-config'
import './App.css'

function App() {

  return (
    <HashRouter>
      {renderRoutes(routers)}
    </HashRouter>
  )
}

export default App
