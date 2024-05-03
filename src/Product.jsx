import React from 'react'
import img1 from "../img/shep1.avif"
import img2 from "../img/shep2.avif"
import img3 from "../img/shep3.avif"
import img4 from "../img/shep4.jpg"
const Product = () => {
    let Items =[
        {
            id: 1,
            img: img1,
            title : "Junior Cook",
            auther : "The Commis Chef reports to a specific Chef de Partie to learn all about that station and its operation. Commis Chefs usually work alongside completing other culinary training in order to gain invaluable on the job experience."
        },
        {
            id: 2,
            img: img2,
            title : "Middle Cook",
            auther : "To produce the perfect dish, it is necessary to have a chef who is responsible for each food group. Most large kitchens have multiple stations where different food items and meal components are prepared and made ready to plate and serve."
        },
        {
            id: 3,
            img: img3,
            title : "Senior Cook",
            auther : "This senior chef has overall control of the kitchen and its staff. They’re often the contact point between suppliers and manage kitchen costs.To become a head chef, you need a great deal of experience within the culinary industry, including knowledge of flavors and cooking methods."
        },
        {
            id: 4,
            img: img4,
            title : "Chief Cook",
            auther : "The Executive chef sits at the top of the kitchen hierarchy. This role is more of a managerial or business-orientated position.They usually don’t have a lot to do with the daily running of the kitchen itself."
        }
    ]
  return (
    <div>
        <h1 className='text-3xl font-semibold text-center text-white pt-5 pb-6'>Chief Ranks</h1>
  <div className='grid grid-cols-4 overflow-hidden product' id='ranks'>
  {
        Items.map((item,i)=>{
            return(
                <div className='w-[320px] m-auto h-[480px] bg-gray-700 text-white overflow-hidden rounded-lg cart'>
                    <div>
                        <img className='w-full h-[220px]' src={item.img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-medium'>{item.title}</h1>
                        <p>{item.auther}</p>
                    </div>
                </div>
            )
        })
      }
  </div>
    </div>
  )
}

export default Product
