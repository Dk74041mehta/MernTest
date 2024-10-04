const express = require('express');
const app = express();
const employeesRouter = require('./routes');

app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/api', employeesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});