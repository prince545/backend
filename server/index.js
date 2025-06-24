const express = require('express');
const app = express();
const foodRoutes = require('./routes/foods');

app.use(express.json());
app.use('/api/foods', foodRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
