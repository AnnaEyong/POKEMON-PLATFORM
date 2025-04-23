import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { FaHeart } from "react-icons/fa";
import { useStoreFavorite } from '@/store/favorite.store';
import { useCart } from '@/store/cart.store';

export default function CardComponent({id, image, name, type, hp, attack}) {

    const { selectedFavoriteIds, toggleHeartIcon} = useStoreFavorite()
    let isSelected =  selectedFavoriteIds.includes(id)

    const { addedItemIds, toggleCartButton } = useCart()
    let isAdded = addedItemIds.includes(id)

    // var greet = "Hello Seven Academy"
    // const salutation = () => {
    //     alert(greet)
    // }

  return (
    <div className=''>

   {/* card */}
 <div className="border-1 border-gray-300 rounded-lg relative w-[400px] h-[560px] overflow-hidden">   

<div className='bg-gray-400'>
<Link href={`/pokemon/${id}`} className=" rounded-t-lg">
    <img  src={image} alt="image"/>
</Link>
</div>
   
{/* content area */}
<div className="mt-4 p-4 flex flex-col gap-2">

<div className="flex justify-between items-center">
    <h1 className="font-bold text-2xl">{name}</h1>
    
</div> 

    <div className='bg-black/30  text-white py-3 px-5 rounded-full flex items-center justify-center absolute top-2 left-3'>
        <h3 className='font-bold'>{type}</h3>
    </div>

    {isSelected ? <FaHeart onClick={() => toggleHeartIcon(id)} size={25} color='red' className='absolute top-2 right-3 text-white cursor-pointer' /> : <FaHeart onClick={() => toggleHeartIcon(id)} size={25} className='absolute top-2 right-3 text-white cursor-pointer' />}
            
    <p>This is a simple card component</p>
    {isAdded ? <button onClick={() => toggleCartButton(id)} className="bg-blue-600 hover:bg-purple-800 transition duration-300 font-lighter px-10 justify-center text-lg text-gray-100 py-2 rounded-md cursor-pointer">Added</button>
: <button onClick={() => toggleCartButton(id)} className="bg-blue-600 hover:bg-purple-800 transition duration-300 font-lighter px-10 justify-center text-lg text-gray-100 py-2 rounded-md cursor-pointer">Add to Cart</button>
}


</div>
</div>
</div>
  )
}
