const { get } = require("https");
const proxy = require("node-global-proxy").default;

proxy.setConfig({
  http: "http://edcguest:edcguest@172.31.100.30:3128",
  https: "http://edcguest:edcguest@172.31.100.30:3128",
});

proxy.start();

get("https://www.google.com/", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk);
  });
  res.on("end", () => {
    console.log("Done loading data");
  });
});

console.log("Testing");
