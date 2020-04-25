const router = require("express").Router();

router.get("/",(req, res)=>{
    res.status(200).render("body_main", {
        titleHTML: req.app.get("titleHTML_BASE"),
        estilos: function(){return "estilos_main"},
        scripts: function(){return "scripts_main"}
     });
});

module.exports = router;