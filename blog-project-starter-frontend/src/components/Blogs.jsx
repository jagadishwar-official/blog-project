import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from './common/Footer'
import auth from '../config/firebase'

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [admin, setAdmin] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        const unsubscribe = auth.onAuthStateChanged(function(user) {
            if (user) {
                if (user.uid === "YFjKxmJ6tubmuzE8Jexu0lY9AI82") {
                    setAdmin(true)
                } else {
                    setAdmin(false)
                    setShowForm(false)
                }
            } else {
                setAdmin(false)
                setShowForm(false)
                navigate('/login', { replace: true })
            }
        })
        axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`).then((res) => {
            setBlogs(res.data)
            setError('')
        }).catch(() => {
            setError('Unable to load blogs. Please check whether the backend server is running.')
        }).finally(() => setLoading(false))
        return () => unsubscribe()
    }, [navigate])

    const fetchBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/blogs')
            setBlogs(res.data)
            setError('')
        } catch {
            setError('Unable to refresh blogs. Please try again.')
        }
    }

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/blogs/like/${blog_id}`)
            if (response.status === 200) await fetchBlogs()
        } catch (error) {
            console.error('Error liking the blog post:', error)
            setError('Could not like this blog. Please try again.')
        }
    }

    const handleNewBlogSubmit = async (event) => {
        event.preventDefault()
        if (!admin) {
            setError('Only the admin can create blogs.')
            return
        }
        setSubmitting(true)
        setError('')
        const today = new Date()
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        const likes = 0
        try {
            await axios.post('http://localhost:5000/api/blogs', { newTitle, date, newContent, likes })
            await fetchBlogs()
            setNewTitle('')
            setNewContent('')
            setShowForm(false)
        } catch (error) {
            console.error('Error creating blog:', error)
            setError('Unable to publish your blog. Please check your backend and try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen w-full overflow-hidden bg-slate-50 text-slate-900">
            <section className="relative overflow-hidden bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-16">
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl sm:h-80 sm:w-80"></div>
                <div className="pointer-events-none absolute -bottom-32 left-1/4 h-56 w-56 rounded-full bg-purple-500/15 blur-3xl sm:h-80 sm:w-80"></div>
                <div className="relative mx-auto grid max-w-screen-2xl items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                    <div className="min-w-0">
                        <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-2 text-xs font-semibold text-orange-300 sm:px-4 sm:text-sm"><span className="h-2 w-2 rounded-full bg-orange-400"></span>JD DEV · BLOGS</span>
                        <h1 className="mt-5 text-3xl font-black leading-tight sm:mt-7 sm:text-4xl md:text-5xl xl:text-7xl">Ideas worth <span className="text-orange-500">sharing.</span></h1>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">Explore ideas, practical lessons, and experiences from the world of web development. Learn something new and keep building.</p>
                        <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">
                            {admin && <button type="button" onClick={() => setShowForm(!showForm)} className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-1 hover:shadow-xl min-[420px]:w-auto sm:px-6 sm:text-base">{showForm ? 'Close Editor ×' : '+ Write a Blog'}</button>}
                            <button type="button" onClick={() => document.getElementById('latest-blogs')?.scrollIntoView({ behavior: 'smooth' })} className="w-full cursor-pointer rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-white/5 min-[420px]:w-auto sm:px-6 sm:text-base">Explore Articles ↓</button>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-lg">
                        <div className="absolute -right-2 -top-2 h-full w-full rounded-2xl border border-orange-400/30 sm:-right-4 sm:-top-4 sm:rounded-3xl"></div>
                        <div className="relative rounded-2xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur sm:rounded-3xl sm:p-7 md:p-9">
                            <div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold tracking-widest text-orange-300 sm:text-sm">THE DEVELOPER'S NOTEBOOK</span><span className="text-xl sm:text-2xl">✦</span></div>
                            <div className="my-6 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400/20 to-purple-500/20 sm:my-8 sm:h-36 sm:rounded-2xl"><span className="text-6xl sm:text-7xl">{"</>"}</span></div>
                            <h2 className="text-xl font-extrabold sm:text-2xl">Learn. Build. Share.</h2>
                            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">Every project teaches a lesson. Every lesson is an opportunity to grow.</p>
                            <div className="mt-6 flex flex-wrap gap-2 sm:mt-7"><span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200">Web Development</span><span className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-200">Learning</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-12 lg:py-20 xl:px-16">
                {admin && showForm && <div className="mb-10 overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-xl shadow-orange-100/40 sm:mb-14 sm:rounded-3xl">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-5 text-white sm:px-9 sm:py-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100 sm:text-sm">YOUR EDITOR</p><h2 className="mt-2 text-xl font-extrabold sm:text-2xl md:text-3xl">Create something worth reading.</h2><p className="mt-2 text-sm leading-6 text-white/90">Share a lesson, an idea, or something you've built.</p></div>
                    <form onSubmit={handleNewBlogSubmit} className="space-y-5 p-4 sm:p-6 md:p-9">
                        <div><label htmlFor="blogTitle" className="mb-2 block text-sm font-bold text-slate-700">Blog Title</label><input id="blogTitle" type="text" placeholder="Give your article a great title..." value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 sm:text-base" required /></div>
                        <div><label htmlFor="blogContent" className="mb-2 block text-sm font-bold text-slate-700">Your Content</label><textarea id="blogContent" placeholder="What would you like to share with readers?" value={newContent} onChange={(e) => setNewContent(e.target.value)} rows="7" className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 sm:text-base" required /></div>
                        <div className="flex flex-col gap-3 min-[420px]:flex-row"><button type="submit" disabled={submitting} className="w-full cursor-pointer rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-500 disabled:cursor-not-allowed disabled:opacity-60 min-[420px]:w-auto sm:px-7 sm:text-base">{submitting ? 'Publishing...' : 'Publish Blog →'}</button><button type="button" onClick={() => { setShowForm(false); setError('') }} className="w-full cursor-pointer rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 min-[420px]:w-auto">Cancel</button></div>
                    </form>
                </div>}

                {error && <div role="alert" className="mb-8 flex flex-col items-start justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700 sm:flex-row sm:items-center sm:px-5"><p>{error}</p><button type="button" onClick={fetchBlogs} className="cursor-pointer font-bold underline">Try again</button></div>}

                <div id="latest-blogs" className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end sm:gap-5">
                    <div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">FRESH FROM THE BLOG</p><h2 className="mt-3 text-2xl font-black sm:text-3xl md:text-4xl xl:text-5xl">Latest <span className="text-orange-500">Articles.</span></h2><p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">Ideas, tutorials, and experiences to help you grow as a developer.</p></div>
                    <div className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600"><span className="h-2 w-2 rounded-full bg-green-500"></span>{blogs.length} {blogs.length === 1 ? 'Article' : 'Articles'}</div>
                </div>

                {loading ? <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">{[1, 2, 3].map((item) => <div key={item} className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><div className="h-32 rounded-xl bg-slate-100 sm:h-36"></div><div className="mt-6 h-5 w-3/4 rounded bg-slate-100"></div><div className="mt-4 h-4 rounded bg-slate-100"></div><div className="mt-2 h-4 w-2/3 rounded bg-slate-100"></div></div>)}</div> : blogs.length === 0 && !error ? <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center sm:rounded-3xl sm:px-6 sm:py-16"><div className="text-4xl sm:text-5xl">{"</>"}</div><h3 className="mt-5 text-xl font-extrabold sm:text-2xl">The first story starts here.</h3><p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base">There are no articles yet. There are no published articles yet.</p>{admin && <button type="button" onClick={() => setShowForm(true)} className="mt-6 cursor-pointer rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600">Write the First Blog</button>}</div> : <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {blogs.map((blog, index) => <article key={blog._id} className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 sm:hover:-translate-y-2">
                        <div className={`relative flex h-36 items-center justify-center overflow-hidden sm:h-40 lg:h-44 ${index % 3 === 0 ? 'bg-gradient-to-br from-orange-100 to-amber-50' : index % 3 === 1 ? 'bg-gradient-to-br from-purple-100 to-indigo-50' : 'bg-gradient-to-br from-sky-100 to-cyan-50'}`}><div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/50 transition duration-500 group-hover:scale-125"></div><div className="absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-white/40"></div><span className="relative text-5xl font-black text-slate-800/80 transition duration-300 group-hover:scale-110 sm:text-6xl">{"</>"}</span><span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[10px] font-bold text-slate-700 backdrop-blur sm:left-5 sm:top-5 sm:text-xs">ARTICLE {String(index + 1).padStart(2, '0')}</span></div>
                        <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
                            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400"><span className="text-orange-500">✦</span><span>{blog.date}</span><span>·</span><span>JD DEV</span></div>
                            <h3 className="break-words text-lg font-extrabold leading-snug text-slate-900 transition group-hover:text-orange-600 sm:text-xl lg:text-2xl">{blog.newTitle}</h3>
                            <p className="mt-4 flex-1 whitespace-pre-line break-words text-sm leading-7 text-slate-600 sm:text-base">{blog.newContent}</p>
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5"><span className="text-xs text-slate-500 sm:text-sm">Share your appreciation</span><button type="button" aria-label={`Like ${blog.newTitle}`} onClick={() => handleLike(blog._id)} className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-2 text-sm font-bold text-orange-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white sm:px-4 sm:py-2.5"><span>♥</span><span>Like</span><span className="rounded-full bg-white/70 px-2 py-0.5 text-xs text-orange-700">{blog.likes ?? 0}</span></button></div>
                        </div>
                    </article>)}
                </div>}

                <div className="mt-10 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-8 text-center text-white shadow-xl shadow-orange-200/50 sm:mt-16 sm:rounded-3xl sm:px-8 sm:py-12 md:px-12 md:py-14"><p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100 sm:text-sm">KEEP THE IDEAS FLOWING</p><h2 className="mt-3 text-2xl font-black sm:text-3xl md:text-4xl">Every developer has a story.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">Share what you're learning, celebrate what you've built, and help someone else take their next step.</p>{admin && <button type="button" onClick={() => { setShowForm(true); document.getElementById('latest-blogs')?.scrollIntoView({ behavior: 'smooth' }) }} className="mt-6 w-full cursor-pointer rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-orange-600 shadow-md transition hover:-translate-y-1 hover:shadow-lg sm:mt-7 sm:w-auto sm:text-base">Write Your Story →</button>}</div>
            </section>
            <Footer />
        </div>
    )
}

export default Blogs