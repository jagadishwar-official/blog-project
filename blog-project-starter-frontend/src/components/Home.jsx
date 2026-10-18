import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import Footer from './common/Footer'

function Home() {
    const navigate = useNavigate()
    const skills = [
        { image: HTML, name: "HTML5", category: "Markup" },
        { image: CSS, name: "CSS3", category: "Styling" },
        { image: JS, name: "JavaScript", category: "Programming" },
        { image: REACTICON, name: "React", category: "Frontend" },
        { image: DB, name: "Database", category: "Data" },
        { image: NODE, name: "Node.js", category: "Backend" }
    ]
    const services = [
        { number: "01", icon: "✦", title: "Frontend Development", description: "Building clean, responsive user interfaces with HTML, CSS, JavaScript and React." },
        { number: "02", icon: "▣", title: "Responsive Web Design", description: "Creating layouts that look and work well across mobile, tablet and desktop screens." },
        { number: "03", icon: "⌘", title: "Interactive Websites", description: "Adding useful interactions, navigation and dynamic features to web applications." }
    ]
    const projects = [
        { image: P1, title: "Actodo Management", type: "Task Management", description: "A project focused on organizing tasks and presenting daily activities in a clear interface.", tech: ["HTML", "CSS", "JavaScript"] },
        { image: P2, title: "Fitness Website", type: "Web Design", description: "A fitness-themed website concept with bold visuals and a focused presentation.", tech: ["HTML", "CSS", "JavaScript"] },
        { image: P3, title: "Student Management", type: "Management System", description: "A student management project designed to organize and display information clearly.", tech: ["React", "JavaScript", "CSS"] }
    ]

    return (
        <div className="min-h-screen w-full overflow-hidden bg-white text-slate-900">
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50">
                <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl sm:h-80 sm:w-80"></div>
                <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl sm:h-80 sm:w-80"></div>
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 md:grid-cols-2 md:px-8 md:py-20 lg:min-h-[650px] lg:gap-16 lg:px-12 xl:px-16">
                    <div className="order-2 min-w-0 md:order-1">
                        <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-200 bg-white/90 px-3 py-2 text-xs font-semibold text-orange-600 shadow-sm sm:px-4 sm:text-sm"><span className="h-2 w-2 shrink-0 rounded-full bg-green-500"></span>Fresher · Open to Opportunities</div>
                        <p className="mt-6 text-base font-medium text-slate-600 sm:mt-8 sm:text-lg">Hello, I'm</p>
                        <h1 className="mt-2 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">Jacky <span className="text-orange-500">Thomas</span></h1>
                        <h2 className="mt-4 text-xl font-bold text-slate-700 sm:mt-5 sm:text-2xl lg:text-3xl">Aspiring Full Stack Developer</h2>
                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">I'm a fresher passionate about building responsive websites and interactive web applications. I enjoy solving problems, learning modern technologies, and turning ideas into useful digital experiences.</p>
                        <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
                            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl min-[420px]:w-auto sm:px-7 sm:py-4 sm:text-base">Hire Me <span aria-hidden="true">↗</span></a>
                            <a href="#projects" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition duration-300 hover:border-orange-400 hover:text-orange-600 min-[420px]:w-auto sm:px-7 sm:py-4 sm:text-base">View Projects <span aria-hidden="true">↓</span></a>
                        </div>
                        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-600 sm:mt-8 sm:gap-x-6 sm:text-sm"><span>✓ Eager to Learn</span><span>✓ Team Collaboration</span><span>✓ Practical Projects</span></div>
                    </div>
                    <div className="order-1 flex min-w-0 justify-center md:order-2">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-3 rotate-6 rounded-2xl bg-orange-300 sm:inset-5 sm:rounded-[2rem]"></div>
                            <div className="absolute -right-2 top-8 h-16 w-16 rounded-full border-8 border-purple-200 sm:-right-4 sm:top-10 sm:h-24 sm:w-24 sm:border-[12px]"></div>
                            <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-full bg-purple-200 sm:-bottom-5 sm:-left-5 sm:h-24 sm:w-24"></div>
                            <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-2.5 shadow-2xl shadow-slate-300/60 sm:rounded-[2rem] sm:p-3">
                                <img src={BlogProfileImage} className="w-full rounded-xl object-contain sm:rounded-2xl" alt="Portfolio hero illustration" />
                                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/60 bg-white/95 p-3 shadow-lg backdrop-blur sm:bottom-7 sm:left-7 sm:right-7 sm:p-4"><p className="text-xs font-semibold text-slate-500 sm:text-sm">Currently focused on</p><p className="mt-1 text-sm font-extrabold text-slate-900 sm:text-lg">Building better web experiences</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="scroll-mt-24 border-y border-slate-200 bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 xl:px-16">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="mx-auto max-w-2xl text-center"><span className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">My Toolkit</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:mt-5 sm:text-4xl md:text-5xl">Technologies I'm Learning</h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">The technologies I'm using to build projects, strengthen my fundamentals, and develop practical web development skills.</p></div>
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:mt-12 lg:grid-cols-6 lg:gap-5">
                        {skills.map((skill, index) => (
                            <article key={skill.name} className="group relative min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-center transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:bg-white hover:shadow-xl hover:shadow-orange-100/70 sm:rounded-2xl sm:p-5 lg:p-6">
                                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 to-amber-300 transition-transform duration-300 group-hover:scale-x-100"></div>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm transition duration-300 group-hover:scale-110 group-hover:shadow-md sm:h-16 sm:w-16 sm:rounded-2xl"><img src={skill.image} className="h-8 w-8 object-contain sm:h-10 sm:w-10" alt={skill.name} loading="lazy" /></div>
                                <p className="mt-4 text-xs font-bold tracking-widest text-orange-500 sm:mt-5">0{index + 1}</p><h3 className="mt-2 break-words text-sm font-extrabold text-slate-900 sm:text-base lg:text-lg">{skill.name}</h3><p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">{skill.category}</p>
                            </article>
                        ))}
                    </div>
                    <div className="mt-7 flex items-start justify-center gap-2 text-center text-xs leading-6 text-slate-500 sm:mt-8 sm:text-sm"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500"></span>Building practical experience through projects and consistent practice</div>
                </div>
            </section>
            <section id="about" className="scroll-mt-24 overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-slate-50 px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28 xl:px-16">
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="min-w-0">
                        <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 shadow-sm">A Little About Me</span>
                        <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-4xl md:text-5xl xl:text-6xl">Starting My Journey in <span className="text-orange-500">Web Development</span></h2>
                        <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">As a fresher, I'm building my foundation through hands-on projects and consistent practice. I enjoy creating responsive interfaces, solving problems, and understanding how frontend development connects with application logic.</p>
                        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">I'm looking for an opportunity to contribute to a development team, learn from experienced developers, and improve my skills by solving real-world problems.</p>
                        <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
                            <a href="/JD-DEV-CV.pdf" download="JD-DEV-CV.pdf" className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl min-[420px]:w-auto sm:py-4 sm:text-base"><span aria-hidden="true">↓</span>Download CV</a>
                            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition-colors hover:border-orange-400 hover:text-orange-600 min-[420px]:w-auto sm:py-4 sm:text-base">Let's Connect <span aria-hidden="true">↗</span></a>
                        </div>
                        <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">Open to entry-level opportunities and collaborative projects.</p>
                    </div>
                    <div className="relative min-w-0">
                        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-200/60 blur-2xl sm:-right-6 sm:-top-6 sm:h-32 sm:w-32"></div>
                        <div className="relative grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5">
                            <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-xl transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-2xl text-orange-400 sm:h-12 sm:w-12 sm:rounded-2xl">⌘</div><h3 className="mt-5 text-xl font-extrabold sm:mt-6 sm:text-2xl">Hands-on Projects</h3><p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">Learning through practical implementation, testing, and continuous improvement.</p></div>
                            <div className="rounded-2xl border border-green-100 bg-green-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-2xl text-green-700 sm:h-12 sm:w-12 sm:rounded-2xl">↗</div><h3 className="mt-5 text-xl font-extrabold text-green-800 sm:mt-6 sm:text-2xl">Growth Mindset</h3><p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">Learning from feedback, debugging errors, and writing better code.</p></div>
                            <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm min-[480px]:col-span-2 sm:rounded-3xl sm:p-7"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-600">My Approach</p><p className="mt-4 text-lg font-extrabold leading-8 text-slate-900 sm:text-xl lg:text-2xl">Learn the concept. Build the feature. Test the result. Improve the experience.</p><div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-300"></div></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative overflow-hidden bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 xl:px-16">
                <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl sm:h-64 sm:w-64"></div>
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl sm:h-64 sm:w-64"></div>
                <div className="relative mx-auto max-w-screen-2xl">
                    <div className="flex flex-col justify-between gap-4 sm:gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 sm:text-sm">What I Can Do</p><h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">My Development Focus</h2></div><p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">I'm developing practical skills to create websites that are useful, responsive, and easy to navigate.</p></div>
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
                        {services.map((service) => (
                            <article key={service.number} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-orange-400/60 hover:bg-white/[0.08] sm:p-7 md:hover:-translate-y-2"><div className="flex items-center justify-between"><span className="text-3xl text-orange-400 sm:text-4xl">{service.icon}</span><span className="text-sm font-bold tracking-widest text-slate-500">{service.number}</span></div><h3 className="mt-6 text-lg font-bold sm:mt-7 sm:text-xl">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base">{service.description}</p><div className="mt-6 h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20 sm:mt-7"></div></article>
                        ))}
                    </div>
                </div>
            </section>
            <section id="projects" className="scroll-mt-24 bg-gradient-to-b from-slate-50 to-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-28 xl:px-16">
                <div className="mx-auto max-w-screen-2xl">
                    <div className="flex flex-col justify-between gap-4 sm:gap-5 md:flex-row md:items-end"><div><span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-700">My Portfolio</span><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:mt-5 sm:text-4xl md:text-5xl">Projects I've Built</h2></div><p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">A selection of projects that helped me practise user interface design, JavaScript functionality, and application development.</p></div>
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
                        {projects.map((project, index) => (
                            <article key={project.title} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-300/50 sm:rounded-3xl md:hover:-translate-y-2">
                                <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-slate-100 bg-slate-100 p-3 sm:h-56 lg:h-60 xl:h-64"><span className="absolute left-3 top-3 z-10 rounded-full border border-white/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm sm:left-4 sm:top-4">{project.type}</span><img src={project.image} className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]" alt={project.title} loading="lazy" /></div>
                                <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7"><div className="flex items-center justify-between gap-3"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange-600">Project 0{index + 1}</p><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">Portfolio</span></div><h3 className="mt-3 break-words text-xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-orange-600 sm:text-2xl">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tech.map((technology) => <span key={technology} className="rounded-lg border border-orange-100 bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-700">{technology}</span>)}</div><div className="mt-6 border-t border-slate-100 pt-4"><span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition-colors group-hover:text-orange-600">Project overview <span aria-hidden="true">↗</span></span></div></div>
                            </article>
                        ))}
                    </div>
                    <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/70 p-5 text-center sm:mt-10 sm:p-8"><h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">Every project is a learning experience.</h3><p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">I'm focused on understanding the code, solving problems, and improving the usability of the applications I build.</p></div>
                </div>
            </section>
            <section className="px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-12 lg:py-24 xl:px-16">
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-7 overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-100 p-5 sm:gap-10 sm:rounded-3xl sm:p-8 md:p-10 lg:grid-cols-2 lg:p-14">
                    <div className="flex min-w-0 justify-center"><img src={BlogImage} className="w-full max-w-sm object-contain transition duration-300 hover:scale-105 sm:max-w-md" alt="Technology blog illustration" loading="lazy" /></div>
                    <div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:text-sm">Ideas Worth Sharing</p><h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">Learning, Building & <span className="text-orange-500">Writing About Tech</span></h2><p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">Visit my blog page to explore technology topics, development ideas, and insights from my learning and project experiences.</p><button type="button" onClick={() => navigate("/blogs")} className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-500 sm:mt-7 sm:w-auto sm:px-7 sm:py-4 sm:text-base">Read My Blogs <span aria-hidden="true">→</span></button></div>
                </div>
            </section>
            <section id="contact" className="scroll-mt-24 px-4 pb-14 sm:px-6 sm:pb-16 md:px-8 lg:px-12 lg:pb-24 xl:px-16">
                <div className="relative mx-auto max-w-screen-2xl overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-5 py-10 text-center text-white shadow-xl shadow-orange-200/60 sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-16">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border-[30px] border-white/10 sm:h-64 sm:w-64 sm:border-[40px]"></div><div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-amber-300/20 blur-2xl sm:h-64 sm:w-64"></div>
                    <div className="relative"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100 sm:text-sm">Let's Work Together</p><h2 className="mx-auto mt-4 max-w-3xl text-2xl font-black leading-tight sm:text-3xl md:text-4xl xl:text-5xl">Looking for a Fresher Who's Ready to Learn and Contribute?</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-orange-50 sm:text-base sm:leading-8">I'm eager to begin my professional journey, collaborate with a team, and grow as a developer by working on meaningful projects.</p><div className="mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8"><a href="mailto:YOUR_EMAIL@example.com" className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-orange-600 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl min-[420px]:w-auto sm:px-7 sm:py-4 sm:text-base">Contact Me ↗</a><a href="#projects" className="w-full rounded-xl border border-white/60 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:bg-white/10 min-[420px]:w-auto sm:px-7 sm:py-4 sm:text-base">Explore Projects</a></div></div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Home