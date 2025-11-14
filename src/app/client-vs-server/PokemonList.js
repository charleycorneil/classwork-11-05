import CatchButton from "./CatchButton";

export default async function PokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6", {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <ul className="space-y-4">
      {data.results.map((pokemon) => (
        <li
          key={pokemon.name}
          className="flex items-center justify-between p-4 border rounded shadow-sm capitalize"
        >
          <span className="font-semibold capitalize">{pokemon.name}</span>
          <CatchButton pokemonName={pokemon.name} />
        </li>
      ))}
    </ul>
  );
}
