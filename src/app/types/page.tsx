import './types.scss'
    
let allTypes: string[];
const Types = () => {

    const fetchType = async () => {
        try {
        const respponse = await fetch('https://pokeapi.co/api/v2/type/')
        const data = await respponse.json();
        allTypes = data.results.map((item: {name: any;}) => item.name);
    } catch (error) {
        console.log(error)
    }
}
     fetchType()
    return(
        <div className="pokemon__types">
        {allTypes && allTypes.filter((item, index) => index < 18).map((item: string, index:number) => <a key= {index} href='' className={`pokemon__content--${item}`}>{item}</a>)}
        </div>
    )
}

export default Types