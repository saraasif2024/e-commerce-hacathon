import React from 'react'
import Card from './card'

const Reviews = () => {
  return (
    <div>
      <div className='p-5 pb-0'>
        <h1 className="text-[32px] xl:text-[48px] font-extrabold ml-0 leading-[36px] xl:ml-[130px] mt-10  xl:mt-20 mb-0 xl:mb-10">OUR HAPPY CUSTOMERS</h1>
           <div className="flex flex-col xl:flex-row justify-center gap-10">
            <Card name="Sarah M." feedback=" 'I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.'"/>
           
            <Card name="Alex K." feedback='"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions. "'/>
         
            <Card name="James L." feedback=" 'As someone who's always on the lookout for unique fashion pieces , I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.' "/>
           </div>
      </div>
    </div>
  )
}

export default Reviews