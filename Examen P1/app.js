const express = require("express");
const cors = require("cors");

const app = express();



app.use(cors());


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.mongoose
  .connect(`mongodb://localhost:27017/app`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("CONNECTED BD.");
  })
  .catch(err => {
    console.error("ERROR AL CONECTAR LA BD", err);
    process.exit();
  });


app.get("/", (req, res) => {
  res.json({ message: "APLICACIONES INSTALADA" });
});

// RUTAS

require("./router/pc.routes")(app);
require("./router/software.routes")(app);
require("./router/bitacora.routes")(app);
require("./router/auditoria.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVIDOR INICIADO EN EL PUERTO ${PORT}.`);
});
