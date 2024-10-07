import React from 'react';
import card1 from '../../assets/Nfc-card/card1.jpg';
import card2 from '../../assets/Nfc-card/card2.jpg';
import eve1 from '../../assets/Nfc-card/eve1.jpg';
import pay1 from '../../assets/Nfc-card/pay1.jpg';
import { BiSolidBookContent } from "react-icons/bi";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Nfccard() {
  return (
    <>
    
    <div
        className="h-[50vh] w-full bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${card1})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className='h-[50vh] w-full primary opacity-60 absolute'></div>
        <p className='text-[50px] text-white relative'>NFC Card</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full my-8">
        {[{
          img: card2,
          title: 'Business Card',
          description: 'Business Cards – Elevate your professional image with cutting-edge NFC-enabled business cards. With just a tap, your contact details, social media profiles, website, and more are instantly shared with potential clients or partners.',
        }, {
          img: pay1,
          title: 'Payment Solutions',
          description: 'Payment Solutions – Revolutionize the way you handle transactions with NFC-enabled payment solutions. Our contactless payment cards provide fast, secure, and convenient ways for your customers to make purchases with just a tap',
        }, {
          img: eve1,
          title: 'Event Access',
          description: 'Event Access – Simplify and secure entry to your events with our NFC-enabled event access solutions. These smart cards ensure smooth, fast, and secure entry for attendees, eliminating long queues and manual ticket checks.',
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

export default Nfccard;
