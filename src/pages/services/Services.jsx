import bg from '../../assets/services/bg.jpg';
import {
  FaPhoneAlt,
  FaCommentDots,
  FaEnvelope,
  FaLaptop,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/Services/CustomComponents/CustomButton'; // Adjust the path as necessary

// Sample service data
export const services = [
  {
    id: 1,
    name: 'Lead Connector App',
    description:
      'Connect with potential clients instantly with our branded Lead Connector App, available on Android and iOS.',
    icon: <FaPhoneAlt />,
    cta: 'Learn More',
    category: 'Mobile Apps',
    fieldDefinition: `
      Mobile applications have revolutionized the way businesses interact with their customers. 
      These apps provide users with direct access to services and information, making it easier for companies to engage with their target audience. 
      From e-commerce solutions to customer relationship management, mobile apps are vital for enhancing user experience and driving sales.
    `,
  },
  {
    id: 2,
    name: 'Text Messaging',
    description:
      'Communicate directly with your customers through our easy-to-use text messaging service.',
    icon: <FaCommentDots />,
    cta: 'Get Started',
    category: 'Communication',
    fieldDefinition: `
      Communication services have evolved to encompass a wide range of platforms and technologies, 
      allowing businesses to connect with customers through various channels. 
      Text messaging is a powerful tool for real-time communication, enabling businesses to send updates, promotions, and personalized messages. 
      Effective communication strategies foster stronger relationships, enhance customer satisfaction, and increase retention.
    `,
  },
  {
    id: 3,
    name: 'Chat Widget',
    description:
      'Engage your website visitors in real-time with our customizable chat widget applications.',
    icon: <FaLaptop />,
    cta: 'Learn More',
    category: 'Web Tools',
    fieldDefinition: `
      Web tools, including chat widgets, are essential for enhancing user engagement on websites. 
      These tools provide instant communication, allowing businesses to assist visitors, answer questions, and guide them through the sales funnel. 
      Real-time interactions can significantly improve conversion rates and provide valuable insights into customer needs and behaviors.
    `,
  },
  {
    id: 4,
    name: 'Email Builder',
    description:
      'Create stunning email campaigns with our drag-and-drop email builder.',
    icon: <FaEnvelope />,
    cta: 'Get Started',
    category: 'Marketing',
    fieldDefinition: `
      Email marketing remains one of the most effective digital marketing strategies available. 
      With a user-friendly email builder, businesses can design visually appealing campaigns that resonate with their audience. 
      Personalization and segmentation are key components, enabling marketers to deliver tailored content that boosts engagement and drives conversions.
    `,
  },
  {
    id: 5,
    name: 'Analytics Dashboard',
    description:
      'Track your performance metrics with our comprehensive analytics dashboard.',
    icon: <FaLaptop />,
    cta: 'View Dashboard',
    category: 'Analytics',
    fieldDefinition: `
      Analytics is crucial for understanding business performance and customer behavior. 
      A comprehensive analytics dashboard aggregates data from various sources, providing insights into key metrics and trends. 
      By analyzing this data, businesses can make informed decisions, optimize strategies, and ultimately improve ROI.
    `,
  },
  {
    id: 6,
    name: 'Social Media Manager',
    description:
      'Manage all your social media accounts in one place with our intuitive platform.',
    icon: <FaCommentDots />,
    cta: 'Get Started',
    category: 'Social Media',
    fieldDefinition: `
      Social media has transformed the landscape of marketing and customer engagement. 
      A social media manager consolidates all accounts into one platform, allowing for efficient content scheduling, monitoring, and interaction. 
      Successful social media strategies enhance brand visibility, foster community engagement, and drive traffic to websites.
    `,
  },
];

const Services = () => {
  return (
    <section
      className=' bg-cover bg-center relative'
      style={{ backgroundImage: `url(${bg})`, padding: '0' }}
    >
      {/* Blue Overlay */}
      <div className='absolute inset-0 primary opacity-70'></div>
      <main className='max-w-[90vw] mx-auto '>
        {/* Content */}
        <div className='relative z-10  py-12'>
          <h1 className='heading text-center underline mb-10 text-white'>
            Our Services
          </h1>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <div
                key={service.id}
                className='flex flex-col scale-100 hover:scale-95  transition duration-300 rounded-lg p-6 border border-[#002366] bg-white bg-opacity-70 text-[#002366]'
              >
                <div className='flex items-center justify-center mb-4'>
                  <span className='text-5xl'>{service.icon}</span>
                </div>
                <h2 className='text-xl font-semibold text-center'>
                  {service.name}
                </h2>
                <p className='text-center mb-4'>{service.description}</p>
                <div className='w-full flex items-center justify-center'>
                  <Link to={`/services/${service.id}`} className='mt-auto'>
                    <CustomButton text={service.cta} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Services;
