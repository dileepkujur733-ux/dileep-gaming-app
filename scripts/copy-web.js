const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const www = path.join(root, "www");

fs.mkdirSync(www, { recursive: true });

for (const name of ["index.html", "payment-qr.jpg"]) {
  const source = path.join(root, name);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, path.join(www, name));
  }
}

if (!fs.existsSync(path.join(www, "index.html"))) {
  throw new Error("index.html is missing");
}
