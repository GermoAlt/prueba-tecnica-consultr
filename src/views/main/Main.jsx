import "../../services/apiService"
import "./main.css"
import HeroPanel from "../../components/heroPanel/HeroPanel";
import {getHeroes} from "../../services/apiService";
import {useEffect, useState} from "react";
export default function Main() {
    const [heroesList, setHeroesList] = useState([])

    useEffect(()=> {
        getHeroes()
            .then((res) => res.json())
            .then((heroes) => setHeroesList(heroes))
        window.scrollTo(0,0)
    }, [])

    const getHeroCards = () => {
        return heroesList.map((item) =>
            <HeroPanel key={item.name.concat(item.images.sm)} hero={item}/>
        )
    }

    return (
        <main>
            {getHeroCards()}
        </main>
    )
}