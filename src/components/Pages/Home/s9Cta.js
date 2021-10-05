import * as React from "react"
import { Link } from "gatsby"

import CTABG from '../../../images/stock_yoga_people/pexels-rui-dias-1472887.jpg'


const S9Cta = () => (
    <>
  {/* Section 9 */}
  <section className="relative py-24 bg-white bg-center bg-cover" style={{backgroundImage: `url('${CTABG}')`}}>
    <div className="absolute inset-0 block w-full h-full opacity-25 bg-gradient-to-br from-transparent via-black to-transparent lg:hidden" />
    <div className="flex flex-col items-center justify-between px-10 mx-auto max-w-7xl xl:px-12 lg:flex-row">
      <div className="relative mb-6 lg:mb-0">
        <h2 className="w-full mx-auto mb-2 text-4xl font-extrabold leading-none text-center text-white md:text-5xl xl:text-6xl lg:text-left">Designed with you in mind.</h2>
        <p className="w-full max-w-3xl mx-auto text-base text-center text-gray-100 xl:text-xl lg:text-left">Because I'm making it for you, so duh.</p>
      </div>
      <Link to="#_" className="relative flex-shrink-0 px-10 py-5 text-xl font-medium text-center text-white bg-green-700 rounded-lg lg:text-2xl focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none">Sign Up Today</Link>
    </div>
  </section>


    </>
) 

export default S9Cta