import * as React from "react"

import PinkPants from "../../../images/lian_yoga_posing/pink-pants.jpg"


const S3Meet = () => (
    <>
  {/* Section 3 */}
  <section className="bg-white">
    <div className="flex flex-col-reverse items-center justify-center max-w-5xl px-10 pt-16 mx-auto md:flex-row md:space-x-20 lg:space-x-32 md:pt-24">
      <div className="box-content relative flex items-start justify-center flex-shrink-0 pb-16 border-2 border-b-0 border-green-500 w-80 rounded-t-3xl h-96 ">
        <div className="absolute w-full h-full p-3 pb-0">
          <img className="box-content relative z-10 w-full h-full bg-gray-100 rounded-xl" src={PinkPants} alt="Lian Ariel in Maui" />
        </div>
      </div>
      <div className="flex flex-col items-start w-full h-full max-w-xs pb-10 space-y-5 md:pb-0 md:max-w-none">
        <h2 className="text-5xl font-black text-green-700">Meet Lian Ariel</h2>
        <p className="text-lg text-gray-600">Yoga practitioner trained in India</p>
        <a href="#_" className="flex items-center px-4 py-2 font-medium text-green-100 bg-green-700 border-2 border-green-700 rounded-lg">
          Learn More About Her Training
          <svg className="w-4 h-4 ml-1 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  </section>


    </>
) 

export default S3Meet