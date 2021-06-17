
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './AppComponents/Navbar'
import Footer from './AppComponents/Footer'

import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import About from './Pages/About'



function App() {
  return (
    <div className='App'>
    <Router>
      <Navbar />

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/menu'  component={Menu}/>
        <Route path='/contact_us'  component={Contact}/>
        <Route path='/about_us'  component={About}/>
      </Switch>

      <Footer />
      
    </Router>
    </div>
  );
}

export default App;
