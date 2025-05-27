"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks =[
    {title:"About", href:"#about"},
    {title:"Projects", href:"#projects"},
    {title:"Contact", href:"#contact"},
]

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
     
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-400 h-30">
     <div className="flex items-center justify-between mx-auto px-4 h-full">
        <Link href={'/'} className="flex items-center"> 
            <Image
                src="/images/logo.png" // Replace with your logo path
                alt="Logo"
                width={200} // Adjust width as needed
                height={250} // Adjust height as needed
                className="w-[200px] h-[250px] md:w-44 lg:w-48 object-contain mb-10"
            />
        </Link>
        <div className="mobile-menu block md:hidden">
            {navbarOpen ? (
                <button onClick={() => setNavbarOpen(false)} className = "flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white">
                    <XMarkIcon className="h-5 w-5 text-white" />
                </button>
            ) : (
                <button onClick={() => setNavbarOpen(true)} className = "flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white">
                     <Bars3Icon className="h-5 w-5 text-white" />
                </button>
            )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {
                navLinks.map((link,index) => (
                    <li key={index}>
                        <NavLink href={link.href} title={link.title} />
                    </li>
                ))
            }
          </ul>
        </div>
     </div>
     {navbarOpen ? <MenuOverlay links={navLinks} /> :null}
    </nav>
  )
}

export default Navbar