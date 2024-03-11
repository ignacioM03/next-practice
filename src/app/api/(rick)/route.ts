export function GET() {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
