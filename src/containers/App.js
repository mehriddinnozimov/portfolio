import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { person, contact, skills, about, education } from '../portfolio'

import Navbar from '../components/Navbar/Navbar'
import Start from '../components/Start/Start'
import Pre from '../components/Pre/Pre'
import Progress from '../components/Progress/Progress'
import Scroll from '../components/Scroll/Scroll'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { useState } from 'react';

library.add(faFontAwesome, faGithub, faPhone, faEnvelope )

function App() {
  const [ start, setStart ] = useState(false)
  const [ page, setPage ] = useState(25)
  const [ object, setObject ] = useState({
    xabar: "Shaxs havolasini bosing"
  })

  function changeObject(obj, value) {
    setObject(obj)
    setPage(value)
  }
  return (
    <div className='container bg'>
      { start ? (
        <div className="pt-3">
          <Navbar />
          <div className="opa">
            <div className="container py-3">
              <div> 
                <nav class="nav">
                  <a class="nav-link text-violet" href="#person" onClick={() => changeObject(person, 0)}>Shaxs</a>
                  <a class="nav-link text-violet" href="#person" onClick={() => changeObject(education, 25)}>Ta'lim</a>
                  <a class="nav-link text-violet" href="#skills" onClick={() => changeObject(skills, 50)}>Qobiliyatlar</a>
                  <a class="nav-link text-violet" href="#about" onClick={() => changeObject(about, 75)}>Haqimda</a>
                  <a class="nav-link text-violet" href="#contact" onClick={() => changeObject(contact, 100)}>Bog`lanish</a>
                </nav>
              </div>
              <div className="my-5 h-300">
              <Scroll><Pre>{object}</Pre></Scroll>
              </div>
              <Progress page={page}/>
            </div>
          </div>
        </div>
      ) : (
        <Start start={start} setStart={() => setStart(true)} />
      )
      }
    </div>
  )
}

export default App;
