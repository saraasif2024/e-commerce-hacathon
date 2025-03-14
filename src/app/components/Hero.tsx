import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col xl:flex-row w-[390px]   bg-[#F2F0F1] mt-[30px] xl:w-full xl:h-auto" >

   <div className='flex-col w-[40%] pt-[70px] xl:pt-[120px] pl-[16px] xl:pl-[150px]'>
   
        <h1 className='w-[315px] h-[93px]  text-[36px] leading-[34px] xl:w-[577px] xl:h-[137px] xl:text-[64px] text-black font-extrabold xl:leading-[64px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className= 'w-[358px] h-[50px] text-[14px] mt-[20px]  xl:w-[545px] xl:h-[33px] xl:mt-[80px] leading-[24px] font-[400px] text-[#00000099]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className=' w-[358px] mt-[40px] bg-black text-white rounded-full xl:w-[210px] h-[52px] py-4 px-[54px] 
        text-[16px] font-[500px]'>Shop Now</button>


         <ul className='ml-10 xl:ml-0 grid grid-cols-2 w-[278px] gap-[60px] xl:flex xl:w-[596px] h-[74px] mt-[40px] xl:gap-[62px]'>
  <li className='w-[127px] h-[48px] flex-col items-center pr-[32px] border-r-2 border-[#0000001A]'>
    <h1 className='text-[24px] xl:text-[40px] font-bold leading-[54px]'>200+</h1>
    <p className='text-[#00000099] text-[12px]'>International Brands</p>
  </li>
  <li className='w-[117px] h-[48px] flex flex-col items-center pr-[32px] xl:border-r-2 border-[#0000001A]'>
    <h1 className='text-[24px] xl:text-[40px] font-bold leading-[54px]'>2,000+</h1>
    <p className='text-[#00000099] text-[12px]'>High-Quality Products</p>
  </li>
  <li className='ml-20  xl:ml-0 xl:flex flex-col items-center'>
    <h1 className='text-[24px] xl:text-[40px] font-bold leading-[54px]'>30,000+</h1>
    <p className='text-[#00000099] text-[12px]'>Happy Customers</p>
  </li>
</ul>

   </div>
   <div className="mt-[120px] xl:mt-0 h-[448px] xl:w-[70%] xl:h-[660px] overflow-hidden">
  <div className="relative flex xl:justify-center  xl:gap-2">
    <Image
      src="/Assets/vector (8).png"
      alt="Hero Background"
      width={100}
      height={100}
      className="object-cover absolute left-8 w-[44px] h-[44px] xl:w-[56px] xl:h-[56px] mt-[150px] xl:mt-[310px]  xl:ml-[100px]"
    />
    <Image
      src="/Assets/main.jpg"
      alt="Hero Background"
      width={650}
      height={100}
      className="object-cover   h-[600px] md:w-[390px] xl:w-[650px] xl:h-auto "
    />
    <Image
      src="/Assets/vector (8).png"
      alt="Hero Background"
      width={100}
      height={100}
      className="absolute right-8 object-cover w-[70px] h-[60px] md:w-[76px] md:h-[76px] xl:w-[104px] xl:h-[104px] mt-[40px] xl:mt-[100px] xl:mr-20 ml-0"
    />
  </div>
</div>


      </div>
    </div>
  )
}

export default Hero