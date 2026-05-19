import React from 'react'
import Image from 'next/image'

type ServiceCardProps = {  
    icon: string,
    name: string,
    description: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, name, description }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="flex justify-center mb-4">
        <Image src={icon} alt={name} width={60} height={60} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-bold text-white text-center mb-3">{name}</h3>
      <p className="text-gray-300 text-center text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default ServiceCard
