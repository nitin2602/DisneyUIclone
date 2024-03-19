import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Hovercards from './Components/Hovercards'
import Moivegenres from './Components/MovieGenres/Moivegenres';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Hovercards />
      <div  className='p-8 px-8 md:px-16'>

      <Moivegenres title={"Action"}  genreid="28"/>
      <Moivegenres title={"Animation"} genreid="16"/>
      <Moivegenres title={"Comedy"} genreid="35"/>
      <Moivegenres title={"Crime"} genreid="80"/>
      </div>
      <Footer />
    </div>
  )
}

export default App