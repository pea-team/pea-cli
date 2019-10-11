import React from 'react'
import { Link } from '@peajs/router'

export default () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <Link to="/">Home</Link>
      <div>|</div>
      <Link to="/about">About</Link>
    </nav>
  </div>
)
