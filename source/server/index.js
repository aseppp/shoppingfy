const express = require('express');
const router = require('./routes/index');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.json('Server working propperly');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running propperly on port ${PORT}`);
});
