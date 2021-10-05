import React from 'react' 


import TopPic from '../../../images/stock_nature/view-4592212_1920.jpg'

const S2AboutMe = (props) => {
    return(
        <>
<section className="relative mx-auto">

  <div className="py-20 bg-gray-50 radius-for-skewed">
    <div className="container px-4 mx-auto md:px-16">
      <div className="relative flex">

        <div className="w-full xl:w-4/5 xl:ml-auto">
          <img className="relative object-cover mx-auto rounded md:max-w-xl xl:max-w-4xl" src={TopPic} alt />

          <div className="top-0 left-0 max-w-xl p-6 mx-auto mt-12 text-center bg-white rounded shadow xl:absolute xl:mt-20 xl:mx-0 xl:py-24 border-gray-50">
            <h2 className="text-5xl font-bold text-green-600 font-heading font-dancingscript">Connection is Necessary for all Humans</h2>
            <p className="max-w-xs mx-auto leading-loose text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </>
    )
}

export default S2AboutMe