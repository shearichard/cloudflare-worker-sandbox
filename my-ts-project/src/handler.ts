export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`The request method was : ${request.method}`)
}
