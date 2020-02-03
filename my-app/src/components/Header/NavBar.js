import {Link} from 'react-router-dom';
import React, { Component } from 'react';


export default class NavBar extends Component {
  render() {
    return (
      <div>
         <nav className='Nav'>
          <ul>
            <li>
              <Link to="#">FIND MATCH</Link>
            </li>
            <li>
              <Link to="#">GROUNDS</Link>
            </li>
            <li>
              <Link to="#">MESSAGE</Link>
            </li>
            <li>
              <Link to="#">UPCOMING</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

