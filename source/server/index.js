const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json('Server working propperly');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running propperly on port ${PORT}`);
});
