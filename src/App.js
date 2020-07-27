import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './routes/home/Home';

function App() {
  return (
    <Layout>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
    </Layout>

  );
}

export default App;
