import * as React from "react"
import { Menu, Transition } from '@headlessui/react'



const Header = () => (
    <>
    {/* Desktop menu */}
    <div className="flex items-center w-full h-20 md:pt-16">
      <nav className="hidden w-full md:block">
        <ul className="relative z-10 flex items-center px-6 text-sm text-white lg:text-base">
          <li className="mx-2 lg:mx-3">
            <a href="#_"   className="relative inline-block font-medium text-gray-200 hover:text-white">
              <span className="block">About</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span  /*x-show="hover"*/  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500" /*x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full"*/ style={{display: 'none'}} />
              </span>
            </a>
          </li>
          <li className="mx-2 lg:mx-3">
            <a href="#_"   className="relative inline-block font-medium text-gray-200 hover:text-white">
              <span className="block">Yoga</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span  /*x-show="hover"*/  className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500" /* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" */ style={{display: 'none'}} />
              </span>
            </a>
          </li>
          <li className="mx-2 lg:mx-3">
            <a href="#_"   className="relative inline-block font-medium text-gray-200 hover:text-white">
              <span className="block">Gallery</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span /*x-show="hover"*/ className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500" /* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" */ style={{display: 'none'}} />
              </span>
            </a>
          </li>
          <li className="mx-auto">
            <a href="#_" className="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
              <span className="text-3xl font-black leading-none text-white select-none logo">tails<span className="text-green-500">.</span></span>
            </a>
          </li>
          <li className="mx-2 lg:mx-3">
            <a href="#_"   className="relative inline-block font-medium text-gray-200 hover:text-white">
              <span className="block">Contact</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span /*x-show="hover"*/ className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500" /* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" */ style={{display: 'none'}} />
              </span>
            </a>
          </li>
          <li className="mx-2 lg:mx-3">
            <a href="#_"   className="relative inline-block font-medium text-gray-200 hover:text-white">
              <span className="block">Sign In</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span /*x-show="hover" */ className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500" /* x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" */ style={{display: 'none'}} />
              </span>
            </a>
          </li>
          <li className="mx-2 lg:mx-3">
            <a href="#_"   className="relative inline-block font-medium text-gray-200 hover:text-white">
              <span className="block">Sign Up</span>
              <span className="absolute bottom-0 left-0 inline-block w-full h-1 -mb-1 overflow-hidden">
                <span /* x-show="hover" */ className="absolute inset-0 inline-block w-full h-1 h-full transform border-t-2 border-green-500" /*x-transition:enter="transition ease-out duration-300" x-transition:enter-start="-translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" */ style={{display: 'none'}} />
              </span>
            </a>
          </li>
        </ul>
      </nav>
      {/* End Desktop menu */}
      {/* Mobile Nav  */}
      <nav className="fixed top-0 z-30 flex flex-col flex-wrap items-center justify-between w-full h-auto px-6 md:hidden">
        <div className="relative z-30 flex items-center justify-between w-full h-20">
          <a href="#_" className="flex items-center flex-shrink-0 mr-6 text-white">
            <span className="text-3xl font-black leading-none text-white select-none logo">tails<span className="text-green-500">.</span></span>
          </a>
          <div className="block lg:hidden">
            <button  className="flex items-center justify-center w-10 h-10 text-gray-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* End Mobile Nav */}
    </div>
    {/* Mobile Menu */}
    <div  className="absolute top-0 z-20 flex flex-col items-center justify-center w-full h-full space-y-5 text-lg origin-center bg-green-500" style={{display: 'none'}}>
      <a href="#_" className="block text-green-200 hover:text-white">First Link</a>
      <a href="#_" className="block text-green-200 hover:text-white">Second Link</a>
      <a href="#_" className="block text-green-200 hover:text-white">Third Link</a>
    </div>
    {/* End Mobile Menu */}


    </>
) 

export default Header