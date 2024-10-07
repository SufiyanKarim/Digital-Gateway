import React from 'react';
import dig1 from '../../assets/digital/dig3.jpg';
import dig3 from '../../assets/digital/cont1.jpg';
import dig4 from '../../assets/digital/cont3.jpg';
import dig5 from '../../assets/digital/cont4.jpg';
import { BiSolidBookContent } from "react-icons/bi";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Digitalmarket() {
  return (
    <>
      <div
        className="h-[50vh] w-full bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${dig1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className='h-[50vh] w-full primary opacity-50 absolute'></div>
        <p className='text-[50px] text-white relative'>Digital Marketing</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full my-8">
        {[{
          img: dig3,
          title: 'Content Marketing',
          description: 'We specialize in crafting tailored content marketing strategies designed to engage your target audience and elevate your brand\'s online presence.',
        }, {
          img: dig5,
          title: 'Email Marketing',
          description: 'We offer comprehensive email marketing services designed to connect you with your audience and drive measurable results. Our strategic approach ensures that your email campaigns are engaging and aligned with your business objectives.',
        }, {
          img: dig4,
          title: 'Influencer Marketing',
          description: 'We harness the power of influencer marketing to amplify your brand’s reach and drive engagement. Our tailored influencer marketing services are designed to connect you with the right influencers who resonate with your target audience.',
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
  );
}

export default Digitalmarket;
