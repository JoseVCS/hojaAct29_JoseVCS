async function obtenerCategorias() {
   let resp = await fetch("https://api.publicapis.org/categories", {method: "GET", cache: 'no-cache'});
   resp = (await resp.json())
   categoria = document.getElementById("categoria");
   categoria.innerHTML = "";
   resp.forEach(element => {
      let str = "";
      str = (element.split(" "))[0];
      str = str.toLowerCase();
      categoria.innerHTML += "<option value=" + str + ">" + element + "</option>";
   });
}

async function obtenerDatos(event) {
   /* FIXME: No carga los datos. La variable categoria pierde su valor porque está recargando la página */
   event.preventDefault();
   categoria = document.getElementById("categoria").value;
   let resp = await fetch("https://api.publicapis.org/entries?category="+categoria, {method: "GET", cache: 'no-cache'});
   resp = (await resp.json()).entries;
   muestraResultados(categoria, resp);
}

function muestraResultados(categoria, resp){
   let resultado = document.getElementById("resultado");
   let totalRes = document.getElementById("totalRes");
   let txtTotal = "Total de API's encontradas con relación a la categoría elegida : <span class='etiqueta'>" + resp.length + "</span>";
   totalRes.innerHTML = txtTotal;
   resultado.innerHTML = Handlebars.templates['partials_tabla.hbs']({resp});
   resultado.className = "visible";
}

window.onload = function(){
   this.obtenerCategorias();
   document.getElementById("leerDatos").addEventListener("click", obtenerDatos);
}