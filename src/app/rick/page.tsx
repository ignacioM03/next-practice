import CustomSelect from "@/components/CustomSelect/CustomSelect";

async function fetchEpisodes() {
  const res = await fetch("http://localhost:3000/api/episodes");
  const data = await res.json();
  return data;
}

async function fetchLocations() {
  const res = await fetch("http://localhost:3000/api/locations");
  const data = await res.json();
  return data;
}

async function fetchCharacters() {
  const res = await fetch("http://localhost:3000/api/characters");
  const data = await res.json();
  return data;
}

export default async function RickPage() {
  const episodes = await fetchEpisodes();
  const locations = await fetchLocations();
  const characters = await fetchCharacters();
  return (
    <>
      <div className="container">
        <h1 className="text-3xl font-bold text-center p-4">Rick and Morty </h1>
        <hr className="mb-4" />
        <div className="container">
          <CustomSelect />
        </div>
      </div>
    </>
  );
}
