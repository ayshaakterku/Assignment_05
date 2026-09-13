const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

import logo from "../assets/logo-text.png";
export default function Header(){
    return(
        <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                
                <img src={logo} alt="" className="w-32 h-auto"/>

                <nav className="hidden gap-8 md:flex">
                {
                    navLinks.map((link, i)=>(
                        <a 
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className={
                            i===0 ?
                            'text-sm font-medium text-[#DB2777]'
                            : 'text-sm font-medium text-slate-600 transition hover:text-slate-900 '
                        }
                        >
                            {link}
                        </a>
                    ))
                }
                </nav>

                <div className="flex items-center gap-5">
                    <button className="hidden text-sm font-medium text-[#475569] hover:text-slate-900 sm:block">Sign In</button>

                    <button className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-pink-200 transition hover:opacity-90">
                        Sign Up
                        </button>
                </div>

            </div>
        </header>
    )
}