import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  const [movie, setMovie] = useState();

  useEffect(() => {

    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    // I'm unsure of how to do this. I will ask for help later because I would really like to know how to do this
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div>
      <MovieCard movie={movie}/>
      <Link to={`/`}><div className="save-button" onClick={saveMovie}>Save</div></Link>
    </div>
  );
}

export default Movie;