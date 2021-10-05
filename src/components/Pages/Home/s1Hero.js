import React, {
  useEffect, useState
} from "react"
import { Transition } from "@headlessui/react"
//import BG from "../../../images/stock_nature/pexels-johannes-plenio-1126380.jpg"
import BG from "../../../images/stock_stone_towers/pexels-nicollazzi-xiong-668353.jpg"
import { Link } from "gatsby"

const S1Hero = () => {
  const [show, isShowing] = useState(true)
  return(
    <>
  {/* Section 1 */}
  <section  id="s1Photo" className="w-full h-screen bg-scroll" >
  <div
				className="fixed z-0 w-full h-screen min-h-screen bg-fixed bg-center bg-no-repeat bg-cover md:bg-top animate-fade-in-fwd"
				style={{ backgroundImage: `url(${BG})` }}
			>
        <div className="transition-opacity bg-gray-900 opacity-50 fade-out-hero" />
      </div>
    
    <div className="container relative z-10 flex items-center justify-center h-auto py-48 mx-auto animate-fade-in-fwd">
      <div className="z-10 flex flex-col items-center px-8 xl:px-0">
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
        <span 
        className="p-0 mx-6 mt-1 mb-8 font-sans text-xl text-5xl font-light tracking-wider text-center text-green-700 md:my-10 lg:text-6xl sm:text-center sm:mx-0 text-shadow-lg animate-scale-in-center l">
          Inhale. 
        <span className="py-3 font-thin tracking-wider font-dancingscript"> <em>Exhale. </em></span> 
           <br className="block lg:hidden" />
            Repeat.
        </span>

        <p className="w-2/3 mx-auto my-6 text-xl font-normal text-center text-gray-200 md:py-6 text-shadow-md animate-scale-in-center">Free the mind, free the body.</p>
        <div className="flex flex-col justify-center mt-20 sm:flex-row md:mt-10">
         <Link to="#_" className="order-2 px-16 py-4 mx-4 my-2 font-sans font-bold text-center text-white bg-green-500 border-2 border-green-500 rounded-full hover:text-shadow-lg md:order-1 sm:mt-2 sm:px-8 sm:py-2 hover:bg-transparent animate-scale-in-center">Get Started</Link>
         <Link to="#_" className="order-1 px-16 py-4 mx-4 my-2 font-sans font-bold text-center text-white border-2 border-green-500 rounded-full md:order-2 text-shadow-lg sm:mt-2 sm:px-8 sm:py-2 hover:bg-green-500 animate-scale-in-center">Learn More</Link>
        </div>
        {/*</Transition>*/}
      </div>
    </div>
  </section>


    </>
) 
  }

export default S1Hero

