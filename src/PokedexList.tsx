import React, {useEffect, useState} from 'react';
import './App.css';
import {PokedexListModel} from "./model/PokedexListModel";
import {Link} from "react-router-dom";

function PokedexList() {
    const [pokedexes, setPokedexes] = useState<PokedexListModel>({pokedexListResults: []});
    useEffect(() => {
        getPokedexes().then(r => setPokedexes(r))
    }, []);
    const pokedexNames = pokedexes.pokedexListResults
        .map((result, index) => <li key={index}><Link to={result.name}> {result.name}</Link></li>);
    return (
        <div className="PokedexList">
            <header className="App-header">
                <h2>List of pokedex</h2>
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