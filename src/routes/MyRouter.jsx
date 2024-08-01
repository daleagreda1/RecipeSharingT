import React from 'react'
import { Routes, Route } from "react-router-dom"
import RecipeListpage from '../pages/RecipeListpage/RecipeListpage.jsx';
import SubmitRecipe from '../pages/ShareRecipe/SubmitRecipe.jsx';
import RecipeDetailPage from '../pages/RecipeDetailpage/RecipeDetailPage.jsx';
import Home from '../pages/Homepage/Home.jsx';
import App from '../App';
import ContactPage from '../pages/Contactpage/Contact.jsx';

export default function MyRouter() {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/RecipeListpage' element={<RecipeListpage/>}/>
        <Route path="/recipe/:name" element={<RecipeDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/SubmitRecipe' element={<SubmitRecipe/>}/>     
      </Route>
    </Routes>
  )
}
