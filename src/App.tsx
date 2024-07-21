import { Routes, Route } from 'react-router-dom'
import { scrollReveal } from './util/scrollReveal'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import ProjectDetails from './components/ProjectDetails'
import PastProjects from './components/PastProjects'
import Experience from './components/Experience'


window.addEventListener('load', scrollReveal)
window.addEventListener('scroll', scrollReveal)
window.addEventListener('resize', scrollReveal)

function App() {

  return (
    <div className="App container md:max-w-7xl mx-auto">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/projects" element={<PastProjects />} />
        </Routes>
      </ScrollToTop>
    </div>
  )
}

export default App
