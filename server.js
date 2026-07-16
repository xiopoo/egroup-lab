const fs = require("fs");
const path = require("path");

const root = fs.existsSync(path.join(__dirname, "dist"))
  ? path.join(__dirname, "dist")
  : path.join(__dirname, "website", "public");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon"
};

function resolveFile(urlPath) {
  let pathname = decodeURIComponent((urlPath || "/").split("?")[0]);
  if (pathname === "/") pathname = "/index.html";

  const candidates = [pathname];
  if (!path.extname(pathname)) {
    candidates.push(`${pathname}.html`);
    candidates.push(path.join(pathname, "index.html"));
  }

  for (const candidate of candidates) {
    const file = path.normalize(path.join(root, candidate));
    if (!file.startsWith(root)) continue;
    if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }

  return path.join(root, "404.html");
}

module.exports = function handler(req, res) {
  const file = resolveFile(req.url);
  const ext = path.extname(file);
  const status = path.basename(file) === "404.html" && !req.url.includes("404.html") ? 404 : 200;

  res.statusCode = status;
  res.setHeader("Content-Type", types[ext] || "application/octet-stream");
  fs.createReadStream(file).pipe(res);
};
