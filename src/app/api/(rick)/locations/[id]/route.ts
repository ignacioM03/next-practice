const baseUrl = "https://rickandmortyapi.com/api/location";

interface Params {
  id: number;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const response = await fetch(`${baseUrl}/${params.id}`);
  const data = await response.json();
  return new Response(JSON.stringify(data));
}
