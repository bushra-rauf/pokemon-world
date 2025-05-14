import Image from "next/image"
import { PokemonType } from "@/utils/types"
export const DisplayPokemon = ({id, name, image, types}: PokemonType) => {
    return(
      <div className= 'pokemon__content'>
        <div className= 'pokemon__content-name'> {name}</div>
        <div className= 'pokemon__content-image'>
            <Image alt={name} src={image} height={300} width={300}/>
        </div>
        <div className='pokemon__content--type'>
            {types.map((item: string, index: number) => <span className={`pokemon__content--${item}`} key={index}>{item}</span>)}
        </div>

      </div>
    )
}