import './App.css';
import React from 'react';
import Header from './components/header/header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Products from './components/products/products';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route path = '/' exact={true} element = {<Homepage/>}/>
          <Route path = '/products' exact={true} element = {<Products/>}/>
          <Route path = '/login' exact={true} element = {<Login/>}/>
        </Routes>

      </div>
    )
  }
}

export default App;
