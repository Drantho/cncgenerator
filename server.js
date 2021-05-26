const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const path = require('path');
const compression = require("compression");

const routes = require("./controllers/routes.js");

app.use(cors());
app.use(compression());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cnc", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});