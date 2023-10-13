import React, {useEffect, useState} from 'react';
import './App.css';
import {useParams} from "react-router-dom";
import {PokedexModel} from "./model/PokedexModel";

function Pokedex() {
    const [pokedex, setPokedex] = useState<PokedexModel>();
    let {id} = useParams() as { id: string };
    useEffect(() => {
        getPokedex(id).then(r => setPokedex(r))
    }, [id]);

    const pokemonNames = pokedex?.pokemonEntries
        .map((pokemon, index) => <li key={index}>{pokemon.entryNumber}: {pokemon.pokemonSpecies.name}</li>);
    return (
        <div className="Pokedex">
            <header className="App-header">
                <h2>{pokedex?.name}</h2>
                <p>Is main series : {String(pokedex?.isMainSeries)}</p>
                <ul>{pokemonNames}</ul>
            </header>
        </div>
    )
        ;
}

async function getPokedex(id: string): Promise<PokedexModel> {
    try {
        const response = await fetch('http://localhost:8080/pokedex/' + id);
        const json = await response.json();
        return json as PokedexModel;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default Pokedex;