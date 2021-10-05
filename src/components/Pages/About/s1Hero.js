import React from 'react'

import BG from '../../../images/lian_artistic_photos/BP34W8GgZX3jpg.jpg'

const S1Hero = (props) => {
    return(
        <>
    <div className="absolute inset-0 z-0 h-screen bg-fixed bg-center bg-no-repeat bg-cover aboutHeroBG" style={{backgroundImage: `url('${BG}')`}}>
    <div className="absolute inset-0 z-0 h-full transition-opacity bg-gray-900 opacity-50 fade-out-hero"/>
    </div>
  {/* Section 1 */}
  <section className="relative w-full h-screen bg-center bg-no-repeat bg-cover animate-fade-in-fwd " >
  
    
    <div className="container flex items-center justify-end h-auto py-48 ml-0 mr-auto">
      <div className="z-10 flex flex-col items-center px-10 xl:px-0">
     {/*<Transition 
      show={isShowing}
      show={true}
      appear={true}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
     >*/}
        <h1 
        className="mt-1 mb-8 text-xl text-5xl font-light tracking-wider text-right text-white md:my-10 lg:text-6xl sm:text-center sm:mx-0 text-shadow-lg animate-scale-in-center font-dancingscript">
<em>About <br className="block lg:hidden" />Lian Ariel </em> 
        </h1>

        {/*<p className="w-2/3 mx-auto my-6 text-xl font-normal text-center text-gray-200 md:py-6 text-shadow-md animate-scale-in-center">Free the mind, free the body.</p>*/}
       {/* <div className="flex flex-col justify-center mt-20 sm:flex-row md:mt-10">
         <Link to="#_" className="px-16 py-4 mx-4 my-2 text-center text-white bg-green-500 border-2 border-green-500 rounded-full sm:mt-2 sm:px-8 sm:py-2 hover:bg-transparent animate-scale-in-center">Get Started</Link>
         <Link to="#_" className="px-16 py-4 mx-4 my-2 text-center text-white border-2 border-green-500 rounded-full sm:mt-2 sm:px-8 sm:py-2 hover:bg-green-500 animate-scale-in-center">Learn More</Link>
        </div>
        {/*</Transition>*/}
      </div>
    </div>
  </section>

        </>
    )
}

export default S1Hero