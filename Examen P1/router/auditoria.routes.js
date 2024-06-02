const controller = require("../controllers/auditoria.controller");

module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auditoria", controller.createAuditoria);
  app.get("/api/auditoria", controller.getAllAuditorias);
  app.get("/api/auditoria/:auditoriaId", controller.getAuditoriaById);
  app.put("/api/auditoria/:auditoriaId", controller.updateAuditoria);
  app.delete("/api/auditoria", controller.deleteAuditoriaMasiva);
  app.delete("/api/auditoria/pc/:auditoriaId", controller.deleteAuditoriaPC);
  app.delete("/api/auditoria/software/:auditoriaId", controller.deleteAuditoriaSoftware);
  app.delete("/api/auditoria/bitacora/:auditoriaId", controller.deleteAuditoriaBitacora);

};
