const handlers = require("./handlers");

const router = (req, res) => {
  if (req.url === "/") {
    req.url = "/public/index.html";
  }
  console.log("Received URL: ", req.url);
  if (req.url.startsWith("/public")) {
    handlers.staticAssets(req, res);
  } else if (req.url === "/postSVG") {
    handlers.postSVG(req, res);
  } else {
    handlers.notFound(req, res);
  }
};

module.exports = router;