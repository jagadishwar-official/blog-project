import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [checkingAuth, setCheckingAuth] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(function(user) {
            if (user) {
                navigate('/home', { replace: true });
            } else {
                setCheckingAuth(false);
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log('Account created successfully:', res.user.uid);
            navigate('/home', { replace: true });
        }).catch((error) => {
            console.error('Failed to add user:', error.code, error.message);
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already registered. Please sign in.');
            } else if (error.code === 'auth/weak-password') {
                setError('Password must contain at least 6 characters.');
            } else if (error.code === 'auth/invalid-email') {
                setError('Please enter a valid email address.');
            } else {
                setError('Unable to create your account. Please try again.');
            }
        }).finally(() => setLoading(false));
    };

    if (checkingAuth) {
        return <div className="flex min-h-[calc(100vh-90px)] items-center justify-center text-slate-600">Checking authentication...</div>;
    }

    return (
        <div className="relative flex min-h-[calc(100vh-90px)] items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-purple-50 px-4 py-10 sm:px-6 lg:px-8">
            <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"></div>
            <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-slate-200/70 md:grid-cols-2">
                <div className="relative flex flex-col justify-between overflow-hidden bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/20"></div>
                    <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-purple-500/20"></div>
                    <div className="relative">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-black text-slate-950">J<span className="text-orange-500">D</span></div>
                            <div><h1 className="text-xl font-extrabold tracking-tight">JD <span className="text-orange-500">DEV</span></h1><p className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-slate-400">BUILD · CREATE · DEVELOP</p></div>
                        </div>
                        <div className="mt-12 sm:mt-16">
                            <span className="rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1.5 text-xs font-semibold text-orange-300">JOIN THE COMMUNITY</span>
                            <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">Start your journey with <span className="text-orange-500">JD DEV.</span></h2>
                            <p className="mt-5 max-w-sm leading-7 text-slate-300">Create your account and explore articles, ideas, and practical insights from the world of web development.</p>
                        </div>
                    </div>
                    <div className="relative mt-10 border-t border-white/10 pt-5"><p className="text-sm text-slate-400">Keep learning. Keep building. Keep growing.</p></div>
                </div>
                <div className="p-7 sm:p-10 lg:p-12">
                    <div className="mb-7">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Create Your Account</p>
                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Get Started</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-500">Fill in the details below to register.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div><label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email Address</label><input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(''); }} placeholder="you@example.com" autoComplete="email" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100" /></div>
                        <div><label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">Password</label><input id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }} placeholder="Create a password" autoComplete="new-password" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100" /></div>
                        <div><label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-slate-700">Confirm Password</label><input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }} placeholder="Enter your password again" autoComplete="new-password" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100" /></div>
                        {error && <p className="text-sm font-medium text-red-600" role="alert">{error}</p>}
                        <button type="submit" disabled={loading} className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-orange-200/60 transition duration-300 hover:-translate-y-0.5 hover:from-orange-600 hover:to-amber-600 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Creating Account...' : <>Create Account <span aria-hidden="true">→</span></>}</button>
                    </form>
                    <div className="my-6 flex items-center gap-3"><div className="h-px flex-1 bg-slate-200"></div><span className="text-xs text-slate-400">ALREADY A MEMBER?</span><div className="h-px flex-1 bg-slate-200"></div></div>
                    <button type="button" onClick={() => navigate('/login')} className="w-full cursor-pointer rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition duration-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600">Sign In to Your Account</button>
                    <p className="mt-7 text-center text-xs leading-5 text-slate-400">Your journey into building better digital experiences starts here.</p>
                </div>
            </div>
        </div>
    );
}

export default Signup