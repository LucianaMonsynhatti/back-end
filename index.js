const express = require("express");

const app = express();
app.get("/pudim", (req,res) => {
    res.send({
        sabor: "leite",
        cobertura:"caramelo",
        frescura: "extrato de baunilha"
    });
});

app.listen(3000);