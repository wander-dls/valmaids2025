import React, { ReactNode } from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdShield } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

// Types of constants used in the project
type Service = {
    title: string;
    description: string;
    icon: ReactNode;

}


export const NavLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Services",
        href: "/#services",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

export const FooterLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Services",
        href: "/#services",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

export const Services: Service[] = [
    {
        title: "Service",
        description: "We will devotedly provide valued assistance and guarantee your value through excellent service and utmost satisfaction.",
        icon: React.createElement(MdOutlineMiscellaneousServices)
    },
    {
        title: "100% Guarantee",
        description: "We promise to keep your homes and businesses clean while practicing safety protocols.",
        icon: React.createElement(MdShield)
    },
    {
        title: "Prices",
        description: "We offer competitive prices for our services and we will work with you to ensure that you are satisfied with our services.",
        icon: React.createElement(BiSolidDollarCircle)
    }
]

export const Socials = [
    {
        title: "Facebook",
        icon: React.createElement(FaFacebook),
        href: "https://www.facebook.com/profile.php?id=100067111652835"
    },
    {
        title: "Instagram",
        icon: React.createElement(FaInstagram),
        href: "hhttps://www.instagram.com/valmaidscleaning/"
    },
    {
        title: "Twitter",
        icon: React.createElement(FaTwitter),
        href: "https://www.twitter.com/valmaids"
    }
]