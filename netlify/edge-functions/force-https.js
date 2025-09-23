export default async function handler(request, context) {
  const url = new URL(request.url);

  // Redirect HTTP to HTTPS
  if (url.protocol === "http:") {
    url.protocol = "https:";
    return new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
      },
    });
  }

  // Forward to the original request (this allows normal site functionality)
  return context.next();
}
