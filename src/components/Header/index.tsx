
import Image from 'next/image'
import logo2 from '../../../public/logo2.jpg'
import PokeBall from '../../../public/pokemon2.jpg'


 const Header = () => {
    return(
        <header className='header'>
            <div className='header__icon'>
                <Image src={PokeBall} alt='Pokeball'/>
            </div>
            <div className='header__logo'>
                <Image src={logo2} alt='Pokeball'/>
            </div>
            <div className='header__avatar'>
                <Image src={PokeBall} alt='Pokeball'/>
            </div>
        </header>
    )
}

export default Header