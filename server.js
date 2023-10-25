const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien aus dem aktuellen Verzeichnis bedienen
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
