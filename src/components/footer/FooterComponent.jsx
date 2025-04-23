import React from 'react'
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

export default function FooterComponent() {
  return (
    <>
    <div className='flex flex-wrap justify-center gap-10 px-10 py-10 bg-blue-100'>

      <div className='flex flex-col items-center mt-[-25px] justify-center'>
        <img src='/logo.png' alt='Logo' className='w-[180px] '/>
        <p className='obtique mt-[-30px] text-sm w-40 text-center'>Where adventure meets excitement</p>
      </div>

      <div>
        <h1 className='font-bold py-3'>Nav Links</h1>
        <ul>
            <li className='py-1'>Home</li>
            <li className='py-1'>About Us</li>
            <li className='py-1'>Contact Us</li>
        </ul>
      </div>

      <div>
        <h1 className='font-bold py-3'>Pokemon-Related Links</h1>
        <ul>
            <li className='py-1'>Pokemon Games</li>
            <li className='py-1'>Pokemon Animes</li>
            <li className='py-1'>Pokemon Trading Card Game</li>
        </ul>
      </div>

      <div>
        <h1 className='font-bold py-3'>Community Features</h1>
        <ul>
            <li className='py-1'>Forums</li>
            <li className='py-1'>Social Media</li>
            <li className='py-1'>Newsletters</li>
        </ul>
      </div>

      <div>
        <h1 className='font-bold py-3'>Legal and Policy</h1>
        <ul>
            <li className='py-1'>Terms of Service</li>
            <li className='py-1'>Privacy Policy</li>
            <li className='py-1'>Copyright Information</li>
        </ul>
      </div>

      <div>
        <h1 className='font-bold py-3 '>Nav Links</h1>
        <ul className='flex gap-3'>
            <li className='py-1'><SiFacebook size={25} /></li>
            <li className='py-1'><AiFillInstagram size={25} /></li>
            <li className='py-1'>Contact Us</li>
        </ul>
      </div>
    </div>

<div className='bg-blue-100'>
    <div className='flex justify-center items-center font-semibold border-t-1 border-gray-400 mx-10 bg-transparent py-3'>
        Pokemon. All Rights Reserved
    </div>
</div>
    </>
  )
}
