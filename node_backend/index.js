const { pool } = require("./db");
const cors = require('cors');
var express = require("express");
var app = express();
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
 app.get('/enderecos/:rua/:numero', (request, response, next) => {
    const rua  = request.params.rua;
    const numero  = request.params.numero;
    pool.query("SELECT * FROM endereco WHERE rua = $1 and numero = $2", [rua,numero], (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
   });
app.listen(8080, () => {
 console.log("Server running on port 8080");
});
