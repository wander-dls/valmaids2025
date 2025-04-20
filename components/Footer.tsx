import { Socials } from "@/constants"
import { FooterLinks } from "@/constants"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className="w-full h-20 bg-purple-500 text-white flex flex-col justify-between items-center p-4">
        <div className="flex gap-4 right-0">
            {FooterLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                    {link.title}
                </Link>
            ))}
        </div>
        <div className="flex gap-4">
            {Socials.map((icon, index) => (
                <Link key={index} href={icon.href}>
                    {icon.icon}
                </Link>
            ))}
        </div>
        <p>© 2025 Valmaids. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer