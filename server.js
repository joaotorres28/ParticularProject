const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes for different services
const authRoutes = require('./Authentication/routes');
const fsmRoutes = require('./FSM/routes');
const mdRoutes = require('./MD/routes');

app.use('/auth', authRoutes);    // Authentication service
app.use('/fsm', fsmRoutes);     // File Storage Management
app.use('/md', mdRoutes);       // Master Data service

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
