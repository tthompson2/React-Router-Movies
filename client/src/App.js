import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

<Route exact path='/' component={MovieList}/>
<Route path='/:id' component={Movie}/>

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
