
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "app");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

http.createServer((req, res) => {
  const pathname = decodeURIComponent(
    new URL(req.url, "http://localhost").pathname
  );

  const relativePath =
    pathname === "/" ? "staging.html" : pathname.slice(1);

  const filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root + path.sep)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      return res.end("Not Found");
    }

    const contentType =
      mimeTypes[path.extname(filePath)] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });

}).listen(3000, () => {
  console.log("Checkout QA Practice Server");
  console.log("Staging:    http://localhost:3000/staging.html");
  console.log("Production: http://localhost:3000/production.html");
});
