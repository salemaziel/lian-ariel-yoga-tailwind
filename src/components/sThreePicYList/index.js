import React from 'react'
import ListItem from './ListItem';







const ThreePicYList = (props) => {
    return(
        <>
  {/* Section ThreePicYList */}
  <section className="relative pt-16 pb-20 bg-transparent sm:pt-24 sm:pb-32" /*bg-gray-50*/>
    <div className="items-center max-w-6xl px-12 mx-auto sm:px-20 md:px-5">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
          <div className="w-full max-w-md xl:max-w-xl">
            <h2 className="relative mb-6 text-3xl font-semibold leading-tight tracking-tight xl:font-bold lg:text-6xl xl:text-7xl">
              {props.Title}
            </h2>
            <ListItem
            items={[
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
              {
                icon: "https://cdn.devdojo.com/images/february2021/checkmark.png",
                title: "Lorem ipsum dolor sit amet"
              },
            ]} />
          </div>
        </div>
        <div className="relative w-full px-3 mb-12 lg:-ml-20 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
          <img className="absolute top-0 right-0 z-10 hidden mx-auto -mt-32 rounded-lg shadow-2xl opacity-100 xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src="https://cdn.devdojo.com/images/february2021/sky-bg.jpg" />
          <img className="relative z-20 w-full mx-auto mt-3 rounded-lg shadow-2xl sm:max-w-none lg:-ml-10 lg:max-w-sm" src="https://cdn.devdojo.com/images/february2021/tesla-img.jpg" alt="feature image" />
          <img className="absolute bottom-0 right-0 z-10 hidden mx-auto -mb-48 rounded-lg shadow-2xl xl:-mr-12 sm:max-w-xs lg:max-w-sm lg:block" src="https://cdn.devdojo.com/images/february2021/bg-colorful1.jpg" />
        </div>
      </div>
    </div>
  </section>

        </>
    )
}

export default ThreePicYList