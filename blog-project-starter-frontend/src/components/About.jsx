import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css-3.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import DB from "../assets/data-server.png"
import NODE from "../assets/node-js.png"
import Footer from "./common/Footer"

function About() {
    const technologies = [
        { name: "HTML5", description: "Page Structure", image: HTML, color: "bg-orange-50" },
        { name: "CSS3", description: "Visual Styling", image: CSS, color: "bg-blue-50" },
        { name: "JavaScript", description: "Web Interactions", image: JS, color: "bg-yellow-50" },
        { name: "React", description: "UI Components", image: REACTICON, color: "bg-cyan-50" },
        { name: "Database", description: "Data Concepts", image: DB, color: "bg-indigo-50" },
        { name: "Node.js", description: "Backend Basics", image: NODE, color: "bg-green-50" }
    ]

    return (
        <div id="home" className="w-full overflow-hidden bg-white text-slate-900">
            <section className="relative px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-16">
                <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-orange-100/60 blur-3xl sm:h-72 sm:w-72"></div>
                <div className="relative mx-auto grid max-w-screen-2xl items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    <div className="min-w-0">
                        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-600 sm:px-4 sm:text-sm"><span className="h-2 w-2 rounded-full bg-green-500"></span>ABOUT MY JOURNEY</span>
                        <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:mt-6 sm:text-4xl md:text-5xl xl:text-6xl">Starting My Journey in <span className="text-orange-500">Web Development</span></h1>
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">I'm an aspiring Full Stack Developer who enjoys building responsive websites and interactive web applications. I focus on understanding how things work, writing clean code, and creating useful digital experiences.</p>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">As a fresher, I'm looking for an opportunity to contribute to a development team, learn from experienced developers, and improve my skills by solving real-world problems.</p>
                        <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
                            <a href="/resume.pdf" download className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl min-[420px]:w-auto sm:px-6 sm:text-base">Download CV <span aria-hidden="true">↓</span></a>
                            <a href="/home#projects" className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 transition duration-300 hover:border-orange-300 hover:bg-orange-50 min-[420px]:w-auto sm:px-6 sm:text-base">View My Projects →</a>
                        </div>
                        <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">Open to entry-level opportunities and collaboration.</p>
                    </div>
                    <div className="relative mx-auto w-full min-w-0 max-w-xl lg:max-w-none">
                        <div className="absolute -left-2 top-8 h-16 w-16 rounded-2xl bg-orange-200 sm:-left-4 sm:h-24 sm:w-24 sm:rounded-3xl lg:-left-5"></div>
                        <div className="absolute -right-2 bottom-8 h-20 w-20 rounded-full bg-purple-200 sm:-right-4 sm:h-28 sm:w-28 lg:-right-4"></div>
                        <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70 sm:rounded-3xl sm:p-7 md:p-9 lg:p-7 xl:p-10">
                            <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                                <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-widest text-orange-500 sm:text-sm">My Mindset</p><h2 className="mt-2 text-xl font-extrabold sm:text-2xl">Learn. Build. Improve.</h2></div>
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-lg text-white sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">{"</>"}</div>
                            </div>
                            <div className="mt-6 space-y-5 sm:space-y-6">
                                <div className="flex gap-3 sm:gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-base sm:h-11 sm:w-11 sm:text-xl">01</div><div className="min-w-0"><h3 className="text-sm font-bold sm:text-base">Understand the concept</h3><p className="mt-1 text-sm leading-6 text-slate-600">Learn the fundamentals before applying them in code.</p></div></div>
                                <div className="flex gap-3 sm:gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-base sm:h-11 sm:w-11 sm:text-xl">02</div><div className="min-w-0"><h3 className="text-sm font-bold sm:text-base">Build practical projects</h3><p className="mt-1 text-sm leading-6 text-slate-600">Turn concepts into useful interfaces and features.</p></div></div>
                                <div className="flex gap-3 sm:gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-base sm:h-11 sm:w-11 sm:text-xl">03</div><div className="min-w-0"><h3 className="text-sm font-bold sm:text-base">Test and improve</h3><p className="mt-1 text-sm leading-6 text-slate-600">Debug issues, learn from mistakes, and refine the result.</p></div></div>
                            </div>
                            <div className="mt-7 rounded-xl bg-slate-900 p-4 text-white sm:rounded-2xl sm:p-5"><p className="text-sm text-slate-300">My goal</p><p className="mt-2 text-base font-bold leading-7 sm:text-lg">Become a developer who can build and explain real-world applications.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 xl:px-16">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-sm sm:tracking-[0.25em]">My Foundation</p><h2 className="mt-4 text-2xl font-extrabold sm:text-3xl md:text-4xl xl:text-5xl">Technologies I'm Learning</h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">These technologies are part of my web development toolkit as I build projects and strengthen my understanding.</p></div>
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-5 lg:mt-12 lg:grid-cols-6">
                        {technologies.map((technology) => (
                            <div key={technology.name} className="group flex min-w-0 flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:rounded-2xl sm:p-5 lg:p-4 xl:p-6">
                                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl sm:mb-4 sm:h-16 sm:w-16 sm:rounded-2xl ${technology.color} transition duration-300 group-hover:scale-110`}><img src={technology.image} alt={`${technology.name} logo`} loading="lazy" className="h-8 w-8 object-contain sm:h-10 sm:w-10" /></div>
                                <h3 className="text-sm font-bold text-slate-900 sm:text-base">{technology.name}</h3><p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{technology.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 xl:px-16">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="text-center"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-sm sm:tracking-[0.25em]">How I Work</p><h2 className="mt-4 text-2xl font-extrabold sm:text-3xl md:text-4xl">My Approach to Development</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">I believe good development comes from understanding the problem, breaking it into manageable tasks, and improving through testing.</p></div>
                    <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl sm:h-12 sm:w-12">⌘</div><h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">Problem Solving</h3><p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">Break a problem into smaller steps, understand the cause, and work toward a clear solution.</p></div>
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl sm:h-12 sm:w-12">⌁</div><h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">Continuous Learning</h3><p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">Strengthen my fundamentals by practising concepts and applying them in projects.</p></div>
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:rounded-2xl sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl sm:h-12 sm:w-12">✓</div><h3 className="mt-4 text-lg font-bold sm:mt-5 sm:text-xl">Clean User Interfaces</h3><p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">Create responsive, accessible layouts that are clear and comfortable to use.</p></div>
                    </div>
                </div>
            </section>
            <section id="contact" className="px-4 pb-12 sm:px-6 sm:pb-16 md:px-10 lg:px-12 xl:px-16">
                <div className="mx-auto flex max-w-screen-2xl flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-5 text-white shadow-xl sm:rounded-3xl sm:p-8 md:p-10 lg:flex-row lg:items-center lg:p-12">
                    <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">Let's Connect</p><h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">Have an opportunity for a fresher?</h2><p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">I'm interested in entry-level developer roles where I can contribute, learn from a team, and grow through practical experience.</p></div>
                    <a href="mailto:your-email@example.com" className="inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-orange-400 sm:w-auto sm:text-base">Get in Touch →</a>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default About