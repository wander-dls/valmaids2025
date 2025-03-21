"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DatePickerDemo } from "@/components/DatePickerDemo"
import PhoneInput from 'react-phone-input-2'
import SelectBeds from "@/components/SelectBeds"
import SelectTime from "@/components/SelectTime"
import 'react-phone-input-2/lib/style.css'


const Form = () => {
  const [phone, setPhone] = useState('')
  return (
    <>
       <div className="w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-rose-500">Schedule an Appointment</h1>
            <p className="text-lg text-rose-300">Fill out the form below to schedule an appointment</p>
            <hr className="w-1/2 my-4" />
            <form className="w-full flex flex-col justify-center items-center overflow-hidden">
                <div className="w-1/2 flex-col justify-center items-center grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-4 gap-4">
                    <div className="border border-rose-500 w-1/2 col-span-1 rounded-lg">
                        <Input className="w-full" type="text" placeholder="First Name" />
                    </div>
                    <div className="border border-rose-500 w-full col-span-1 rounded-lg">
                        <Input className="w-full" type="text" placeholder="Last Name" />
                    </div>
                    <div className="border border-rose-500 w-full col-span-1 rounded-lg">
                        <Input className="w-full" type="email" placeholder="Enter Your Email" />
                    </div>
                    <div className="border border-rose-500 w-full col-span-1 rounded-lg">
                        <PhoneInput country={'us'} value={phone} onChange={setPhone} />
                    </div>
                    <div className="border border-rose-500 w-full col-span-1 rounded-lg">
                        <DatePickerDemo />
                    </div>
                    <div className="border border-rose-500 w-full col-span-1 rounded-lg">
                        <SelectBeds />
                    </div>
                    <div className="border border-rose-500 w-full col-span-2 rounded-lg">
                        <SelectTime />
                    </div>
                    <div className="border border-rose-500 w-full col-span-2 rounded-lg">
                        <Textarea className="w-full" placeholder="Message" />
                    </div>
                </div>
                <div className="w-1/2">
                  <Button className="bg-rose-500 cursor-pointer text-white px-4 py-2 rounded-lg text-2xl mt-2 drop-shadow-lg hover:bg-rose-300 w-full">
                      Submit
                  </Button>
                </div>
            </form>
            
            <p className="text-rose-300 mt-4 text-center">We will contact you to confirm your appointment
            Thank you for choosing ValMaids</p>
            <p className="text-rose-300">We look forward to serving you, Have a great day!</p>
            <p className="text-rose-300">- ValMaids Team</p>
            <p className="text-rose-300">- 555-555-5555</p>
            
            <hr className="w-1/2 my-4" />
       </div>
    </>
  )
}

export default Form

/*

  inputs needed:
  - first name
  - last name
  - email
  - phone
  - date of appointment
  - time of appointment
  - message


*/