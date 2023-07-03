import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import EditMovie from './components/EditMovie';

function AppRouter() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/movies/new">Add New Movie</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies" component={Movies} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default AppRouter;
