export default (request) => {
  const url = new URL(request.url);

  console.log(url);
  console.log(url.protocol)
  if (url.protocol === "http:") {
    url.protocol = "https:";
    return new Response(null, {
      status: 301,
      headers: { Location: url.toString() },
    });
  }

  // Let it fall through by returning nothing
  // return new Response("Hello from HTTPS!");
};

export const config = { path: "/*" };
