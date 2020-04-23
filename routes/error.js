const express = require("express"),
      error = express.Router();

// 404
error.use((req, res)=>{
   res.status(404).render("error", {
      layout: "error_main",
      titleHTML: req.app.get("titleHTML_BASE") + " - Error 404",
      estilos: function(){return "estilos_error"},
      errorhbs: function() {return "404"},
      error: req.protocol + "//" + req.get("host") + req.originalUrl
   });
});

// 500
error.use((err, req, res, next)=>{
   res.status(500).render("error", {
      layout: "error_main",
      titleHTML: req.app.get("titleHTML_BASE") + " - Error 500",
      estilos: function(){return "estilos_error"},
      errorhbs: function() {return "500"},
      error: req.protocol + "//" + req.get("host") + req.originalUrl
   });
})

module.exports = error;
