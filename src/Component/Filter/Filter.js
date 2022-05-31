import "./Style.css"
import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

const Filter = ({filterMovies, rateFilter}) => {

  return (
    <>
    <div className='headerClass'>
      <nav>
        <ul>
          <li> <a href='#'> Popular</a></li> 
          <li> <a href='#'> Theatre</a></li> 
          <li> <a href='#'> Kids </a></li> 
          <li> <a href='#'> Drama</a></li> 
          <li> <a href='#'> Comedies</a></li> 
        </ul>
      </nav>
      <form> 
        <div className="search-btn">     
        <input onChange={(e)=>filterMovies(e.target.value)} type='text' placeholder='Search by title' className='inputText'/>
   </div>
      </form>
      <div> 
      <ReactStars count={10} size={24} onChange={rateFilter} activeColor="#ffd700"/>
      </div>
    </div>
    </>
  )
}

export default Filter