import "./heroPanel.css"
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
        <div className={`hero-card ${loading ? "skeleton" : ""}`} ref={ref}>
            {loading? null : (
                <img src={hero.images.md} alt={hero.name} loading={"lazy"}/>
            )}
            {loading? null : (
            <div className={"card-info"} style={loading ? {display:"none"} : {}}>
                <h2>{hero.name}</h2>
                <p>Height: {hero.appearance.height[1] !== "0 cm" ? hero.appearance.height[1] : "Unknown"}</p>
                <p>Weight: {hero.appearance.weight[1] !== "0 kg" ? hero.appearance.weight[1] : "Unknown"}</p>
            </div>
                )}
        </div>
    )
}

HeroPanel.propTypes = {
    hero: PropTypes.object
}