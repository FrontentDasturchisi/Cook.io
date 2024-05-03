import React from 'react'
import home from "../img/home.jpg"
const Home = () => {
  return (
    <div className='flex items-center home' id='home1'>
      <div className='pt-[150px]  pl-5 object-cover home_img'>
        <img className='rounded-xl w-full object-cover ' src={home} alt="" />
      </div>
      <div className='flex flex-col items-end w-full title_text '>
        <p className='text-white text-lg font-medium pl-[100px] pr-5'>Natural food and all-natural food are terms in food labeling and marketing  with several definitions, often implying foods that are not manufactured by processing. In some countries like the United Kingdom, the term "natural" is defined and regulated; in others, such as the United States, the term natural is not enforced for food labels, although there is USDA regulation of organic labeling. The term is assumed to describe foods having ingredients that are intrinsic to an unprocessed food.</p>
        <button className='bg-blue-700 w-[120px] h-11 rounded-md mr-7 text-white mt-5 hover:bg-transparent hover:border'>Read All</button>
      </div>
    </div>
  )
}

export default Home
