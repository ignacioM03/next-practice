import { useParams } from "next/navigation";

async function fetchEpisode(params: number) {
  const res = await fetch(`http://localhost:3000/api/episodes/${params}`);
  const data = await res.json();
  return data;
}

export default async function EpisodePage({ params }: any) {
  const episode = await fetchEpisode(params.id);
  console.log(episode);
  return (
    <p>{episode.name}</p>
  );
}
