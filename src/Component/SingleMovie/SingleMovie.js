import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./SingleMovie.css";

const SingleMovie = ({ tabldata }) => {
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  useEffect(() => {
    setMovie(tabldata.find((el) => el.id === id));
  }, [id]);
const navigate =useNavigate()
  return (
    <div className="card">
      <div className="card__image card__image--fence" />
      <iframe
          width="720"
          height="460"
          src={movie.trailerURL}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      <div className="card__content">
    
        <div className="card__title">{movie.title}</div>
        <p className="card__text">
         {movie.description}{" "}
        </p>
         <button className="btn btn--block card__btn" onClick={()=> navigate("/")}>Button</button> 
      </div>
    </div>
  );
};

export default SingleMovie;
