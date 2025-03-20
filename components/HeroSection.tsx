"use client"

import heroImage from "@/public/landing-splash.jpg"
import  Link  from "next/link"
import Image from 'next/image'
import {Button} from "@/components/ui/button"
import { motion as m } from "framer-motion"


const HeroSection = () => {
    return (
        <>
            <main className="flex flex-col justify-center items-center relative h-screen">
                <m.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="
                    text-center w-full mx-20 z-50 flex flex-col items-center justify-center">
                    <div  className="">
                        <h1 className="text-7xl font-bold text-white">Valmaids</h1>
                        <h2 className="text-3xl text-rose-300">Professional Cleaning Services</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center z-50">
                        <p className="text-white mt-4">Book your Cleaning</p>
                        <Button  className="bg-rose-500 text-white px-4 py-2 rounded-full text-2xl mt-2 drop-shadow-lg">
                            <Link href="/contact">
                                Now!
                            </Link>
                        </Button>
                    </div>
                </m.div>
                <Image src={heroImage} alt="Hero Image" fill className="object-cover object-center z-0" priority/>
                <div className="absolute inset-0 bg-black/60"></div>
                
            </main>
        
        </>

    )
}

export default HeroSection