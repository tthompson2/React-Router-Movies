import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  // Hook to pull list of saved movies from the SavedList component

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
    console.log(savedList);
  };

  // I need to figure out what component needs to have this function attached to it. Based on my understanding that function
  // should be the button attached to each individual page.

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/movies/:id"
        render={(props) => (
          <Movie {...props} addToSavedList={addToSavedList} />
        )} />
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
