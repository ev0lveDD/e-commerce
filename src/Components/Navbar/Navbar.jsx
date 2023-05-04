import React from "react";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return(
        <div>
            <nav class="bg-white block w-full z-20 top-0 left-0 border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center ml-4">
                    <img src={require('../../Images/nike.png')}  class="w-16" alt="Nike Logo" />
                </a>
                <div class="flex md:order-2">
                    <button className="mr-12 text-black p-2 rounded-full border-2 border-white hover:border-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                     </button>

                     {open ?
                    <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setOpen(!open)} class="z-40 fixed top-10 right-6 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Close main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                    : 
                    <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setOpen(!open)} class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    }

                </div>
                <div className={`${!open && "animate-slideOut"} z-30 inset-0 overflow-hidden animate-slideIn bg-white items-center justify-between max-h-screen md:h-auto w-full md:flex md:w-auto md:order-1 ${open ? "fixed" : "hidden"}`} id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-40 md:mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                    <li>
                        <a href="#" class="block py-4 md:py-2 pl-3 pr-4 text-2xl md:text-lg text-gray-900 rounded underline underline-offset-8 md:p-0" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-4 md:py-2 pl-3 pr-4 text-2xl md:text-lg text-gray-900 rounded hover:underline underline-offset-8 md:p-0">Men</a>
                    </li>
                    <li>
                        <a href="#" class="block py-4 md:py-2 pl-3 pr-4 text-2xl md:text-lg text-gray-900 rounded hover:underline underline-offset-8 md:p-0">Women</a>
                    </li>
                    <li>
                        <a href="#" class="block py-4 md:py-2 pl-3 pr-4 text-2xl md:text-lg text-gray-900 rounded hover:underline underline-offset-8 md:p-0">Kids</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;