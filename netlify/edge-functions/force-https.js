import type { Context } from "https://edge.netlify.com";

export default async (req: Request, context: Context) => {
  const url = new URL(req.url);

  // If the request is HTTP, redirect to HTTPS
  if (url.protocol === "http:") {
    url.protocol = "https:";
    return Response.redirect(null, {
      status: 301,
      headers: {
        Location: url.toString(),
      },
    });
  }
};
