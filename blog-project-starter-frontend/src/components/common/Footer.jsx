import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-12 lg:py-16 xl:px-16">
                <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-8 sm:grid-cols-2 sm:gap-10 sm:pb-10 lg:grid-cols-4 lg:gap-8 xl:gap-12">
                    <div className="sm:col-span-2 lg:col-span-2">
                        <Link to="/home" className="inline-flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 text-lg font-black text-slate-950 shadow-lg shadow-orange-500/20 sm:h-12 sm:w-12 sm:text-xl">JD<span className="text-white">.</span></span>
                            <span>
                                <span className="block text-xl font-black tracking-tight sm:text-2xl">JD <span className="text-orange-400">DEV</span></span>
                                <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-[10px] sm:tracking-[0.2em]">Build · Create · Develop</span>
                            </span>
                        </Link>
                        <p className="mt-5 max-w-md text-sm leading-6 text-slate-400 sm:mt-6 sm:text-base sm:leading-7">I'm an aspiring Full Stack Developer passionate about building responsive websites, learning new technologies, and creating useful digital experiences.</p>
                        <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-2 text-xs font-medium text-green-300 sm:mt-6 sm:px-4 sm:text-sm">
                            <span className="h-2 w-2 shrink-0 rounded-full bg-green-400"></span>
                            <span>Open to Entry-Level Opportunities</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-white sm:tracking-[0.18em]">Quick Links</h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-400 sm:mt-5 sm:space-y-4">
                            <li><Link to="/home" className="transition-colors hover:text-orange-400">Home</Link></li>
                            <li><Link to="/blogs" className="transition-colors hover:text-orange-400">Blogs</Link></li>
                            <li><Link to="/about" className="transition-colors hover:text-orange-400">About Me</Link></li>
                            <li><Link to="/home#skills" className="transition-colors hover:text-orange-400">Technologies</Link></li>
                            <li><Link to="/home#projects" className="transition-colors hover:text-orange-400">My Projects</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-white sm:tracking-[0.18em]">What I Focus On</h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-400 sm:mt-5 sm:space-y-4">
                            <li className="flex items-start gap-3"><span className="mt-0.5 text-orange-400">✦</span>Frontend Development</li>
                            <li className="flex items-start gap-3"><span className="mt-0.5 text-orange-400">✦</span>Responsive Web Design</li>
                            <li className="flex items-start gap-3"><span className="mt-0.5 text-orange-400">✦</span>JavaScript & React</li>
                            <li className="flex items-start gap-3"><span className="mt-0.5 text-orange-400">✦</span>Continuous Learning</li>
                        </ul>
                        <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 sm:mt-7 sm:w-auto sm:justify-start">Let's Connect <span aria-hidden="true">↗</span></a>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3 pt-6 text-center sm:gap-4 sm:pt-7 lg:flex-row lg:justify-between lg:text-left">
                    <p className="text-xs leading-5 text-slate-400 sm:text-sm">© {new Date().getFullYear()} <span className="font-bold text-white">JD DEV</span>. All rights reserved.</p>
                    <a href="#home" className="text-sm font-semibold text-slate-400 transition-colors hover:text-orange-400">Back to top ↑</a>
                    <p className="text-xs text-slate-500">Built with React & Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer