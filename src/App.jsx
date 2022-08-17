import './App.css'
import {useState} from 'react'


function Navbar() {
  return (
    <div className="header">
      <h1 className="logo">SV</h1>
      <nav className="links">
        <a href="#About">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
      </nav>
    </div>
  )
}

function Hero() {

  const [role, setRole] = useState('software developer')

  const rolechoose = (e) => {
    if(e == "software developer") {
      return "data scientist"
    }
    if(e == "data scientist") {
      return "web designer"
    }
    if(e == "web designer") {
      return "software developer"
    }
  }

  return (
    <div className="hero">
      <h4 className='hero--hello'>Hello, my name is</h4>
      <h1><strong>Simon Varadaraj.</strong></h1>
      <h2>Its a pleasure to meet you.</h2>
      <p className='hero--info'>I am a <span className='hero--role' onClick={() => setRole(rolechoose(role))}>{role}
      </span> currently enrolled at Texas A&M University for Computer Science. I want to create beautiful applications that have an impact on the world.</p>
    </div>
  )

}

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="line"></div>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <div className="placeholder">
          
        </div>
        <div className="content">
          <Hero />
          <About />
        </div>
        <div className='icons'>
          <a href="https://github.com/simonvaradaraj">Github</a>
          <a href="https://www.linkedin.com/in/simonvaradaraj/">LinkedIn</a>
          <a href="https://www.youtube.com/channel/UC2lqBe4wRD5MVqyJxTPcEZw">Youtube</a>  
        </div>
        
      </div>
    </div>
  )
}

export default App
