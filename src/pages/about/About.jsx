import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/Services/CustomComponents/CustomButton';
import bg from '../../assets/about/bg-about.jpg';
import member1 from '../../assets/about/member1.jpg';
import member2 from '../../assets/about/member2.jpg';
import member3 from '../../assets/about/member3.jpg';

// Sample team member data
const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    bio: 'Alice leads the vision and strategy at Digital Gateway Services.',
    image: member1,
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    bio: 'Bob drives the technical direction of our projects.',
    image: member2,
  },
  {
    name: 'Catherine Lee',
    role: 'COO',
    bio: 'Catherine ensures our operations run smoothly and efficiently.',
    image: member3,
  },
];

const About = () => {
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
            About Digital Gateway Services
          </h1>

          <h2 className='text-2xl font-semibold text-center text-white mb-4'>
            Mission Statement
          </h2>
          <p className='text-center text-lg text-white mb-8'>
            Empowering businesses through innovative digital transformation.
          </p>

          <h2 className='text-2xl font-semibold text-center text-white mb-4'>
            Our Story
          </h2>
          <p className='text-center text-lg text-white mb-8'>
            Founded in 2020, Digital Gateway Services emerged from a vision to
            help businesses navigate the digital landscape. We believe in
            harnessing technology to enhance operational efficiency and create
            new opportunities for growth.
          </p>

          <h2 className='text-2xl font-semibold text-center text-white mb-5'>
            Meet Our Team
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className='flex flex-col shadow-md scale-100 hover:scale-95 hover:shadow-2xl transition duration-300 rounded-lg p-6 border border-[#002366] bg-white bg-opacity-70 text-[#002366]'
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className='rounded-full mb-4 w-32 h-32 object-cover mx-auto'
                />
                <h2 className='text-xl font-semibold text-center'>
                  {member.name}
                </h2>
                <p className='text-center mb-4'>{member.role}</p>
                <p className='text-center mb-4'>{member.bio}</p>
                <div className='w-full flex items-center justify-center'>
                  <Link
                    to={`/team/${member.name
                      .replace(/\s+/g, '-')
                      .toLowerCase()}`}
                    className='mt-auto'
                  >
                    <CustomButton text='Learn More' />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-10'>
            <Link to='#'>
              <CustomButton text='Join Our Team' />
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
