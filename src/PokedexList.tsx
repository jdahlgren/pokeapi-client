import React, {useEffect, useState} from 'react';
import './App.css';
import {PokedexListModel} from "./model/PokedexListModel";

function PokedexList() {
    const [pokedexes, setPokedexes] = useState<PokedexListModel>({pokedexListResults: []});
    useEffect(() => {
        getPokedexes().then(r => setPokedexes(r))
    }, []);
    const pokedexNames = pokedexes.pokedexListResults.map((result, index) => <li key={index}>{result.name}</li>);
    return (
        <div className="PokedexList">
            <header className="App-header">
                <ul>{pokedexNames}</ul>
            </header>
        </div>
    )
        ;
}

async function getPokedexes(): Promise<PokedexListModel> {
    try {
        const response = await fetch('http://localhost:8080/pokedex');
        const json = await response.json();
        return json as PokedexListModel;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default PokedexList;