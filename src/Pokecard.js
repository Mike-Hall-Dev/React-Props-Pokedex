import React from "react";
import "./Pokecard.css"

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

function Pokecard(props) {
    let imageSource = `${BASE_URL}${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{props.name}</div>
            <img className="Pokecard-img" src={imageSource} alt="" />
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="Pokecard-data">EXP: {props.exp}</div>
        </div>
    );
}

export default Pokecard;