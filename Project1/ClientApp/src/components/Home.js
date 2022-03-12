import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
          <div className="w-full text-center">
              <Link to="/q1" className="text-white border rounded-md px-8 py-2 uppercase font-herosBoldItalic tracking-widest">To Quiz 1</Link>
        </div>
    );
  }
}
