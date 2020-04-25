const express = require("express")
    app = express()
    puerto = process.env.PORT || 8080
    handlebars = require("express-handlebars")
    principal = require("./routes/principal")
    error = require("./routes/error")
;

app.engine("hbs", handlebars({defaultLayout: "main", extname:".hbs"}))
app.set("view engine", "hbs");
app.set("titleHTML_BASE", "actividad29");
app.use(express.static("./public"))
app.use(express.urlencoded({extended: true}));
app.use("/",principal);
app.use(error);


app.listen(puerto, ()=>{console.log("Servidor en puerto ", puerto, ". CTRL+C para detener.")})