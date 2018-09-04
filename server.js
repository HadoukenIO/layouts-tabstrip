const express = require('express');
const app = express();

const PORT = 1338;
const TABSTRIP_URL = `http://localhost:${PORT}/tabstrip.html`;

app.use(express.static('build'));
app.use(express.static('res'));

console.log("Starting server...");
app.listen(PORT, async () => {
    console.log("Tabstrip server now running");
    console.log();
    console.log(`Custom tabstrip URL: ${TABSTRIP_URL}`);
});
