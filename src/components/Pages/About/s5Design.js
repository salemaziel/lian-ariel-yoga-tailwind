import * as React from "react"

import Art1 from "../../../images/lian_art_gallery/CLUPpZBgBG-_slide_2jpg (3).jpg"
import Art2 from "../../../images/lian_art_gallery/CLlUFSHAqTKjpg (4).jpg"
import Art3 from "../../../images/lian_art_gallery/CN89IIUhyhljpg (7).jpg"

import { Link } from "gatsby"


const S5Design = () => (
    <>
 {/* Section 5 */}
 <section className="relative w-full bg-white">
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
            <p className="text-base text-gray-700 md:text-lg">Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
          </div>
          <div className="max-w-xl mb-6">
            <p className="relative">
              <Link to="#_" className="inline-flex flex-col items-center font-semibold text-green-700 transition-colors duration-200 cursor-pointer group">
                <span className="flex items-center w-full">
                  <span className>See More</span>
                  <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12"><path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" className /></svg>
                </span>
                <span className="w-full h-0.5 translate-y-2 group-hover:translate-y-1 duration-200 ease-out transition opacity-0 group-hover:opacity-100 block bg-green-600" />
              </Link>
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

<div>
  {/* Section 1 */}
  <section className="relative w-full py-20 bg-gray-50">
    <div className="px-10 mx-auto max-w-7xl">
      <div className="mb-8 space-y-5 lg:px-0 lg:text-center lg:mb-16">
        <h2 className="text-4xl font-bold sm:text-5xl">Lorem ipsum dolor </h2>
        <p className="text-lg text-gray-600 w-ful sm:text-xl">Lorem ipsum dolor sit ametconsectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
      </div>
      <div className="grid overflow-hidden lg:rounded-xl">
        <div className="grid items-center lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center h-full px-0 py-16 space-y-4 bg-white md:pl-16 md:pr-16 lg:pr-20 lg:py-0">
            <h3 className="text-2xl font-semibold sm:text-4xl">Lorem ipsum </h3>
            <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit ametconsectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
          </div>
          <div className="overflow-hidden bg-gray-100 h-96">
            <img src={Art1} className="object-cover w-full h-full" alt />
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-2">
          <div className="order-last overflow-hidden bg-gray-100 h-96 lg:order-first">
            <img src={Art2} alt />
          </div>
          <div className="flex flex-col items-start justify-center h-full px-0 py-16 space-y-4 bg-white md:pl-16 md:pr-16 lg:pr-20 lg:py-0">
            <h3 className="text-2xl font-semibold sm:text-4xl">Lorem ipsum .</h3>
            <p className="text-lg text-left text-gray-600">
            Lorem ipsum dolor sit ametconsectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
          </div>
        </div>
        <div className="grid items-center lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center h-full px-0 py-16 space-y-4 bg-white md:pl-16 md:pr-16 lg:pr-20 lg:py-0">
            <h3 className="text-2xl font-semibold sm:text-4xl">Lorem ipsum dolor sit </h3>
            <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit ametconsectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
          </div>
          <div className="bg-gray-100 h-96">
            <img src={Art3} className="object-cover w-full h-full" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section 2 */}
  <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 bg-gray-50">
    <div className="items-center max-w-6xl px-12 mx-auto sm:px-20 md:px-5">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
          <div className="w-full max-w-md xl:max-w-xl">
            <h2 className="relative mb-6 text-3xl font-semibold leading-tight tracking-tight xl:font-bold lg:text-6xl xl:text-7xl">
              Beautiful designs that help you look pretty.
            </h2>
            <ul>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
              <li className="flex items-center py-2 space-x-4 xl:py-3">
                <img src="https://cdn.devdojo.com/images/february2021/checkmark.png" className="w-4 h-4" />
                <span className="font-medium font-bold text-gray-700">Lorem ipsum dolor sit amet</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-full px-3 mb-12 lg:-ml-20 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
          <img className="absolute top-0 right-0 z-10 hidden mx-auto -mt-32 rounded-lg shadow-2xl opacity-100 xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src={Art1} />
          <img className="relative z-20 w-full mx-auto mt-3 rounded-lg shadow-2xl sm:max-w-none lg:-ml-10 lg:max-w-sm" src={Art2} alt="feature image" />
          <img className="absolute bottom-0 right-0 z-10 hidden mx-auto -mb-48 rounded-lg shadow-2xl xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src={Art3} />
        </div>
      </div>
    </div>
  </section>
  {/* Section 3 * /}
  <section className="relative py-0 bg-white lg:py-20">
    <div className="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-5 lg:flex-row">
      <div className="flex flex-col items-center w-full px-10 pt-5 pb-20 lg:pt-20 lg:flex-row">
        <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-7/12">
          <div className="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
            <img src="https://cdn.devdojo.com/images/december2020/taxi-programming.png" className />
          </div>
        </div>
        <div className="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
          <div className="relative z-10 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
            <h4 className="w-full font-serif text-4xl font-medium leading-snug">Schedule a Demo <br />of our product</h4>
            <div className="relative w-full mt-6 space-y-8">
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">First Name</label>
                <input type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black" placeholder="John" />
              </div>
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Last Name</label>
                <input type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black" placeholder="Doe" />
              </div>
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Email Address</label>
                <input type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black" placeholder="janedoe@email.com" />
              </div>
              <div className="relative">
                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Phone</label>
                <input type="number" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-black" placeholder="Phone Number" />
              </div>
              <div className="relative">
                <a href="#_" className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-green-400 rounded-full hover:bg-green-500 ease">Submit</a>
              </div>
            </div>
          </div>
          <svg className="absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth={1} fillRule="evenodd"><g fillRule="nonzero"><g><g><circle cx="3.261" cy="3.445" r="2.72" /><circle cx="15.296" cy="3.445" r="2.719" /><circle cx="27.333" cy="3.445" r="2.72" /><circle cx="39.369" cy="3.445" r="2.72" /><circle cx="51.405" cy="3.445" r="2.72" /><circle cx="63.441" cy="3.445" r="2.72" /><circle cx="75.479" cy="3.445" r="2.72" /><circle cx="87.514" cy="3.445" r="2.719" /></g><g transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72" /><circle cx="15.296" cy="3.525" r="2.719" /><circle cx="27.333" cy="3.525" r="2.72" /><circle cx="39.369" cy="3.525" r="2.72" /><circle cx="51.405" cy="3.525" r="2.72" /><circle cx="63.441" cy="3.525" r="2.72" /><circle cx="75.479" cy="3.525" r="2.72" /><circle cx="87.514" cy="3.525" r="2.719" /></g><g transform="translate(0 24)"><circle cx="3.261" cy="3.605" r="2.72" /><circle cx="15.296" cy="3.605" r="2.719" /><circle cx="27.333" cy="3.605" r="2.72" /><circle cx="39.369" cy="3.605" r="2.72" /><circle cx="51.405" cy="3.605" r="2.72" /><circle cx="63.441" cy="3.605" r="2.72" /><circle cx="75.479" cy="3.605" r="2.72" /><circle cx="87.514" cy="3.605" r="2.719" /></g><g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72" /><circle cx="15.296" cy="3.686" r="2.719" /><circle cx="27.333" cy="3.686" r="2.72" /><circle cx="39.369" cy="3.686" r="2.72" /><circle cx="51.405" cy="3.686" r="2.72" /><circle cx="63.441" cy="3.686" r="2.72" /><circle cx="75.479" cy="3.686" r="2.72" /><circle cx="87.514" cy="3.686" r="2.719" /></g><g transform="translate(0 49)"><circle cx="3.261" cy="2.767" r="2.72" /><circle cx="15.296" cy="2.767" r="2.719" /><circle cx="27.333" cy="2.767" r="2.72" /><circle cx="39.369" cy="2.767" r="2.72" /><circle cx="51.405" cy="2.767" r="2.72" /><circle cx="63.441" cy="2.767" r="2.72" /><circle cx="75.479" cy="2.767" r="2.72" /><circle cx="87.514" cy="2.767" r="2.719" /></g><g transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72" /><circle cx="15.296" cy="2.846" r="2.719" /><circle cx="27.333" cy="2.846" r="2.72" /><circle cx="39.369" cy="2.846" r="2.72" /><circle cx="51.405" cy="2.846" r="2.72" /><circle cx="63.441" cy="2.846" r="2.72" /><circle cx="75.479" cy="2.846" r="2.72" /><circle cx="87.514" cy="2.846" r="2.719" /></g><g transform="translate(0 73)"><circle cx="3.261" cy="2.926" r="2.72" /><circle cx="15.296" cy="2.926" r="2.719" /><circle cx="27.333" cy="2.926" r="2.72" /><circle cx="39.369" cy="2.926" r="2.72" /><circle cx="51.405" cy="2.926" r="2.72" /><circle cx="63.441" cy="2.926" r="2.72" /><circle cx="75.479" cy="2.926" r="2.72" /><circle cx="87.514" cy="2.926" r="2.719" /></g><g transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72" /><circle cx="15.296" cy="3.006" r="2.719" /><circle cx="27.333" cy="3.006" r="2.72" /><circle cx="39.369" cy="3.006" r="2.72" /><circle cx="51.405" cy="3.006" r="2.72" /><circle cx="63.441" cy="3.006" r="2.72" /><circle cx="75.479" cy="3.006" r="2.72" /><circle cx="87.514" cy="3.006" r="2.719" /></g></g></g></g></svg>
          <svg className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-green-400 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth={1} fillRule="evenodd"><g fillRule="nonzero"><g><g><circle cx="3.261" cy="3.445" r="2.72" /><circle cx="15.296" cy="3.445" r="2.719" /><circle cx="27.333" cy="3.445" r="2.72" /><circle cx="39.369" cy="3.445" r="2.72" /><circle cx="51.405" cy="3.445" r="2.72" /><circle cx="63.441" cy="3.445" r="2.72" /><circle cx="75.479" cy="3.445" r="2.72" /><circle cx="87.514" cy="3.445" r="2.719" /></g><g transform="translate(0 12)"><circle cx="3.261" cy="3.525" r="2.72" /><circle cx="15.296" cy="3.525" r="2.719" /><circle cx="27.333" cy="3.525" r="2.72" /><circle cx="39.369" cy="3.525" r="2.72" /><circle cx="51.405" cy="3.525" r="2.72" /><circle cx="63.441" cy="3.525" r="2.72" /><circle cx="75.479" cy="3.525" r="2.72" /><circle cx="87.514" cy="3.525" r="2.719" className /></g><g transform="translate(0 24)"><circle cx="3.261" cy="3.605" r="2.72" /><circle cx="15.296" cy="3.605" r="2.719" /><circle cx="27.333" cy="3.605" r="2.72" /><circle cx="39.369" cy="3.605" r="2.72" /><circle cx="51.405" cy="3.605" r="2.72" /><circle cx="63.441" cy="3.605" r="2.72" /><circle cx="75.479" cy="3.605" r="2.72" className /><circle cx="87.514" cy="3.605" r="2.719" /></g><g transform="translate(0 36)"><circle cx="3.261" cy="3.686" r="2.72" /><circle cx="15.296" cy="3.686" r="2.719" /><circle cx="27.333" cy="3.686" r="2.72" /><circle cx="39.369" cy="3.686" r="2.72" /><circle cx="51.405" cy="3.686" r="2.72" /><circle cx="63.441" cy="3.686" r="2.72" /><circle cx="75.479" cy="3.686" r="2.72" /><circle cx="87.514" cy="3.686" r="2.719" /></g><g transform="translate(0 49)"><circle cx="3.261" cy="2.767" r="2.72" /><circle cx="15.296" cy="2.767" r="2.719" /><circle cx="27.333" cy="2.767" r="2.72" /><circle cx="39.369" cy="2.767" r="2.72" /><circle cx="51.405" cy="2.767" r="2.72" /><circle cx="63.441" cy="2.767" r="2.72" /><circle cx="75.479" cy="2.767" r="2.72" /><circle cx="87.514" cy="2.767" r="2.719" className /></g><g transform="translate(0 61)"><circle cx="3.261" cy="2.846" r="2.72" /><circle cx="15.296" cy="2.846" r="2.719" /><circle cx="27.333" cy="2.846" r="2.72" /><circle cx="39.369" cy="2.846" r="2.72" /><circle cx="51.405" cy="2.846" r="2.72" /><circle cx="63.441" cy="2.846" r="2.72" /><circle cx="75.479" cy="2.846" r="2.72" /><circle cx="87.514" cy="2.846" r="2.719" className /></g><g transform="translate(0 73)"><circle cx="3.261" cy="2.926" r="2.72" /><circle cx="15.296" cy="2.926" r="2.719" /><circle cx="27.333" cy="2.926" r="2.72" /><circle cx="39.369" cy="2.926" r="2.72" /><circle cx="51.405" cy="2.926" r="2.72" /><circle cx="63.441" cy="2.926" r="2.72" className /><circle cx="75.479" cy="2.926" r="2.72" className /><circle cx="87.514" cy="2.926" r="2.719" /></g><g transform="translate(0 85)"><circle cx="3.261" cy="3.006" r="2.72" /><circle cx="15.296" cy="3.006" r="2.719" /><circle cx="27.333" cy="3.006" r="2.72" /><circle cx="39.369" cy="3.006" r="2.72" /><circle cx="51.405" cy="3.006" r="2.72" /><circle cx="63.441" cy="3.006" r="2.72" className /><circle cx="75.479" cy="3.006" r="2.72" /><circle cx="87.514" cy="3.006" r="2.719" /></g></g></g></g></svg>
        </div>
      </div>
    </div>
</section>*/}
</div>


    </>
) 

export default S5Design