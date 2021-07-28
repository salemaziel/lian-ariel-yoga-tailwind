import * as React from "react"

//import BG from "../../../images/stock_nature/pexels-johannes-plenio-1126380.jpg"
import BG from "../../../images/stock_stone_towers/pexels-nicollazzi-xiong-668353.jpg"


const S1Hero = () => (
    <>
    <div className="absolute inset-0 z-0 h-screen bg-center bg-no-repeat bg-cover animate-hero-fade-in" /*style={{backgroundImage: 'url(https://images.unsplash.com/photo-1533693706533-57740e69765d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)' }}*/ style={{backgroundImage: `url('${BG}')`}}/>
  {/* Section 1 */}
  <section className="relative w-full h-screen -mt-20 bg-center bg-no-repeat bg-cover animate-fade-in-fwd" /*style={{backgroundImage: 'url(https://images.unsplash.com/photo-1533693706533-57740e69765d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80)' }}*/>
    <div className="absolute inset-0 z-0 h-full bg-gray-900 opacity-50" />
    
    <div className="container flex items-center justify-center h-auto py-48 mx-auto">
      <div className="z-10 flex flex-col items-center px-8 xl:px-0">
        <h1 className="mx-6 mt-1 text-xl text-5xl font-black text-center text-green-700 lg:text-6xl sm:text-center sm:mx-0 text-shadow-lg animate-scale-in-center">Inhale. <em>Exhale.</em> <br className="block lg:hidden" />Repeat.</h1>
        <p className="w-2/3 my-6 text-xl font-normal text-center text-gray-200 text-shadow-md animate-scale-in-center">Free the mind, free the body.</p>
        <div className="flex flex-col justify-center mt-10 sm:flex-row md:mt-10">
          <a href="#" className="px-16 py-4 mx-4 my-2 text-center text-white bg-green-500 border-2 border-green-500 rounded-full sm:mt-2 sm:px-8 sm:py-2 hover:bg-transparent animate-scale-in-center">Get Started</a>
          <a href="#" className="px-16 py-4 mx-4 my-2 text-center text-white border-2 border-green-500 rounded-full sm:mt-2 sm:px-8 sm:py-2 hover:bg-green-500 animate-scale-in-center">Learn More</a>
        </div>
      </div>
    </div>
  </section>


    </>
) 

export default S1Hero