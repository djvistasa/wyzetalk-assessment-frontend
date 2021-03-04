import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import { useSnackbar } from 'notistack';
import { HomeApi } from './api';

import Home from './pages/home';
import ArtistDetail from './pages/artistDetail';

import { NavBar } from './components';

function App() {
  const saveResultsInStore = useStoreActions(
    (actions) => actions.searchResults.add,
  );
  const { enqueueSnackbar } = useSnackbar();

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) {
      return saveResultsInStore([]);
    }
    const { error, ok, result } = await HomeApi.performSearch(searchTerm);

    if (error) {
      return enqueueSnackbar(error, {
        variant: 'error',
      });
    }

    if (ok && result) {
      return saveResultsInStore(result);
    }

    return false;
  };
  return (
    <>
      <NavBar onSearchTermChange={handleSearch} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artist-detail" component={ArtistDetail} />
      </Switch>
    </>
  );
}

export default App;
