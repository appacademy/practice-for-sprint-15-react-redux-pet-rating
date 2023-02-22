import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PetIndex from './components/PetIndex';

const App = () => (
  <>
    <h1>Pet Reviews</h1>
    <h2>Which animals make the best pet?</h2>
    <Switch>
      <Route exact path="/" component={PetIndex} />
    </Switch>
  </>
);

export default App;
