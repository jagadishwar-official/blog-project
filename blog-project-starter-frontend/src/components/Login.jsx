import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                navigate('/home', { replace: true });
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        setErr('');

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log('Login successful:', res.user.uid);
                navigate('/home');
            })
            .catch((error) => {
                if (
                    error.code === 'auth/invalid-credential' ||
                    error.code === 'auth/wrong-password' ||
                    error.code === 'auth/user-not-found'
                ) {
                    setErr('Invalid email or password. Please try again.');
                } else {
                    setErr('Unable to sign in. Please try again.');
                }
                console.log('Error signing in:', error.code);
            });
    };

    return (
        <div className="relative flex min-h-[calc(100vh-90px)] items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 px-3 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-orange-200/40 blur-3xl sm:h-64 sm:w-64"></div>
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl sm:h-72 sm:w-72"></div>
            <div className="relative grid w-full max-w-6xl overflow-hidden rounded-2xl border border-white bg-white shadow-xl shadow-slate-200/70 sm:rounded-3xl md:grid-cols-2 md:shadow-2xl">
                <div className="relative flex flex-col justify-between overflow-hidden bg-slate-950 p-6 text-white sm:p-8 md:p-7 lg:p-10 xl:p-12">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/20 sm:h-48 sm:w-48"></div>
                    <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-purple-500/20 sm:h-56 sm:w-56"></div>
                    <div className="relative">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg font-black text-slate-950 sm:h-12 sm:w-12 sm:text-xl">
                                J<span className="text-orange-500">D</span>
                            </div>
                            <div>
                                <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">JD <span className="text-orange-500">DEV</span></h1>
                                <p className="mt-1 text-[9px] font-semibold tracking-[0.15em] text-slate-400 sm:text-[10px] sm:tracking-[0.2em]">BUILD · CREATE · DEVELOP</p>
                            </div>
                        </div>
                        <div className="mt-8 sm:mt-12 md:mt-10 lg:mt-16 xl:mt-20">
                            <span className="inline-block rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold text-orange-300 sm:text-xs">WELCOME BACK</span>
                            <h2 className="mt-4 max-w-lg text-2xl font-extrabold leading-tight sm:mt-6 sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
                                Your next big idea starts <span className="text-orange-500">here.</span>
                            </h2>
                            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base sm:leading-7">
                                Sign in to continue exploring the blog and the world of web development.
                            </p>
                        </div>
                    </div>
                    <div className="relative mt-8 border-t border-white/10 pt-4 sm:mt-10 sm:pt-5 md:mt-8">
                        <p className="text-xs leading-5 text-slate-400 sm:text-sm">Learn something new. Build something meaningful.</p>
                    </div>
                </div>
                <div className="p-5 sm:p-8 md:p-7 lg:p-10 xl:p-12">
                    <div className="mb-6 sm:mb-8">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500 sm:text-sm sm:tracking-[0.2em]">Your Account</p>
                        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:mt-3 sm:text-3xl">Sign In</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-500">Enter your details to access your account.</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email Address</label>
                            <input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErr(''); }} placeholder="you@example.com" autoComplete="email" required className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 sm:px-4 sm:py-3.5 sm:text-base" />
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                            <input id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setErr(''); }} placeholder="Enter your password" autoComplete="current-password" required className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100 sm:px-4 sm:py-3.5 sm:text-base" />
                        </div>
                        {err && (
                            <p className="text-sm font-medium text-red-600" role="alert">
                                {err}
                            </p>
                        )}
                        <button type="submit" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200/60 transition duration-300 hover:-translate-y-0.5 hover:from-orange-600 hover:to-amber-600 hover:shadow-xl active:translate-y-0 sm:px-5 sm:py-3.5 sm:text-base">
                            Sign In <span aria-hidden="true">→</span>
                        </button>
                    </form>
                    <div className="my-5 flex items-center gap-3 sm:my-6">
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="whitespace-nowrap text-[10px] text-slate-400 sm:text-xs">NEW HERE?</span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                    </div>
                    <button type="button" onClick={() => navigate('/signup')} className="w-full cursor-pointer rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 sm:px-5 sm:py-3.5 sm:text-base">
                        Create an Account
                    </button>
                    <p className="mt-5 text-center text-[11px] leading-5 text-slate-400 sm:mt-7 sm:text-xs">
                        By signing in, you agree to use this website responsibly.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;