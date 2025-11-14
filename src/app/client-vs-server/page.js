import PokemonList from "./PokemonList";

export default function ClientVsServerPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-bold">
          Client vs Server Component Demo
        </h1>

        <h2 className="mb-4 text-2xl font-semibold">
          Server Component: Pokémon List
        </h2>
        <PokemonList />

        <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
          The list above is rendered on the server. Interactions (like “Catch”)
          use a client component.
        </p>
      </div>
    </section>
  );
}
