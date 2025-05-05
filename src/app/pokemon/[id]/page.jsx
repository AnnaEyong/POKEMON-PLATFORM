import { Pokemons } from '@/app/utils/data';
import FooterComponent from '@/components/footer/FooterComponent';
import NavbarComponent from '@/components/navbar/NavbarComponent';
import React from 'react'

export async function generateMetadata({ params }) {
  const { id } = params;
  const pokedata = Pokemons.find(item => item.id == id);

  if (!pokedata) {
    return {
      title: "Pokémon Not Found",
    };
  }

  return {
    title: `${pokedata.name} - Pokémon Explorer`,
    description: `Discover information about ${pokedata.name}, including stats, types, and more.`,
    icons: {
      icon: pokedata.image,
      apple: pokedata.image,
      shortcut: pokedata.image,
    },
    openGraph: {
      title: `${pokedata.name} - Pokémon Explorer`,
      description: `Explore detailed information about ${pokedata.name} in our modern Pokédex.`,
      url: `${pokedata.image}`,
      siteName: "Pokémon Explorer",
      images: [
        {
          url: pokedata.image,
          width: 1200,
          height: 630,
          alt: `${pokedata.name} Pokémon`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pokedata.name} - Pokémon Explorer`,
      description: `Explore ${pokedata.name} on Pokémon Explorer powered by PokéAPI.`,
      images: [pokedata.image],
    },
  };
}

const Page = async({params}) => {
    const {id} = await params;
        const  pokedata = Pokemons.find(item => item.id == id)
  return (
    <>
    <NavbarComponent />

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
