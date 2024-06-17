const controller = require("../controllers/pc.controller");

module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/pc", controller.createPC);
  app.get("/api/pc", controller.getAllPCs);
  app.get("/api/pc/:pcId", controller.getPCById);
  app.put("/api/pc/:pcId", controller.updatePC);
  app.delete("/api/pc/:pcId", controller.deletePC);
};
