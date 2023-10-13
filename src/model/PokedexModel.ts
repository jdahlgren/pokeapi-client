interface PokemonSpecies {
    name: string
}

interface PokemonEntry {
    entryNumber: number,
    pokemonSpecies: PokemonSpecies
}

export interface PokedexModel {
    name: string
    isMainSeries: boolean,
    pokemonEntries: PokemonEntry[]
}