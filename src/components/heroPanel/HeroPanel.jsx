import PropTypes from "prop-types";
import {useRef, useState} from "react";
import useIntersectionObserver from "../../hooks/UseIntersectionObserver";
export default function HeroPanel(props) {
    const hero = props.hero
    const [loading, setLoading] = useState(true)
    const ref = useRef()

    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setLoading(false);
                observerElement.unobserve(ref.current);
            }
        }
    });

    return (
        <div ref={ref} className={`${loading ? "animate-pulse bg-gray-200 dark:bg-gray-300" : ""} w-40 h-56 rounded flex flex-col relative overflow-hidden bg-slate-300 shadow-lg shadow-zinc-300`}>
            {loading? null : (
                <img className={"rounded object-contain absolute top-0 left-0 flex-1 z-1"} src={hero.images.md} alt={hero.name} loading={"lazy"}/>
            )}
            {loading? null : (
            <div className={`text-white flex max-h-full flex-col justify-end items-start text-left relative p-2 flex-1 z-5 bg-gradient-to-b from-transparent to-black ${loading ? "hidden" : ""}` }>
                <h2 className={"text-lg font-bold m-0"}>{hero.name}</h2>
                <p className={"m-0 text-sm"}>Height: {hero.appearance.height[1] !== "0 cm" ? hero.appearance.height[1] : "Unknown"}</p>
                <p className={"m-0 text-sm"}>Weight: {hero.appearance.weight[1] !== "0 kg" ? hero.appearance.weight[1] : "Unknown"}</p>
            </div>
                )}
        </div>
    )
}

HeroPanel.propTypes = {
    hero: PropTypes.object
}