

import React from 'react' 
import { Pokemons } from "@/utils/data";
import NavbarComponent from "@/components/navbar/NavbarComponent"


const page = async ({params}) => {
    const {id} = await params;
    const  pokedata = Pokemons.find(item => item.id == id)
    return(
        <div className='flex gap-5 items-center justify-center'>
            <img src={pokedata.image} width="300px" height="300px" />
            <h1 className="text-[70px]">{pokedata.name}</h1>
        </div>
    )
}



   export default page;
