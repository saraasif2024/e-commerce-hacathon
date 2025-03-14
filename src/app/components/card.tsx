
"use Client"

import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoMdStar } from 'react-icons/io'


interface CardProps {
  name: string;
  feedback: string;
}

const Card: React.FC<CardProps> = ({ name, feedback }) => {
  return (
    <div>
      <div className='flex-col w-[358px] h-[186.19px] xl:w-[500px] p-[12px]  xl:h-[260px] xl:py-[28px] xl:px-[32px] border-2 border-[#0000001A]'>
        
        <div className='flex w-[118px] xl:w-auto text-[#FFC633] text-[40px] mb-0 xl:mb-3'>
    <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar />
    </div>
    <h1 className='text-[16px] xl:text-[26px] font-extrabold leading-[22px] mb-3'>{name}<span className="inline-flex items-center justify-center w-4 h-4 xl:w-6 xl:h-6 bg-green-500 text-white rounded-full border-2 border-green-500">
  <AiOutlineCheck/>
</span></h1>
    <p className='text-[14px] xl:[16px] leading-5 xl:leading-[22px] ' >{feedback}</p>
        </div>
   
      </div>
  )
}

export default Card
