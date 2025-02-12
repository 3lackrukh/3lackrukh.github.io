const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    
    // Log incoming request
    console.log(`Request received: ${url.pathname}`);

    // Serve static files from public directory
    if (url.pathname.startsWith("/public")) {
      const filePath = url.pathname.slice(7); // Remove "/public"
      return new Response(Bun.file(`public/${filePath}`));
    }

    // For all other routes, serve index.html
    return new Response(Bun.file("index.html"));
  },
});

console.log(`Server running at http://localhost:${server.port}`);