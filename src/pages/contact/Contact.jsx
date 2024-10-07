import { useState } from 'react';
import pic1 from '../../assets/contact/pic1.jpg';
import pic2 from '../../assets/contact/pic2.jpg';
import { CiFacebook } from 'react-icons/ci';
import { FaLinkedin, FaInstagramSquare, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className='h-[40vh] w-full bg-cover bg-center'
        style={{
          backgroundImage: `url(${pic2})`,
        }}
      >
        <div className='h-[40vh] w-full  primary opacity-70 absolute '></div>
        <p className='text-white text-4xl text-center pt-[100px] relative font-bold'>
          Contact Us
        </p>
      </div>

      {/* Intro Section */}
      <div className='flex flex-col md:flex-row justify-around items-center my-10'>
        <div className='h-auto md:h-[40vh] w-full md:w-[40%] px-5 md:px-0 text-center md:text-left'>
          <p className='text-[40px] md:text-[70px] text-center font-semibold'>
            Get In Touch
          </p>
          <p className='my-5 text-lg text-center'>
            Users are welcomed by a section titled "Get In Touch", highlighting
            a brief description of the company's mission and an accompanying
            image to enhance visual appeal.
          </p>
        </div>
        <img
          src={pic1}
          alt=''
          className='h-auto w-full md:h-[60vh] md:w-auto mt-5 md:mt-0'
        />
      </div>

      {/* Contact Form Section */}
      <div
        className=' bg-cover bg-center relative'
        style={{
          backgroundImage: `url(${pic2})`,
        }}
      >
        <div className='absolute inset-0 primary opacity-70'></div>

        <div className='py-10 relative z-10 flex flex-col md:flex-row justify-center items-center gap-5 px-5 md:px-0'>
          {/* Form Section */}
          <div className=' h-auto w-full md:w-[35%] px-5 py-5 border-l border-l-gray-500 rounded-lg border-r border-r-gray-500 md:bg-transparent'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name' className='block text-white'>
                Name
              </label>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className='w-full py-3 rounded-lg border-t border-t-gray-500 border-b border-b-gray-500 ps-2 outline-none my-1 mb-4'
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name}</p>
              )}

              <label htmlFor='email' className='block text-white'>
                Email
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                className='w-full py-3 rounded-lg ps-2 outline-none my-1 mb-4 border-t border-t-gray-500 border-b border-b-gray-500'
              />
              {errors.email && (
                <p className='text-red-500 text-sm'>{errors.email}</p>
              )}

              <label htmlFor='phone' className='block text-white'>
                Phone Number
              </label>
              <input
                type='text'
                name='phone'
                placeholder='Enter your phone number'
                value={formData.phone}
                onChange={handleChange}
                className='w-full py-3 rounded-lg border-t border-t-gray-500 border-b border-b-gray-500 ps-2 outline-none my-1 mb-4'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm'>{errors.phone}</p>
              )}

              <label htmlFor='message' className='block text-white'>
                Message
              </label>
              <textarea
                name='message'
                placeholder='Enter Message'
                value={formData.message}
                onChange={handleChange}
                className='w-full py-3 rounded-lg border-t border-t-gray-500 border-b border-b-gray-500 ps-2 outline-none my-1 mb-4 h-[30vh]'
              ></textarea>
              {errors.message && (
                <p className='text-red-500 text-sm'>{errors.message}</p>
              )}

              <button className='w-full md:w-[80px] py-2 rounded-lg border text-white '>
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className='w-full md:w-[45%] p-2 md:px-0 rounded-lg border-r border-r-gray-500 border-b border-b-gray-500'>
            <p className='text-3xl font-semibold text-white text-center'>
              Contact Us
            </p>
            <div className='flex flex-col md:flex-row justify-around items-center my-8'>
              <p className='text-lg text-white'>
                Phone Number:{' '}
                <span className='text-sm text-gray-400'>
                  +1(222) 986 776 23
                </span>
              </p>
              <p className='text-lg text-white'>
                Email Address:{' '}
                <span className='text-sm text-gray-400'>
                  info@mywebsite.com
                </span>
              </p>
            </div>
            <p className='text-lg text-white text-center'>
              Physical Office Address:{' '}
              <span className='text-sm text-gray-400'>
                34 Street, here city name, United States
              </span>
            </p>
            <div className='flex justify-center items-center mt-9 gap-7'>
              <CiFacebook className='text-xl text-white icn' />
              <FaLinkedin className='text-xl text-white icn' />
              <FaInstagramSquare className='text-xl text-white icn' />
              <FaGithub className='text-xl text-white icn' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
