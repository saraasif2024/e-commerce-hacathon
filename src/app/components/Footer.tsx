"use Client"
import React from 'react'
import { BsEnvelope, BsInstagram } from 'react-icons/bs'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im'
import Image from "next/image"

const Footer = () => {
  return (
    <div>
        <div className='relative top-24 xl:top-1/2 transfor xl:translate-y-1/2 h-589px mt-0 xl:mt-[50px] ml-5 lg:ml-[270px] flex flex-col  lg:flex-row  w-[358px] h-[293px] lg:w-[1240px] lg:h-[180px] rounded-[20px] items-center  justify-between py-[30px] px-[40px] xl:py-[36px] xl:px-[64px] bg-[#000000]'>
     
       <h1 className=' w-[310px] lg:w-[551px] h-[105px] lg:h-[94px] lg:text-center text-white text-[32px] lg:text-[40px] leading-[35px] lg:leading-[45px] font-extrabold'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

       <div className="relative w-[311px] lg:w-[349px] flex flex-col space-y-4">
  <div className="relative">
    <BsEnvelope className="absolute left-[16px] top-[15px] text-[20px] text-[#00000066]" />
    <input
      type="text"
      placeholder="Enter your email address"
      className="placeholder-[#00000066] h-[50px] bg-white rounded-full py-[12px] pl-[50px] pr-[16px] w-full text-[14px] lg:text-[16px] font-[400] leading-[21.6px] border"
    />
  </div>
  <input
    type="text"
    placeholder="Subscribe to Newsletter"
    className="placeholder-black text-center h-[50px] bg-white rounded-full py-[12px] px-[16px] w-full  text-[14px] lg:text-[16px] font-[400] leading-[21.6px] border"
  />
</div>

         </div>

         <div className=" w-[392px] h-[1100px] xl:h-auto pb-0  xl:w-full bg-[#F0F0F0] ml-[-1px] text-[#00000099]">

        <div className="flex flex-col xl:flex-row xl:h-[177px]  justify-center ml-[1px] pt-32 xl:pt-[150px] gap-0 xl:gap-[110px]">
               <ul className='flex justify-start'>
               <li className='flex flex-col items-start ml-4 gap-4  xl:gap-9 h-[177px] w-[248px] '>
                    <h1 className='text-[28.35px]  xl:text-[33.45px] leading-[34.62px] xl:leading-[1.15px] font-extrabold text-[#000000]'>SHOP.CO</h1>
                    <p className='text-[14px] xl:text-4'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex gap-2 text-black'>
                    <ImTwitter className='bg-white  h-5 w-7 rounded-full' />
                    <FaFacebook className='bg-white  h-5 w-7 rounded-full' />
                    <BsInstagram  className='bg-white  h-5 w-7 rounded-full'/>
                    <FaGithub className='bg-white  h-5 w-7 rounded-full' />
                    </div>
                </li>
               </ul>


               <ul className='grid grid-cols-2 p-10 pt-0 gap-10 xl:p-0 xl:flex justify-evenly xl:gap-24'>
               <li className=' flex flex-col gap-2 xl:gap-3'>
                    <h1 className='text-[14px] xl:text-[16px] font-bold tracking-[3px] text-black'>COMPANY</h1>
                        <p>About</p>
                        <p>Features</p>
                        <p>Works</p>
                        <p>Center</p>
                </li>

                <li className=' flex flex-col gap-2 xl:gap-3'>
                    <h1  className='text-[14px] xl:text-[16px] font-bold tracking-[3px]'>HELP</h1>
                        <p>Customer Support</p>
                        <p>Delivery Details</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </li>
               
                    <li className=' flex flex-col gap-2 xl:gap-3'>
                    <h1  className='text-[14px] xl:text-[16px] font-bold tracking-[3px]]'>FAQ</h1>
                        <p>Accounts</p>
                        <p>MAnage Deliveries</p>
                        <p>Orders</p>
                        <p>Payement</p>
                    </li>
                    <li className=' flex flex-col  gap-2 xl:gap-3'>
                    <h1  className='text-[14px] xl:text-[16px] font-bold tracking-[3px]'>RESOURCES</h1>
                        <p>Free eBooks</p>
                        <p>Development Tutoria</p>
                        <p>How to-Blog</p>
                        <p>Youtube Playlist</p>
                   </li>
               </ul>
                
                 
        </div>

        <hr className="border-[1px] border-[#0000001A] m-0 xl:m-[200px] xl:mb-5" />
        <div className='flex flex-col items-center xl:flex-row xl:justify-around'>
           <p>© 2000-2021, All rights reserved</p>
            <div className='flex mt-3 mb-5  gap-2 xl:gap-10'>
            <Image
            src="/Assets/Visa.png" 
            alt="PaymentMethod"
            width={46.61}
            height={30.03} 
            className="object-contain bg-white "
          />
          <Image
            src="/Assets/Mastercard.png" 
            alt="PaymentMethod"
            width={46.61}
            height={30.03} 
            className="object-contain  bg-white"
          />
            <Image
            src="/Assets/Paypal.png" 
            alt="PaymentMethod"
            width={46.61}
            height={30.03} 
            className="object-contain bg-white"
          />
           <Image
            src="/Assets/pay.png" 
            alt="PaymentMethod"
            width={46.61}
            height={30.03} 
            className="object-contain bg-white"
          />
            <Image
            src="/Assets/G Pay.png" 
            alt="PaymentMethod"
            width={46.61}
            height={30.03} 
            className="object-contain bg-white"
          />
            </div>
        </div>
      </div>
    </div>


  )
}

export default Footer