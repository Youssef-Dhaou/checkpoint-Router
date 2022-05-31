
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({tabldata, delMovie}) => {


  return (
    <div>
      {tabldata.map((el) => (<MovieCard delMovie={delMovie} key={el.id} el={el} />))}
    </div>
  )
}

export default MovieList