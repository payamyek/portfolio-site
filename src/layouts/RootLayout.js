import classnames from 'classnames'
import { useEffect, useState } from 'react'
import MobileNavBar from '../components/MobileNavBar'
import NavBar from '../components/NavBar'
import PageHeading from '../components/PageHeading'
import PersonalLinks from '../components/PersonalLinks'

import { Outlet } from 'react-router-dom'
import { getBranchLatestCommitDate } from '../api/githubAPI'
import Footer from '../components/Footer'
import UserDetails from '../components/UserDetails'

let Home = (props) => {
  const [lastUpdated, setLastUpdated] = useState('')
  const [theme, setTheme] = useState('dark')
  const [loading, setLoading] = useState(true) // prevent FOUC

  useEffect(() => {
    getBranchLatestCommitDate().then((date) => setLastUpdated(date))
    setLoading(false)
  }, [])

  useEffect(() => {
    if (localStorage.theme === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    const meta = document.querySelector("meta[name='theme-color']")

    // safeguard
    if (meta === undefined)
      return

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      meta.content = 'rgb(24 24 27)' // need for notch coloring on iPhones
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      meta.content = 'rgb(224 242 254)'
      localStorage.theme = 'light'
    }
  }, [theme])

  return (
    <div className={classnames({ flex: !loading, hidden: loading }, 'h-screen')}>
      <NavBar
        theme={theme}
        setTheme={setTheme}
      />
      <div className="lg:mt-10 mx-auto flex flex-col mt-5 xl:w-1/2 lg:w-4/5 w-5/6 select-none">
        <div className="lg:flex-row flex flex-col">
          {props.isCondensedView ? null : <PageHeading />}
          <MobileNavBar
            setTheme={setTheme}
            theme={theme}
          />
          {props.isCondensedView ? null : <PersonalLinks />}
        </div>
        {props.isCondensedView ? null : <UserDetails />}
        <Outlet />
        <Footer lastUpdated={lastUpdated} />
      </div>
      <div className="basis-1/4 hidden lg:flex"></div>
    </div>
  )
}

export default Home
