export async function POST(request: Request) {
  const { url } = await request.json()
  
  const res = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url: url })
  })

  const data = await res.json()

  return Response.json(data)
}