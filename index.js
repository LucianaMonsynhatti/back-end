const express = require("express");
const BodyParser = require("body-parser");
const app = express();

app.use(bodyParser)

app.get("/pudim", (req,res) => {
    res.send({
        sabor: "leite",
        cobertura:"caramelo",
        frescura: "extrato de baunilha"
    });
});
app.get("/teste",(req,res) => {
    res.send(("<h1> TESTE!!</h1>"));
});

app.post("/",(req,res) => {
    res.send(("recebi um POST !!!"));
});
app.listen(3000);
