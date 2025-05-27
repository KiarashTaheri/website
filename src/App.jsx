import { inject } from '@vercel/analytics'
import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  inject()

  return (
    <Router>
      <div className={`${themeName} app`}>
        <div className='page'>
          <Header />
          <Routes>
            <Route path="/" element={<main><Home /></main>} />
            <Route path="/resume" element={<main><Resume /></main>} />
            <Route path="/about" element={<main><About /></main>} />
            <Route path="/experience" element={<main><Experience /></main>} />
            <Route path="/projects" element={<main><Projects /></main>} />
          </Routes>
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App