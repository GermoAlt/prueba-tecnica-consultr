import "../services/apiService"
import HeroPanel from "../components/HeroPanel";
import {getHeroes} from "../services/apiService";
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
        <main className={"mt-[60px] flex flex-row flex-1 justify-evenly flex-wrap items-stretch gap-2 px-2"}>
            {getHeroCards()}
        </main>
    )
}