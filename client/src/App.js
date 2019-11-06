import React, { useState } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import MovieList from './Movies/MovieList'; 
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path="/movies/:id" component={Movie}/>
      <Route exact path="/" 
      render={props => (
        <MovieList 
        {...props}
        />
        
      )}
      />
    </div>
  );
};

export default App;
