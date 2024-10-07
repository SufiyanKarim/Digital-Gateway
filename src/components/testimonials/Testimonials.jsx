import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
function Testimonials() {
  const TestimonialCard = ({ quote, name, company }) => (
    <div className='bg-gray-50 p-6 h-[170px] rounded-lg shadow-md'>
      <p className='text-gray-600 italic mb-4'>"{quote}"</p>
      <p className='font-semibold'>{name}</p>
      <p className='text-sm text-gray-500'>{company}</p>
    </div>
  );

  return (
    <div>
      {/* Client Testimonials */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            What Our Clients Say
          </h2>
          <Swiper
            className='h-[200px] '
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            //  navigation
            pagination={{ clickable: true }}
            //  scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 1500 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialCard
                quote='Digital Gateway Services transformed our online presence. Highly recommended!'
                name='John Doe'
                company='Tech Solutions Inc.'
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                quote='The lead management system has significantly improved our conversion rates.'
                name='Jane Smith'
                company='Marketing Pros LLC'
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                quote='Their customer support is exceptional. Always there when we need them.'
                name='Mike Johnson'
                company='E-commerce Experts'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
