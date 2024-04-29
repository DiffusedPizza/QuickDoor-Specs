const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' folder if you have one
app.use(express.static(path.join(__dirname, 'public')));

// Serve your index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});