"use client"
import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import {useState} from "react";
import { MdLocationPin } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { RiMailSendFill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from "../utils/constants";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Page = () => {
    
    const form = useRef();
    const handleSendEmail = () => {
        
        emailjs
      .sendForm('service_bnq0374', 'template_2gyoz1m', form.current, {
        publicKey: '6U0wn5PpKOAIQPf_m',
      })
      .then(
        () => {
          toast.success('Email Sent Successfully!', toastConfig)
        },
        (error) => {
          toast.error('Opps!! Something went wrong', toastConfig)
        },
      );
    }
    // let number = 15
    // const [number, setNumber] = useState(0)
    // const [textEntered, setTextEntered] = useState("")
    // const [hasSubmited, setHasSubmited] = useState(false)

   
        const [isSubmitting, setIsSubmitting]= useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmitting(true);

            //simulate sending the message

            setTimeout(() => {
                //clear the form fields
                e.target.reset();
                setIsSubmitting(false);
            }, 2000);
        
        }
    
    // const increment = () => {
    //     setNumber(number+1)
    // }

    // const decrement = () => {
    //     setNumber(number >0 ? number-1 : 0)
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const inputValue = e.target.elements[0].value;
    //     setHasSubmited(inputValue); "submited"
        
    // }


    // // date function
    // var weekday = ["sun","mon","tue","wed","thu","fri","sat"];
    // var today = new Date().getDay();
    // var day = weekday[today];
    return (
        <>
        <NavbarComponent />
        <ToastContainer />
        {/* <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl"> the day of today is : {day ==="wed" ? "Wed" :"Not Wed"} </h1>
            <h1 className="text-9xl font-bold">{number}</h1>
        <div className="flex gap-4 mt-8">
            <button onClick={increment} className="bg-purple-800 text-white text-md p-3 cursor-pointer rounded-lg">Increment</button>
            {number > 0 && (
            <button onClick={decrement} className="bg-pink-800 text-white text-md p-3 cursor-pointer rounded-lg">Decrement</button>
            )}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-5">
                <input value={textEntered} onChange={(e) => setTextEntered (e.target.value)} className="px-5 py-3 bg-blue-100 w-[750px] font-bold  mt-5 mb-5 h-15 rounded-lg" type="text" placeholder="enter a value " />
                <button className="bg-green-700 px-5 py-3 mt-5  h-15 rounded-lg text-amber-50 cursor-pointer ">submit</button>
                </div>
               
                <h1 className="text-center text-2xl">{hasSubmited}</h1>
            </form>
        </div> */}

<div className="h-screen flex justify-center items-center py-13 px-40 bg-black/20 ">
        <section className='bg-white flex gap-5 justify-center items-center mt-15 rounded-lg backdrop-blur-md shadow-2xl h-[95%]'>

            <div className="bg-blue-800 text-gray-200 py-10 px-8  w-90 rounded-md h-full relative">

                <div className="w-56 h-56 absolute  rounded-full z-0 left-[20%] top-[1%] bg-gradient-to-r from-blue-800 to-purple-800"></div>
                <div className="w-15 h-15 absolute  rounded-full z-0 right-[-.1%] top-[2%] bg-gradient-to-l from-blue-800 to-purple-800"></div>
                <div className="w-46 h-46 absolute  rounded-full z-0 left-[5%] top-[60%] bg-gradient-to-l from-blue-800 to-purple-800"></div>
                <div className="w-36 h-36 absolute  rounded-full z-0 left-[60%] top-[45%] bg-gradient-to-r from-blue-800 to-purple-800"></div>

                <h1 className="text-4xl relative z-[1px] text-white">Reach Out</h1>
                <p className="py-5 w-90 relative z-[1px]">We provide solutions to your problems.<br />Don't worry, we won't delay.</p>

                <div className="flex flex-col gap-8 justify-left relative z-[1px]">
                    <div className="flex gap-3 items-center">
                        <MdLocationPin  size={30} className=""/>
                        <p><span>Adress:</span> Plo Alto, Mountain View, 303030</p>
                    </div>

                    <div  className="flex gap-3 items-center">
                        <RiMailSendFill  size={23} className=""/>
                        <p><span>Email:</span> pokemon@yahoo.com</p>
                    </div>

                    <div  className="flex gap-3 items-center">
                        <MdPhone  size={23} className=""/>
                        <p><span>Phone:</span> (+237) 670 167 299</p>
                    </div>
                </div>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="h-full py-10 px-5">
                <h1 className="py-2 text-2xl">Send us a message</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-200">
                        <label className="pl-4 py-2 text-sm">First Name</label>
                        <input name="firstName" className="pl-4 bg-transparent outline-none text-gray-700 rounded-md" type='text' placeholder='Anna' />
                    </div>

                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-200 ">
                        <label className="pl-4 py-2 text-sm">Last Name</label>
                        <input name="lastName" className="pl-4 bg-transparent outline-none text-gray-700" type='text' placeholder='Eyong' />
                    </div>

                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-200">
                        <label className="pl-4 py-2 text-sm">Email</label>
                        <input name="email" className="pl-4 bg-transparent outline-none text-gray-700" type='text' placeholder='example@gmail.com' />
                    </div>

                    <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-200">
                        <label className="pl-4 py-2 text-sm">Phone</label>
                        <input name="phone" className="pl-4 bg-transparent outline-none text-gray-700" type='text' placeholder='+237 670 167 299' />
                    </div>

                </div>

                <div className="flex flex-col shadow-md py-2 rounded-md border-1 border-gray-200 mt-4">
                    <label className="pl-4 py-4 text-sm">Write your message here</label>
                    <textarea name="message" className="pl-4 outline-none text-gray-700" placeholder='Message'></textarea>
                </div>
                    <button onClick={handleSendEmail} type="submit" disabled={isSubmitting} className="bg-purple-800 mt-4 text-white py-3 px-5 rounded-lg cursor-pointer hover:bg-purple-500">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
            </form>

        </section>
</div>
            <FooterComponent />
        </>
    )

}

export default Page;

//{day == "wed"? "wed":"not wed"}