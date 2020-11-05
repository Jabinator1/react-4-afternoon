import React, { Component } from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <div>WestSide University</div> 
            <div className='link-wrap'>
                <div className='links'><NavLink to="/">Home</NavLink></div>
                <div className='links'><NavLink to="/about">About</NavLink></div> 
            </div>
          </nav>
          {routes}
        </div>
      </HashRouter>
    )
  }
}