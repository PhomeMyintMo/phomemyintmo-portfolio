
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Experience from './sections/Experience'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { AllProjects } from './pages/AllProjects'
import FloatingChat from './components/FloatingChat'
import Chat from './components/Chat'


const MainPages = () => {
  return(
    <div className='space-y-32 mx-auto p-8 sm:p-16 md:p-24'>
    <Home/>
    <Skills/>
    <Projects/>
    <Experience/>
    </div>
  )
}

function App() {

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<MainPages/>}/>
      <Route path='/projects' element={<AllProjects/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
    </Routes>
    <Footer/>
    <FloatingChat/>
    </Router>
  )
}

export default App
