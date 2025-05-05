"use client"
import { useCart } from '@/store/cart.store';
import { useStoreFavorite } from '@/store/favorite.store';
import Link from 'next/link'
import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function NavbarComponent() {

  const  {selectedFavoriteIds} = useStoreFavorite()
  const  favoriteSize = selectedFavoriteIds.length

  const  {addedItemIds} = useCart()
  const  cartSize = addedItemIds.length

  return (
    <div className='bg-blue-800 text-white flex justify-between items-center h-[60px] w-full px-10 py-8 fixed z-5'>
      <img src='/logo.png' alt='Logo' className='w-[180px]'/>
      <ul className='flex gap-2 relative'>
        <li className='cursor-pointer hover:bg-white hover:bg-opacity-80 py-1 px-3 rounded-md  hover:text-black transition duration-300'><FaCartShopping  size={28} /></li>
        <button className="rounded-3xl w-3 h-3 bg-red-500 text-[0.5rem] absolute right-45 bottom-2 flex justify-center items-center">{cartSize}</button>
        <li className="cursor-pointer hover:bg-white/30 py-1 px-3 rounded-md transition duration-300"><FaHeart size={25}  /></li>
        <button className="rounded-3xl w-3 h-3 bg-red-500  text-[0.5rem] absolute right-33 bottom-2 flex justify-center items-center">{favoriteSize}</button>
        <Link href="/contact" className='cursor-pointer hover:bg-white/30 py-1 px-3 rounded-md   transition duration-300'>Contact Us</Link>
          <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
          </SignedIn>
      </ul>
    </div>
  )
}
