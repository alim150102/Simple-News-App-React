import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Home from './components/home/Home'
import Galery from './components/galery/Galery'
import ContactUs from './components/contact/ContactUs'
import News from './components/news/News'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' exact component={Home}/>
      <Route path='/news' component={News}/>
      <Route path='/galery' component={Galery}/>
      <Route path='/contact-us' component={ContactUs} />
    </div>
  )
  
}

export default App;
