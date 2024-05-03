import React from 'react'
import taom from "../img/taom.jpg"
const About = () => {
    return (
        <div className='mb-[100px] mt-[100px] about' id="about2">
            <div>
                <h1 className=' mt-5 mb-8 text-center text-white text-3xl font-bold '>About Us</h1>
            </div>
            <div className='flex about'>
                <div className='w-[50%] about_child'>
                    <p className='text-white font-semibold pl-5 pr-5'>While this "work kitchen" and variants derived from it were a great success for tenement buildings, homeowners had different demands and did not want to be constrained by a 6.4-square-metre (69 sq ft) kitchen. Nevertheless, the kitchen design was mostly ad-hoc following the whims of the architect. In the U.S., the "Small Homes Council", since 1993 the "Building Research Council", of the School of Architecture of the University of Illinois at Urbana–Champaign was founded in 1944 with the goal to improve the state of the art in home building, originally with an emphasis on standardization for cost reduction. It was there that the notion of the kitchen work triangle was formalized: the three main functions in a kitchen are storage, preparation, and cooking (which Catharine Beecher had already recognized), and the places for these functions should be arranged in the kitchen in such a way that work at one place does not interfere with work at another place, the distance between these places is not unnecessarily large, and no obstacles are in the way. A natural arrangement is a triangle, with the refrigerator, the sink, and the stove at a vertex each.To produce the perfect dish, it is necessary to have a chef who is responsible for each food group. Most large kitchens have multiple stations where different food items and meal components are prepared and made ready to plate and serve.To produce the perfect dish, it is necessary to have a chef who is responsible for each food group. Most large kitchens have multiple stations where different food items and meal components are prepared and made ready to plate and serve.</p>
                </div>
                <div className="about_img">
                    <img className='rounded-lg' src={taom} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About