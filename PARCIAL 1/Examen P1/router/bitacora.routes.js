const controller = require("../controllers/bitacora.controller");

module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/bitacora", controller.createBitacora);
  app.get("/api/bitacora", controller.getAllBitacoras);
  app.get("/api/bitacora/:bitacoraId", controller.getBitacoraById);
  app.put("/api/bitacora/:bitacoraId", controller.updateBitacora);
  app.delete("/api/bitacora/:bitacoraId", controller.deleteBitacora);
};
