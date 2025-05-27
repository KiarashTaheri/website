import { useContext, useEffect, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { experiences, projects } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const toggleNavList = () => setShowNavList(!showNavList)
  useEffect(() => {
    if (showNavList) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showNavList]);

  return (
    <nav className='center nav'>
      <ul style={{ display: showNavList ? 'flex' : null }} className='nav__list'>
        <li className='nav__list-item'>
          <a href='/' onClick={toggleNavList} className='link link--nav'>
            Home
          </a>
        </li>
        {experiences.length ? (
          <li className='nav__list-item'>
            <a href='/about' onClick={toggleNavList} className='link link--nav'>
              About
            </a>
          </li>
        ) : null}
        {experiences.length ? (
          <li className='nav__list-item'>
            <a href='/experience' onClick={toggleNavList} className='link link--nav'>
              Experience
            </a>
          </li>
        ) : null}
        {projects.length ? (
          <li className='nav__list-item'>
            <a href='/projects' onClick={toggleNavList} className='link link--nav'>
              Projects
            </a>
          </li>
        ) : null}

      </ul>
      <button type='button' onClick={toggleTheme} className='btn btn--icon nav__theme' aria-label='toggle theme'>
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
      <button type='button' onClick={toggleNavList} className='btn btn--icon nav__hamburger' aria-label='toggle navigation'>
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar