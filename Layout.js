
import Link from 'next/link';
import { useState,useEffect } from 'react';
export default function Layout({children}){
  const [lang,setLang]=useState('so');
  useEffect(()=>{const l=localStorage.getItem('lang');if(l) setLang(l);},[]);
  const toggle=()=>{const n=lang==='so'?'en':'so'; setLang(n); localStorage.setItem('lang',n);};
  return(<div>
    <header className="border-b bg-white/70 dark:bg-gray-900/60 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link className="text-xl font-bold" href="/">{lang==='so'?'FadalShoping':'FadalShopping'}</Link>
        <nav className="flex items-center gap-4">
          <Link href="/cart" className="underline">{lang==='so'?'Gaadhi (Cart)':'Cart'}</Link>
          <button className="btn" onClick={toggle}>{lang==='so'?'English':'Af‑Soomaali'}</button>
        </nav>
      </div>
    </header>
    <main className="container py-6">{children}</main>
    <footer className="container py-10 text-sm opacity-70">© {new Date().getFullYear()} FadalShoping · Built with Next.js</footer>
  </div>);
}
