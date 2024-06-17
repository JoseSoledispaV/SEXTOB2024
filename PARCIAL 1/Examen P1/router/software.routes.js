const controller = require("../controllers/software.controller");

module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/software", controller.createSoftware);
  app.get("/api/software", controller.getAllSoftware);
  app.get("/api/software/:softwareId", controller.getSoftwareById);
  app.put("/api/software/:softwareId", controller.updateSoftware);
  app.delete("/api/software/:softwareId", controller.deleteSoftware);
};
