"use client"

import Image from "next/image"
import aboutImage1 from "@/public/about-image1.jpg"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {motion as m } from "framer-motion"

const About = () => {
  return (
   <>
       <section className="h-screen bg-purple-100 w-full flex justify-center items-center" id="about">
          <m.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 1}} className="grid h-full w-full grid-cols-4 grid-rows-3 gap-6 p-20 xl:m-64 lg:m-32 md:m-16 sm:m-8">
            <div className="col-span-4 row-span-2 rounded-xl bg-gradient-to-r from-rose-300 to-rose-500 relative h-[40px]">
                <Image className="sm:h-85 h-115 object-cover object-center z-49 rounded-xl"  src={aboutImage1} alt="image for main box on about grid" />
                <h1 className="text-4xl -mt-59 sm:-mt-80 sm:ml-4 text-white leading-4 sm:leading-6 sm:text-rose-500 sm:w-xl sm:text-right font-bold sm:min-w-xl">You do the <span className="text-6xl text-rose-700">living</span>,
                <br /> we&apos;ll handle the <br /> <span className="text-6xl text-rose-700">cleaning</span>.</h1>
                  <div className="flex items-center justify-center z-50 ml-80 py-6">
                      <Button  className="hidden lg:block bg-purple-500 text-white px-4 py-0 rounded-full text-2xl drop-shadow-lg">
                          <Link href="/contact">
                              Book Us!
                          </Link>
                      </Button>
                  </div>
            </div>
            {/* info */}
            <div className="col-span-4 row-span-1 rounded-xl bg-gradient-to-r from-purple-400 to-purple-800">
                <p className="text-white leading-5 text-center mt-5 sm:mt-2 p-5">Valmaids Cleaning service is available 
                  to help simplify cleaning your home and/or 
                  business. We are grateful that you have 
                  chosen ValMaids Cleaning Services to take 
                  care of your space cleaning and maintenance needs.
                </p>
            </div>
          </m.div>
      </section>
   </>
  )
}

export default About