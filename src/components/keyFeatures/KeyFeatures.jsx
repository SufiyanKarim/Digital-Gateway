import React from 'react';
import { ArrowRight, MessageSquare, Users, Calendar, Star } from 'lucide-react';

function KeyFeatures() {
  const FeatureCard = ({ icon, title, description }) => (
    <div className='bg-gray-50 p-6 rounded-lg shadow-md text-center'>
      <div className='text-primary mb-4 flex justify-center'>{icon}</div>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
  return (
    <div>
      {/* Key Features Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-[30px] font-bold text-center mb-12'>
            Key Features
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <FeatureCard
              icon={<MessageSquare size={40} />}
              title='All-in-one Communication Platform'
              description='Streamline your business communication with our integrated platform.'
            />
            <FeatureCard
              icon={<Users size={40} />}
              title='Lead Generation & CRM Integration'
              description='Capture and manage leads efficiently with our CRM solutions.'
            />
            <FeatureCard
              icon={<Calendar size={40} />}
              title='Appointment Setting Automation'
              description='Save time with automated scheduling and reminders.'
            />
            <FeatureCard
              icon={<Star size={40} />}
              title='Reputation Management & Reviews'
              description='Build and maintain your online reputation effortlessly.'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default KeyFeatures;
