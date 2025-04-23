import { Pokemons } from '@/app/utils/data';
import React from 'react'



const Page = async({params}) => {
    const {id} = await params;
        const  pokedata = Pokemons.find(item => item.id == id)
  return (
    <>
    <NavComponent />

    <div className='flex gap-5 items-center justify-center h-screen'>

    <img src={pokedata.image} width="300px" height="300px" />
    
    <div>
      <h1 className="text-3xl">{pokedata.name}</h1>
      <h1 className="text-xl">{pokedata.type}</h1>
      <h1 className="text-xl">{pokedata.hp}</h1>
      
    </div>
</div>

<FooterComponent />
</>
  )
}

export default Page
