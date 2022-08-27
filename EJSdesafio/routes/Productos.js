const express = require("express"); 
const router = express.Router(); 
const datos = require("../Contenedor/Datos")
const Productos = new datos; 


router.get("/MostrarProductos", (req,res)=>{ 
    const mostrarProductos = Productos.getAll()
    res.render("MostrarProductos", {lista:mostrarProductos})
})

router.get("/AgregarProductos", (req,res)=>{ 
    res.render("AgregarProductos")
})

router.post("/", (req,res)=>{ 
    let datos = req.body
    Productos.addOne(datos)
  res.redirect("/Productos/AgregarProductos")
 })

module.exports=router; 