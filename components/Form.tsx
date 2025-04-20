/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { motion as m } from "framer-motion"
import { toast } from "sonner"
import { info } from "@/constants"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import emailjs from '@emailjs/browser'
import 'react-phone-input-2/lib/style.css'


const Form = () => {
  const [phone, setPhone] = useState('')
  const [firstName, setFisrtName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [bed, setBed] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    bedrooms: "",
    time: ""
  })

  const form = useRef<HTMLFormElement>(null)
  

  const sentEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs.sendForm('service_798toyg', 'template_lob4ztj', form.current, 'user_Il99xAYsTCv9ajUwjun9y')
        .then((result) => {
          setData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            bedrooms: "",
            time: ""
          })
          toast.success("Message sent successfully")
          console.log(result.text);
        }, (error) => {
          toast.error("Message not sent")
          console.log(error.text);
        })
    }
  }

  return (
    <>
       <m.section initial={{ opacity: 0}}
        animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }} className="py-6 h-screen mt-30 xl:mt-60">
            <div className="container mx-auto">
              <div className="flex flex-col gap-[30px] xl:flex-row">
                <div className="xl:w-[54%] xl:order-none">
                  <form className="flex flex-col gap-6 bg-rose-200 rounded-xl p-3" onSubmit={sentEmail} ref={form}>
                  <h3 className="text-rose-400 mt-6 text-center text-2xl">Get in touch with us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type={firstName} name="firstName" placeholder="Firstname" value={data.firstName} onChange={e => {setData({...data, firstName: e.target.value})}} />
                    <Input type={lastName} name="lastName" placeholder="Last name" value={data.lastName} onChange={e => {setData({...data, lastName: e.target.value})}} />
                    <Input type={email} name="email" placeholder="Email address" value={data.email} onChange={e => {setData({...data, email: e.target.value})}} />
                    <Input type={phone} name="phone" placeholder="Phone Number" value={data.phone} onChange={e => {setData({...data, phone: e.target.value})}} />
                  </div>
                      <Textarea className="w-full h-[40px]" placeholder="Leave us a message" name="message" value={data.message} onChange={e => {setData({...data, message: e.target.value})}}/>
                      <Button className="bg-rose-500 cursor-pointer text-white px-4 py-2 rounded-lg text-2xl mt-2 drop-shadow-lg hover:bg-rose-300 w-full"> Submit </Button>
                  </form>
                </div>
                <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 mx-6 xl:mx-0">
                  <ul className="flex flex-col gap-6">
                    {info.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center gap-6">
                          <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex items-center justify-center rounded-md text-rose-400 bg-rose-200">
                            <div className="text-[28px]">{item.icon}</div>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900/60">{item.title}</p>
                            <h3 className="text-xl">{item.description}</h3>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
        </m.section>
    </>
  )
}

export default Form

