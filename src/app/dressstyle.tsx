import React from 'react'
import Image from "next/image"

const Dressstyle = () => {
  return (
    <div>
        <div className=' w-[358px] lg:w-auto h-auto bg-[#F0F0F0] rounded-[40px] ml-5 lg:ml-[200px] mr-[200px] mt-[5px] lg:mt-[50px] p-[50px] pb-[20p5] lg:pb-[40px]'>
            <h1 className='text-[32px] lg:text-[48px] leading-[36px] font-extrabold text-center'>BROWSE BY DRESS STYLE</h1>
            <div className='flex-col '>
                <div className='flex flex-col items-center  lg:flex-row gap-[20px] lg:gap-[30px]'>
                <div className='flex justify-center bg-white mt-[64px] w-[310px] h-[190px] lg:w-[570px] lg:h-[289px] rounded-[40px] overflow-hidden'>
<h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px] pl-[15px]  lg:p-[25px]'>Casual</h1>

                    <Image
   src="/Assets/image 11.png" 
  alt="Hero Background"
  width={1000}
  height={100}
className="object-cover w-[210px] lg:w-[400px] "
/>
                    </div>
                    <div className='flex justify-center bg-white  w-[310px] h-[190px] lg:w-[689px] lg:mt-[50px] lg:h-[289px] rounded-[40px] overflow-hidden'>
                    <h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px]  pl-[15px] lg:p-[25px]'>Formal</h1>
  <Image
  src="/Assets/image 13.png" 
  alt="Hero Background"
  width={500}
  height={100}
  className="object-cover w-[210px] lg:w-[500px]"
/>
  </div>

                </div>

                <div className='flex flex-col items-center mt-5 lg:flex-row gap-[20px] lg:gap-[30px]'>
                <div className='flex justify-center bg-white  w-[310px] h-[190px] lg:w-[684px] lg:h-[289px] rounded-[40px] overflow-hidden'>
                    <h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px] lg:p-[25px]'>Party</h1>
  <Image
 
 src="/Assets/image 12.png" 
  alt="Hero Background"
  width={500}
  height={100}
  className="object-cover w-[210px] lg:w-[500px]"
/>

  </div>
  <div className='flex justify-center bg-white  w-[310px] h-[190px] lg:w-[570px] lg:h-[289px] rounded-[40px] overflow-hidden'>
<h1 className='text-[24px] lg:text-[36px] font-bold leading:[32.4px] lg:leading-[48.9px] p-[10px] pl-[15px] lg:p-[25px]'>Gym</h1>

                    <Image
src="/Assets/image 14.png" 
  alt="Hero Background"
  width={400}
  height={100}
className="object-cover w-[270px] lg:w-[400px] "
/>


                    </div>

                </div>     
            </div>
        </div>
    </div>
  )
}

export default Dressstyle
