const baseUrl = "https://rickandmortyapi.com/api/location";

export async function GET() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return new Response(JSON.stringify(data));
}

export async function POST() {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return new Response(JSON.stringify(data));
}
