import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div id="services" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 bg-[#070812]">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 leading-tight">
            Collaborate with Brand<br />Agencies to create <br />impactful results</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
                <ServiceCard
                  icon="/images/s1.png"
                  name="UI and UX"
                  description="Designing interfaces that are intuitive, efficient, and enjoyable to use"
                />
                <ServiceCard
                  icon="/images/s2.png"
                  name="Web and Mobile App"
                  description="Creating responsive web and mobile applications with seamless user experiences"
                />
                <ServiceCard
                  icon="/images/s3.png"
                  name="Design and Creative"
                  description="Delivering creative solutions that bring your brand vision to life"
                />
                <ServiceCard
                  icon="/images/s4.png"
                  name="Development"
                  description="Building scalable, performant applications with modern technologies"
                />
              
            </div>
      
    </div>

  )
}

export default Services
