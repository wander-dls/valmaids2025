"use client"
import { useState } from "react"
import {NavLinks} from "@/constants/index"
import Link from "next/link"
import { IoMenuSharp } from "react-icons/io5"
import { IoCloseSharp } from "react-icons/io5"
import Image from "next/image"
import logo from "@/assets/valmaids-logo.svg"


const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    return (
       <>
        <nav className="flex items-center justify-between p-5 h-5 bg-purple-500 border border-b-2 border-purple-500 fixed w-full z-100">
            <div>
                <Link className="text-2xl font-bold text-rose-100 hover:text-rose-200" href="/">
                    <Image width={100} height={100} src={logo} alt="ValMaids Logo" />
                </Link>
            </div>
            {/* Mobile links */}
            <div className={`${menuToggle ? "block" : "hidden"} md:hidden`}>
                <ul className="flex flex-col mt-40 ml-30 sm:ml-55 w-full justify-center items-center space-y-2 bg-purple-500">
                    {NavLinks.map((link) => (
                        <li className="text-rose-100 hover:text-rose-500 hover:bg-rose-100" key={link.title}>
                            <Link href={link.href
                            }>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="block md:hidden z-20">
                <button onClick={() => setMenuToggle(!menuToggle)}>
                    {menuToggle ? <IoCloseSharp className="text-rose-100 text-2xl" /> : <IoMenuSharp className="text-rose-100 text-2xl" />}
                </button>
            </div>
            {/* Desktop links */}
            <div className="hidden md:block">
                <ul className="space-x-5 flex">
                    {NavLinks.map((link) => (
                        <li className="text-rose-100 hover:text-rose-200"  key={link.title}>
                            <Link href={link.href}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
       </>
    )
}

export default Navbar