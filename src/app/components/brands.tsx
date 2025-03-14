import React from 'react'
import Image from "next/image"

const Brands = () => {
  return (
    <div>
        <div className='bg-black grid grid-cols-3 p-4 xl:pt-10 justify-between gap-0 xl:flex xl:justify-evenly xl:gap-8 h-[116px] xl:h-[122px] w-[390px] xl:w-auto'>
          <Image
            src="/Assets/brand1.png" 
            alt="brand"
            width={166.48}
            height={33.16}  
            className="object-contain w-[116.74px] h-[23.25px] xl:w-[166.48px] xl:h-[33.16px] " 
          />
          <Image
            src="/Assets/brand2.png" 
            alt="brand"
            width={91}
            height={37.96} 
            className="object-contain w-[63.81px] h-[26.65px] ml-8 xl:w-[91px] xl:h-[37.96px] xl:ml-0"
          />
          <Image
            src="/Assets/prada-logo-1 1.png" 
            alt="brand"
            width={156}
            height={36} 
            className="object-contain w-[109.39px] h-[25.24px] xl:w-[156px] xl:h-[36px]"
          />
          <Image
            src="/Assets/gucci-logo-1 1.png" 
            alt="brand"
            width={194}
            height={32} 
            className="object-contain w-[127px] h-[21px] xl:w-[196px] xl:h-[32px]"
          />
          <Image
            src="/Assets/brand5.png" 
            alt="brand"
            width={206.79}
            height={33.35} 
            className="object-contain w-[134.84px] h-[21.75px] xl:w-[206.79px] xl:h-[33.35px]"
          />
        </div>
    </div>
  )
}

export default Brands