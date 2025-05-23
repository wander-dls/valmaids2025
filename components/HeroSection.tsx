"use client"

import  Link  from "next/link"
import Image from 'next/image'
import {Button} from "@/components/ui/button"
import { motion as m } from "framer-motion"
import logo from "@/assets/valmaids-logo.svg"
import heroImage from "@/assets/landing-splash.jpg"


const HeroSection = () => {
    return (
        <>
            <main className="flex flex-col justify-center items-center relative h-screen" id="home">
                <m.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="
                    text-center w-full mx-20 z-50 flex flex-col items-center justify-center">
                    <div  className="flex flex-col items-center justify-center overflow-hidden">
                        <Image className="ml-25 overflow-hidden" src={logo} alt="ValMaids Logo" width={550} height={550} />
                        <h2 className="text-3xl text-purple-300">Professional Cleaning Services</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center z-50">
                        <p className="text-white mt-4">Book your Cleaning</p>
                        <Button  className="bg-purple-500 text-white px-4 py-2 rounded-full text-2xl mt-2 drop-shadow-lg">
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