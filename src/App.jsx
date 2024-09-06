import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Testimonial from './pages/Testimonial';
import Kelas from './pages/Kelas';
import SyaratKetentuan from './pages/SyaratKetentuan';
import Faq from './pages/Faq';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/project' Component={Kelas} />
      <Route path='/testimonial' Component={Testimonial} />
      <Route path='/faq' Component={Faq} />
      <Route path='/syaratketen' Component={SyaratKetentuan} />
    </Routes> 
    <Footer/>
    </>
  )
}

export default App
