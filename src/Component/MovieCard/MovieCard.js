import React from "react";
import "./MovieCard.css";
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ el, delMovie }) => {

  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img
            className="locandina"
            src={el.posterURL}
          />
          <h1>{el.title}</h1>
          <h4>{el.year}, {el.actor}</h4>
          <span className="minutes">{el.time}</span>
          <p className="type">{el.genre}</p>
        </div>
        <div className="movie_desc">
          <p className="text">
            {el.description}
          </p>
        </div>
        <div className="cont"> 
        <Link to={`/singleMovie/${el.id}`}> <button className="card__btn"> Watch trailer </button> </Link>
        <ReactStars count={10} size={24} edit={false} value={Math.ceil(el.rating)} activeColor="#ffd700"/>
        </div>

        <div className="movie_social">
          <ul>
            <li>
              <i className="material-icons">share</i>
            </li>
            <li>
              <i  className="material-icons"></i>
            </li>
            <li>
              <i className="material-icons">chat_bubble</i>
            </li>
            <li>
            <i onClick={()=>delMovie(el.id)} className="fa-solid fa-trash-can"></i>
            </li>
          </ul>
        </div>
      </div>

      <img
        className="blur_back bright_back"
        src={el.posterURL}
      />
    </div>
  );
};

export default MovieCard;
