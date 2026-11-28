const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "app");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript" };

http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = path.join(root, requested);

  if (!filePath.startsWith(root)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end("Not Found"); return; }
    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(3000, () => console.log("Calculator available at http://localhost:3000"));
