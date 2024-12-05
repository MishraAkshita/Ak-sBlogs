import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Newsletter from './pages/NewsLetter/Newsletter';
import AboutMe from './pages/About/AboutMe';




const App = () => {
  return(
 <Router>
  <Navbar></Navbar>

  <Routes>
  <Route path="/" element={<Home />} />
 
  <Route path= "/newsletter" element={<Newsletter/>}/>
  <Route path='/about' element={<AboutMe/>}/>
  </Routes>
  <Footer></Footer>
 </Router>

 )

}

export default App