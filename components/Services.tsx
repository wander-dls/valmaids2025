"use client"
import { Services } from "@/constants"
import {motion as m } from "framer-motion"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

const ServicesSection = () => {
    return (
        <>
            <section className="h-full w-full flex flex-col gap-6 justify-center items-center p-2 mt-2" id="services">
                <m.div 
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    
                    className="w-full flex justify-center items-center flex-col gap-6">
                    <div className="w-full flex justify-center items-center -mb-6">
                        <h1 className="uppercase text-purple-500 font-bold text-3xl max-w-2xl mx-auto">What to expect</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto relative">
                        {Services.map((service, index) => (
                            <m.div key={index} variants={item} className="text-purple-500 border border-purple-500 rounded-xl p-8 flex flex-col items-center justify-center">
                                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h2 className="text-gray-500 text-2xl font-bold text-center mt-4">{service.title}</h2>
                                <p className="text-gray-500 text-center mt-4">{service.description}</p>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </section>
        </>
    )
}

export default ServicesSection
