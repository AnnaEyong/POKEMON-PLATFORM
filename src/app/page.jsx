
"use client"
import Image from "next/image"
import CardComponent from "@/components/card/CardComponent"
import NavbarComponent from "@/components/navbar/NavbarComponent"
import FooterComponent from "@/components/footer/FooterComponent"
import { Pokemons, Types } from "./utils/data"
import { useState } from "react"


const Page = () => {
    // console.log(Pokemons)
    const [searchTerm, setSearchTerm] = useState('')
    let searchResult = searchTerm.length > 0 ? Pokemons.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) : Pokemons;
    
    
     const [selectedType, setSelectedType] = useState(null)
     const filteredItems = selectedType ? searchResult.filter(item => item.type.toLowerCase() == selectedType.toLowerCase()) : searchResult;
     searchResult = filteredItems;
    
    
    
    return ( 
        <>
        <NavbarComponent />

    <div>
        <section className="h-screen w-full flex justify-center items-center bg-blue-200 relative">
            {/* <img src='/3575628.jpg className="w-[100%] h-[100%] object-cover relative'></img> */}
            <video src="/https://www.bing.com/videos/riverview/relatedvideo?&q=landscape+pokemon+videos&&mid=DA72270BC9DA3B1DA772DA72270BC9DA3B1DA772&&mcid=838ECCEFE7024BB49790DCE641612745&FORM=VRDGAR" controls autoPlay loop className="w-[100%] h-[100%] object-cover relative"></video>
            <div className="absolute w-[100%] h-[100%] bg-black/40  items-center">
            <div className='absolute top-60 px-20 py-8 rounded-r-full bg-black/40'>
                <h1 className='text-white font-extrebold text-4xl'>EXPLORE THE WORLD OF POKEMON</h1>
                <p className="w-[500px] text-2xl font-lighter text-white">"Discover the diverse landscapes, fascinating creatures, and rich history of the Pokemon world."</p>
                <button className='bg-purple-800 rounded-md font-medium px-5 mt-3 py-2 text-white'>Explore</button>
            </div>
            </div>
        </section>

        <div className="flex justify-between items-center pt-5 mb-[-20px] px-10">
             <input value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} type="search" placeholder="search for a pokemon" className="m-5 bg-gray-200 py-3 px-5 w-[400px] rounded-3xl outine-none "/>
        <div className='flex gap-4'> 
            <button onClick={() => setSelectedType(null)} className='bg-purple-800 hover:bg-purple-500  cursor-pointer text-gray-200 px-4 py-2 rounded-2xl'>All</button>
            {Types.map((item,index) => 
                <button onClick={() => setSelectedType(item.name)} key={index} className='text-md text-gray-200 bg-purple-800 hover:bg-purple-500 focus:bg-purple-500 cursor-pointer px-4 py-2 rounded-xl' > {item.name} </button>
            )}
        </div>
        </div>
        
        

        {/* <div className='flex flex-wrap gap-5 p-5 justify-center items-center'> */}
        <div className='flex flex-wrap justify-center gap-5 mb-10 p-10'>
            {searchResult.map((item,index) => <CardComponent id={item.id} image={item.image} type={item.type} name={item.name} key={index} /> )}
        </div>
    </div>

    <FooterComponent />
        </>
    )
}



export default Page;