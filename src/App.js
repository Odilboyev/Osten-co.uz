import React from 'react'
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom'
import Header from './containers/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Production from './Pages/Production';
import Footer from './containers/Footer';
import Services from './Pages/Services';
import Product from './Pages/Products';
import Constructor from './Pages/Constructor';
import News from './Pages/News';
import Contacts from './Pages/Contacts';

function App() {
  return (
    <>
      <Header />

      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
      <Switch>
        <Route path='/production' component={Production} />
      </Switch>

      <Switch>
        <Route path='/services' component={Services} />
      </Switch>
      <Switch>
        <Route path='/product' component={Product} />
      </Switch>
      <Switch>
        <Route path='/constructor' component={Constructor} />
      </Switch>
      <Switch>
        <Route path='/news' component={News} />
      </Switch>
      <Switch>
        <Route path='/contacts' component={Contacts} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
