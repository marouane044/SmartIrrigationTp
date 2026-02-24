const express = require('express');
const sensorRoutes = require('./routes/sensor');
const batteryRoutes = require('./routes/battery');

const app = express();
app.use(express.json());

app.use('/sensors', sensorRoutes);
app.use('/battery', batteryRoutes);

app.listen(3002, () => {
    console.log("Server running on port 3000");
});
