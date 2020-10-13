import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Contacts from './Contacts.jsx'

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Contacts />
      <Header />
    </div>
  );
}

