import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/Services/CustomComponents/CustomButton';
import bg from '../../assets/pricing/bg-pricing.avif'; // Background image for the pricing page

const pricingPlans = [
  {
    name: 'Basic',
    price: 'QAR 5,000/month',
    features: ['Lead Management System', 'Email Marketing', 'Basic Support'],
  },
  {
    name: 'Pro',
    price: 'QAR 10,000/month',
    features: [
      'Lead Management System',
      'Email Marketing',
      'Appointment Setter',
      'Chat Integration',
    ],
  },
  {
    name: 'Enterprise',
    price: 'QAR 20,000/month',
    features: [
      'Lead Management System',
      'Email Marketing',
      'Appointment Setter',
      'Chat Integration',
      'Dedicated Support',
    ],
  },
];

const Pricing = () => {
  return (
    <section
      className=' bg-cover bg-center relative'
      style={{ backgroundImage: `url(${bg})`, padding: '0' }}
    >
      {/* Blue Overlay */}
      <div className='absolute inset-0 primary opacity-50'></div>
      <main className='max-w-[90vw] mx-auto'>
        {/* Content */}
        <div className='relative z-10 py-12'>
          <h1 className='heading text-center underline mb-10 text-white'>
            Choose Your Plan
          </h1>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className='flex flex-col shadow-md scale-100 hover:scale-95 hover:shadow-2xl transition duration-300 rounded-lg p-6 border border-[#002366] bg-white bg-opacity-70 text-[#002366]'
              >
                <h2 className='text-xl font-semibold text-center mb-4'>
                  {plan.name}
                </h2>
                <p className='text-2xl font-bold text-center mb-4'>
                  {plan.price}
                </p>
                <ul className='list-disc list-inside mb-4'>
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className='w-full flex items-center justify-center'>
                  <Link
                    to={`/pricing/${plan.name.toLowerCase()}`}
                    className='mt-auto'
                  >
                    <CustomButton text='Choose Plan' />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-10'>
            <p className='text-white mb-4'>
              Need a custom solution?{' '}
              <Link to='/contact' className='text-yellow-400 underline'>
                Contact us.
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Pricing;
