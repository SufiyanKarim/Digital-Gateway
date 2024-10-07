import React from 'react'
import { ArrowRight, MessageSquare, Users, Calendar, Star } from 'lucide-react';

function ServicesOverview() {
  const ServiceCard = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-secondary font-semibold flex items-center">
        Learn More <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
  return (
    <div>
             {/* Services Overview Section */}
      <section className="pt-16 pb-20 body-color">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#fff]">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Text Messaging"
              description="Reach your customers instantly with our SMS platform."
            />
            <ServiceCard
              title="Chat Widget"
              description="Engage visitors on your website with real-time chat support."
            />
            <ServiceCard
              title="Email Builder"
              description="Create stunning email campaigns with our easy-to-use builder."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesOverview
