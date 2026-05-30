import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = normalize(join(import.meta.dirname, ".."));
const port = Number(process.env.PORT || 5177);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml"
};

function resolvePath(url) {
  const requested = decodeURIComponent(new URL(url, `http://127.0.0.1:${port}`).pathname);
  const filePath = normalize(join(root, requested === "/" ? "index.html" : requested));
  return filePath.startsWith(root) ? filePath : join(root, "index.html");
}

createServer((request, response) => {
  const filePath = resolvePath(request.url);

  try {
    const stats = statSync(filePath);
    if (!stats.isFile()) throw new Error("Not a file");
    response.writeHead(200, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Garden planner running at http://127.0.0.1:${port}`);
});
