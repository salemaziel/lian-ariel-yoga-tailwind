import React from 'react' 

import BG from '../images/stock_stone_towers/pexels-nicollazzi-xiong-668353.jpg'


const Banner = (props) => {
    return(
        <>
        <section className="relative pt-20 bg-gray-200 bg-top bg-no-repeat bg-cover"  style={{backgroundImage: `url('${BG}')`}}>
            <div className="container justify-center py-10 mx-auto text-center">

                <h1>
                    {props.bannerTitle}
                </h1>
            </div>


        </section>
        </>
    )
}

export default Banner