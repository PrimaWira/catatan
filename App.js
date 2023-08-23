import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Main from './components/Main'
import Home from './components/Page/Home'
import {Route , Routes ,BrowserRouter} from 'react-router-dom'
import About from './components/Page/About'
import Contact from './components/Page/Contact'
// import Navbar from './components/Navbar'

const App = () => {
  return (

    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}/>
        <Route path='About' element={<About />}/>
        <Route path='Contact' element={<Contact />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App