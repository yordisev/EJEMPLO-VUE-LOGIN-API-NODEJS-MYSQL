const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
app.use(express.urlencoded());



app.use(cors());

app.use(express.json());
app.use(routes);
// Handling Errors
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        message: err.message,
        renovartoken:"tokenexpirado"
        
    });
});


app.listen(3000, () => console.log('Server is running on port 3000'));