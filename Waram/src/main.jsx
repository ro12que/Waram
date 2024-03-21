import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './Nav'
import Hero from './Hero'
import Help from './Help'
import Services from './Services'
import Values from './Values'
import Team from './Team'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <Nav />
    <Hero />
    <Help />
    <Services />
    <Values />
    <Team />
    <Footer />
  </div>,
)
