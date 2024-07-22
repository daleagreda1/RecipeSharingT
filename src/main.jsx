import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Homepage/Home.jsx'
import './index.css'
import SubmitRecipe from './ShareRecipe/SubmitRecipe.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
    <SubmitRecipe/>
  </React.StrictMode>,
)
