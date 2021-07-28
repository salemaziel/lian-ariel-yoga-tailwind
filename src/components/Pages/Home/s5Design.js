import * as React from "react"

import Art1 from "../../../images/lian_art_gallery/CLUPpZBgBG-_slide_2jpg (3).jpg"
import Art2 from "../../../images/lian_art_gallery/CLlUFSHAqTKjpg (4).jpg"
import Art3 from "../../../images/lian_art_gallery/CN89IIUhyhljpg (7).jpg"



const S5Design = () => (
    <>
 {/* Section 5 */}
 <section className="w-full bg-white">
    <div className="px-10 pt-16 pb-16 ml-auto mr-auto max-w-7xl md:px-24 lg:px-12 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-green-400 to-green-800">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className /></svg>
          </div>
          <div className="max-w-xl mb-6">
            <div className="mb-6">
              <p className="inline font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">Beautiful Artwork </p>
              <p className="block font-sans text-5xl font-bold tracking-tight text-green-500 sm:text-6xl sm:leading-none">By Lian Ariel</p>
            </div>
            <p className="text-base text-gray-700 md:text-lg">Salem is the fucking coolest and best and awesomest and wayyyy better at art and stuff and I'm just putting filler text in this space for now so I'm just typing random stuff</p>
          </div>
          <div className="max-w-xl mb-6">
            <p className="relative">
              <a href="#_" className="inline-flex flex-col items-center font-semibold text-green-700 transition-colors duration-200 cursor-pointer group">
                <span className="flex items-center w-full">
                  <span className>See More</span>
                  <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12"><path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" className /></svg>
                </span>
                <span className="w-full h-0.5 translate-y-2 group-hover:translate-y-1 duration-200 ease-out transition opacity-0 group-hover:opacity-100 block bg-green-600" />
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full lg:items-center">
          <div className="flex flex-col items-end pr-3">
            <img src={Art1} className="object-cover w-full h-full mb-6 rounded shadow-lg lg:h-48 xl:h-56 lg:w-48 xl:w-56" />
            <img src={Art2} className="object-cover w-full h-full rounded shadow-lg lg:h-32 xl:h-40 lg:w-32 xl:w-40" />
          </div>
          <div className="pl-3">
            <img src={Art3} className="object-cover w-full h-full rounded shadow-lg lg:h-64 xl:h-80 lg:w-64 xl:w-80" />
          </div>
        </div>
      </div>
    </div>
  </section>


    </>
) 

export default S5Design