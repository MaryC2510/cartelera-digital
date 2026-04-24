const express = require("express");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 3000;

// 🔴 PEGA TU LINK ICS AQUÍ
const ICS_URL = "https://calendar.google.com/calendar/ical/mcalaa%40externo.isl.gob.cl/public/basic.ics";

app.use(express.static(__dirname));

app.get("/calendar", async (req, res) => {
  try {
    const response = await fetch(ICS_URL);
    const text = await response.text();

    res.set("Access-Control-Allow-Origin", "*");
    res.send(text);

  } catch (err) {
    res.status(500).send("Error cargando calendario");
  }
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});