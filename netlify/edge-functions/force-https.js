export default async (request) => {
  const url = new URL(request.url);

  // If the request is HTTP, redirect to HTTPS
  if (url.protocol === "http:") {
    url.protocol = "https:";
    return new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
      },
    });
  }

  // Otherwise continue as normal
  return fetch(request);
};
