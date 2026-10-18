import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import auth from '../../config/firebase'

function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const [log, setLog] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        setLog(true)
        console.log("User Logged In")
      } else {
        setLog(false)
        console.log("User Logged Out")
      }
    })
    return () => unsubscribe()
  }, [])


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setLog(false)
        closeMenu()
      })
      .catch((error) => {
        console.log("Error signing out:", error.message)
      })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8 lg:px-12 lg:py-4">
        <Link to="/home" onClick={closeMenu} className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 shadow-sm sm:h-12 sm:w-12 lg:h-14 lg:w-14">
            <span className="text-xl font-black tracking-tighter text-white sm:text-2xl lg:text-3xl">J<span className="text-orange-500">D</span></span>
            <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-black leading-none tracking-tight text-slate-900 sm:text-xl lg:text-2xl">JD <span className="text-orange-500">DEV</span></h2>
            <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[9px] sm:tracking-[0.18em] lg:text-[10px]">Build · Create · Develop</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex lg:gap-3">
          <Link to="/home" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600 lg:px-4 lg:text-base">Home</Link>
          <Link to="/blogs" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600 lg:px-4 lg:text-base">Blogs</Link>
          <Link to="/about" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600 lg:px-4 lg:text-base">About</Link>
          {log ? (
            <button type="button" onClick={handleLogout} className="ml-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition duration-300 hover:bg-orange-600 lg:px-6 lg:py-3 lg:text-base">Logout</button>
          ) : (
            <button type="button" onClick={() => navigate('/login')} className="ml-2 rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition duration-300 hover:bg-orange-600 lg:px-6 lg:py-3 lg:text-base">Login</button>
          )}
        </div>

        <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-orange-50 md:hidden">
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" /></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg sm:px-6 md:hidden">
          <div className="mx-auto flex max-w-screen-sm flex-col gap-1">
            <Link to="/home" onClick={closeMenu} className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600">Home</Link>
            <Link to="/blogs" onClick={closeMenu} className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600">Blogs</Link>
            <Link to="/about" onClick={closeMenu} className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600">About</Link>
            {log ? (
              <button type="button" onClick={handleLogout} className="mt-2 w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600">Logout</button>
            ) : (
              <button type="button" onClick={() => { closeMenu(); navigate('/login') }} className="mt-2 w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600">Login</button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar