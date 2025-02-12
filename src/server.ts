import { serve } from "bun";

console.log("Starting development server...");

// Build configuration
const buildConfig = {
  entrypoints: ['./src/index.tsx'],
  outdir: './dist',
  minify: false,
  target: 'browser',
  sourcemap: 'inline',
};

// Build the application
await Bun.build(buildConfig);
console.log("✅ Built successfully");

const server = serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    console.log(`📨 Request: ${url.pathname}`);

    try {
      // Serve static files from dist directory
      if (url.pathname === "/") {
        return new Response(Bun.file("index.html"), {
          headers: { "Content-Type": "text/html" },
        });
      }

      // Try to serve from dist directory first
      const distPath = `dist${url.pathname}`;
      const distFile = Bun.file(distPath);
      if (await distFile.exists()) {
        return new Response(distFile, {
          headers: { "Content-Type": getContentType(url.pathname) },
        });
      }

      // Fallback to source directory
      const srcFile = Bun.file(url.pathname.slice(1));
      if (await srcFile.exists()) {
        return new Response(srcFile, {
          headers: { "Content-Type": getContentType(url.pathname) },
        });
      }

      // Fallback to index.html for client-side routing
      return new Response(Bun.file("index.html"), {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      console.error(`❌ Error:`, error);
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  },
});

function getContentType(path: string) {
  const ext = path.split('.').pop();
  const types: Record<string, string> = {
    html: 'text/html',
    js: 'text/javascript',
    css: 'text/css',
    tsx: 'text/javascript',
    ts: 'text/javascript',
    json: 'application/json',
  };
  return types[ext!] || 'text/plain';
}

console.log(`🚀 Server running at http://localhost:${server.port}`);