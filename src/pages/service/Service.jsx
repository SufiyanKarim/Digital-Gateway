import { useParams } from 'react-router-dom';
import { services } from '../services/Services';
import bg from '../../assets/services/bg.jpg';
import service from '../../assets/services/service.jpg';
import CustomButton from '../../components/Services/CustomComponents/CustomButton';

const Service = () => {
  const { id } = useParams();
  const singleService = services.find((item) => item.id === parseInt(id));
  const { name, fieldDefinition, icon, cta, category } = singleService;
  return (
    <section
      className=' bg-cover bg-center relative '
      style={{ backgroundImage: `url(${bg})`, padding: '0' }}
    >
      {/* Blue Overlay */}
      <div className='absolute inset-0 bg-black opacity-75'></div>
      <main className='max-w-[90vw] mx-auto '>
        {/* Content */}
        <div className='relative z-10 text-white flex  flex-col lg:flex-row gap-10 justify-center items-center  '>
          <div className='flex flex-col items-center justify-center gap-10 py-12'>
            <h1 className='heading text-center underline  '>{name}</h1>
            <div className='flex items-center justify-center gap-6'>
              <span className='text-3xl'>{icon}</span>
              <span className='text-lg uppercase'>Category: {category}</span>
            </div>
            <p className='text-xl'>{fieldDefinition}</p>
            <CustomButton text={cta} />
          </div>
          <img
            src={service}
            alt='service page image'
            className='hidden lg:block lg:w-1/2  h-1/2 rounded-md '
          />
        </div>
      </main>
    </section>
  );
};

export default Service;
