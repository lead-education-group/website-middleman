export default async function handler(request) {
  const url = new URL(request.url);

  if (url.protocol === "http:") {
    url.protocol = "https:";
    return new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
      },
    });
  }

  return fetch(request);
}
