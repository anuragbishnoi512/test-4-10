import React from 'react'
import CommonHeading from './common/CommonHeading'
import bookLady from '../assets/images/webp/book-lady.webp'
import threeDot from '../assets/images/png/three-dot.png'
import mountain from '../assets/images/png/mountain.png'
const Hero = () => {
  return (
    <div>
      <div className='container'>
        <div className='flex flex-col items-center mt-[97px]'>
          <CommonHeading heading='Stop Paying Top Dollar For Poor Leads' className="" />
          <p className='font-lato font-normal text-base text-center max-w-[836px] mt-4'>Leverage seasoned industry marketers to position your center as the go-to for treatment seekers and seamlessly transition them to admissions experts for maximum facility growth.</p>
        </div>
        <div className='flex gap-[110px] mt-[40px] justify-center'>
          <div>
            <img src={bookLady} alt="man/pic" className='max-w-[348px]' />
          </div>
          <div className='mt-9'>
            <div className='p-5 rounded-xl shadow-3xl'>
              <div className=''>
                <div className='flex gap-[10px]'>
                  <img src={threeDot} alt="icon/svg" className='h-[30px] w-[30px]' />
                  <h3 className='font-messiri font-semibold text-2xl text-darkBlue'>Pay-Per-Click Advertising</h3>
                </div>
                <p className='font-lato font-normal text-base opacity-70 text-darkBlue max-w-[470px] mt-4 ml-[40px]'>Their targeted ad campaigns, precise keyword selection, and conversion rate optimization ensures that your center captures high-intent leads.</p>
              </div>
            </div>
            <div className='p-5 rounded-xl shadow-3xl mt-5'>
              <div className=''>
                <div className='flex gap-[10px]'>
                  <img src={mountain} alt="icon/svg" className='h-[30px] w-[30px]' />
                  <h3 className='font-messiri font-semibold text-2xl text-darkBlue'>Outsourced Admissions Team</h3>
                </div>
                <p className='font-lato font-normal text-base opacity-70 text-darkBlue max-w-[470px] mt-4 ml-[40px]'>Their team specializes in navigating out-of-network policies and provides a dashboard to track metrics such as daily leads and pending VOBs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero