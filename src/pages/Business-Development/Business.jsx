import React from 'react'
import bus1 from '../../assets/Business-Development/bus1.jpg';
import mark from '../../assets/Business-Development/mark.jpg';
import eve1 from '../../assets/Nfc-card/eve1.jpg';
import pay1 from '../../assets/Nfc-card/pay1.jpg';
import { BiSolidBookContent } from "react-icons/bi";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Business() {
  return (
    <>
    
   
    <div
        className="h-[50vh] w-full bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${bus1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className='h-[50vh] w-full primary opacity-60 absolute'></div>
        <p className='text-[50px] text-white relative'>Business Development</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full my-8">
        {[{
          img: mark,
          title: 'Market Research',
          description: ' Market Research service equips your business with valuable insights into your target audience, competitors, and industry trends, enabling you to make informed decisions and capitalize on opportunities. We conduct thorough research to help you understand market dynamics and uncover key information that drives your business strategy.',
        }, {
          img: pay1,
          title: 'Strategic Planning',
          description: 'Our Strategic Planning service is designed to guide your business toward long-term success by developing clear, actionable plans aligned with your goals. We work closely with you to analyze current operations, market conditions, and competitive landscapes to create tailored strategies that drive growth and innovation.',
        }, {
          img: eve1,
          title: 'Reputation Building',
          description: 'Our Reputation Building service focuses on creating and maintaining a strong, positive image for your brand across all digital and traditional platforms. We help businesses foster trust and credibility with their target audience through a comprehensive strategy that includes:',
        }].map((item, index) => (
          <div key={index} className="h-auto w-full md:w-[40%] relative shadow-xl rounded-xl mainhover">
            <div
              className="h-[50vh] w-full border p-5 rounded-xl relative"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className='h-full w-full rounded-xl left-0 top-0 primary opacity-40 absolute'></div>
              <p className='text-3xl font-semibold text-white my-12 relative text-center'>{item.title}</p>
              <p className='text-xl font-semibold m-auto text-white relative rounded-xl border p-3 w-[40%] text-center'>View Detail</p>
              <div className="h-full w-full bg-white shadow-xl absolute z-50 p-5 rounded-xl left-0 top-0 opacity-0 hover:opacity-100 transition-opacity">
                <BiSolidBookContent className='text-4xl m-auto my-2 text-[#002366]' />
                <p className='text-3xl font-semibold text-[#002366] my-5 text-center'>{item.title}</p>
                <p className='text-center text-gray-500'>{item.description}</p>
                <div className="flex justify-center items-center gap-5 my-5">
                  <FaFacebook className='text-2xl text-[#002366] icn' />
                  <FaInstagramSquare className='text-2xl text-[#002366] icn' />
                  <FaLinkedin className='text-2xl text-[#002366] icn' />
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



    
    </>
  )
}

export default Business