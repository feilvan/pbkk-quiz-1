import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import { Homepage00 } from './components/00homepage';
import { Profile01 } from './components/01profile';
import { Company02 } from './components/02company';
import { Service03 } from './components/03service';
import { Collab04 } from './components/04collaboration';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />

        <Route exact path='/q1' component={Homepage00} />
            <Route exact path='/q1/profile' component={Profile01} />
            <Route exact path='/q1/company' component={Company02} />
            <Route exact path='/q1/service' component={Service03} />
            <Route exact path='/q1/collaboration' component={Collab04} />
      </Layout>
    );
  }
}
