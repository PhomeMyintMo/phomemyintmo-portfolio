
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


const MainPages = () => {
  return(
    <>
    <Home/>
    <Skills/>
    <Projects/>
    <Experience/>
    </>
  )
}

function App() {

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<MainPages/>}/>
      <Route path='/projects' element={<AllProjects/>}></Route>
    </Routes>
    <Footer/>
    <FloatingChat/>
    </Router>
  )
}

export default App
