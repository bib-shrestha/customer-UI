import React, {Component} from 'react';
import Layout from './components/Layout/Layout'
import CustomerSearch from './containers/CustomerSearch';
import CustomerProfile from './containers/CustomerProfile';
import Dashboard from './containers/Dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div >
        <Layout>
          <Route path="/" exact component = {CustomerSearch} />
          <Route path="/profile/:id" exact component = {CustomerProfile} />
          <Route path="/dashboard/:id" exact component = {Dashboard} />
        </Layout>
      </div>
    </Router>
  );
}

export default App;
