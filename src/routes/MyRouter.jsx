import React from 'react'
import { Routes, Route } from "react-router-dom"
import RecipeListpage from '../pages/RecipeListpage/RecipeListpage.jsx';
import SubmitRecipe from '../pages/ShareRecipe/SubmitRecipe.jsx';
import Home from '../pages/Homepage/Home.jsx';
import App from '../App'

export default function MyRouter() {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/RecipeListpage' element={<RecipeListpage/>}/>
        <Route path='/SubmitRecipe' element={<SubmitRecipe/>}/>
      </Route>
    </Routes>
  )
}
