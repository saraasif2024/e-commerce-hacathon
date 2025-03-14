import React from 'react'
import Image from "next/image"
import { IoMdStar } from 'react-icons/io'
import { FaStarHalf } from 'react-icons/fa'

const Product = () => {
  return (
    <div>
        {/* section1 */}
        <div className='flex-col mt-10 xl:mt-20 gap-10 '>
            <h1 className='text-center text-[32px] xl:text-[48px] leading-[38.4px] xl:leading-[57.6px] font-extrabold'>NEW ARRIVALS</h1>
       
       <div className="cards flex  gap-5 p-2 xl:p-10  rounded-[20px] justify-center mt-5">
      <div >
      <Image
  src="/Assets/image 7.png" 
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover w-[198px] h-[200.01px] xl:w-[295px] xl:h-[298px] gap-0  "
/>
<h1 className=' text-[12px] xl:text-[16px] font-bold leading-[21.6px] xl:leading-[27px] mt-3'>T-SHIRT WITH TAPE DETAILS</h1>
<p className='text-[12px] xl:text-[20px] flex text-[#FFC633]'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>4.5/5</span></p>
     <h1 className='font-bold text-[18px] xl:text-[24px]'>$120</h1>
      </div>


      <div>
      <Image
  src="/Assets/Frame 33.png" 
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover w-[198px] h-[200.01px] xl:w-[295px] xl:h-[298px] gap-0  "
/>
<h1 className='text-[12px] xl:text-[16px] font-bold leading-[27px] mt-3'>SKINNY FIT JEANS</h1>
<p className='text-[12px] xl:text-[20px] flex text-[#FFC633]'><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>3.5/5</span></p>
     <h1 className='font-bold text-[18px] xl:text-[24px]'>$260 <span className='line-through text-[#00000066] ml-3'>$260</span> <span className='text-[#FF3333] ml-3 text-[14px] leading-[16.2px] bg-[#00000066'>-20%</span></h1>
      </div>


      <div className='hidden xl:flex flex-col w-[295px] h-[298px] gap-0 '>
      <Image
  src="/Assets/Frame 34.png"
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover  "
/>
<h1 className='text-4 font-bold leading-[27px] mt-3'>CHECKERED SHIRT</h1>
<p className='text-[20px] flex text-[#FFC633]'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>4.5/5</span></p>
     <h1 className='font-bold  xl:text-[24px]'>$180</h1>
      </div>



      <div className='hidden xl:flex flex-col w-[295px] h-[298px] gap-0 '>
      <Image
  src="/Assets/image 10.png"
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover h "
/>
<h1 className='text-4 font-bold leading-[27px] mt-3'>SLEEVE STRIPED T-SHIRT</h1>
<p className='text-[20px] flex text-[#FFC633]'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>4.5/5</span></p>
     <h1 className='font-bold xl:text-[24px]'>$130<span className='line-through text-[#00000066] ml-3'>$160</span> <span className='text-[#FF3333] ml-3 text-[14px] leading-[16.2px] bg-[#00000066'>-30%</span></h1>
      </div>
      </div>
    </div>

    <hr className="border-[1px] border-[#0000001A] m-10 xl:m-20  mb-10 xl:mb-20" />



      {/* section2 */}
      <div className='flex-col mt-0 gap-10 '>
            <h1 className='text-center text-[32px] xl:text-[48px] leading-[38.4px] xl:leading-[57.6px] font-extrabold'>TOP SELLING</h1>
       
            <div className="cards flex  gap-5 p-2 xl:p-10  rounded-[20px] justify-center mt-5">
      <div >
      <Image
  src="/Assets/Frame 32 (1).png" 
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover w-[198px] h-[200.01px] xl:w-[295px] xl:h-[298px] gap-0  "
/>
<h1 className=' text-[12px] xl:text-[16px] font-bold leading-[21.6px] xl:leading-[27px] mt-3'>T-SHIRT WITH TAPE DETAILS</h1>
<p className='text-[12px] xl:text-[20px] flex text-[#FFC633]'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>4.5/5</span></p>
<h1 className='font-bold text-[18px] xl:text-[24px]'>$212 <span className='line-through text-[#00000066] ml-3'>$232</span> <span className='text-[#FF3333] ml-3 text-[14px] leading-[16.2px] bg-[#00000066'>-20%</span></h1>
      </div>


      <div >
      <Image
  src="/Assets/Frame 33 (1).png" 
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover w-[198px] h-[200.01px] xl:w-[295px] xl:h-[298px] gap-0  "
/>
<h1 className=' text-[12px] xl:text-[16px] font-bold leading-[21.6px] xl:leading-[27px] mt-3'>COURAGE GRAPHIC T-SHIRT</h1>
<p className='text-[12px] xl:text-[20px] flex text-[#FFC633]'><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>3.5/5</span></p>
<h1 className='font-bold text-[18px] xl:text-[24px]'>$145</h1>
   
      </div>


      <div className='hidden xl:flex flex-col w-[295px] h-[298px] gap-0 '>
      <Image
  src="/Assets/Frame 34 (1).png" 
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover h "
/>
<h1 className=' text-[12px] xl:text-[16px] font-bold leading-[21.6px] xl:leading-[27px] mt-3'>LOOSE FIT BERMUDA SHORTST</h1>
<p className='text-[20px] flex text-[#FFC633]'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>4.5/5</span></p>
     <h1 className='font-bold text-[20px] xl:text-[24px]'>$80</h1>
      </div>

      <div className='hidden xl:flex flex-col w-[295px] h-[298px] gap-0 '>
     
      <Image
   src="/Assets/Frame 38 (1).png" 
  alt="Hero Background"
  width={1000}
  height={100}
  className="object-cover h "
/>
<h1 className=' text-[12px] xl:text-[16px] font-bold leading-[21.6px] xl:leading-[27px] mt-3'>FADED SKINNY JEANS</h1>
<p className='text-[20px] flex text-[#FFC633] '><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><FaStarHalf /><span className='text-[#000000]'>4.5/5</span></p>
     <h1 className='font-bold xl:text-[24px]'>$210</h1>
      </div>
              
</div>

    </div>
             
<button className='w-[358px] h-[46px] mt-[20px] xl:mt-[50px] mb-[70px] bg-[#0000001A] text-[#000000] xl:w-[218px] xl:h-[52px] ml-3 xl:ml-[811px] rounded-[62px] border-[1px] py-1 xl:py-4 px-[54px]'>View All</button>
         
        
    </div>
  )
}

export default Product