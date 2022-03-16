import fs from "fs";
export const productos = [];
export default { productos }

//Implementar programa que contenga una clase llama Archivo
class Archivo {
    //Reciba el nombre por parámetro
    constructor(nombre) {
        this.nombre = nombre;
    }
    //Implemente método leer
    //Con el método leer se mostrará en consola el listado total (si el archivo existe) como un array de productos. Si el archivo no existe, se retornará un array vacío.
    //Utilizando promesas con async await y manejo de errores
    async leer() {
        try {
            const content = await fs.promises.readFile(this.nombre, "utf-8");
            if (content) return console.info(content);
        } catch (error) {
            console.error([]);
        }
    }
    //Implemente método guardar
    //Utilizando promesas con async await y manejo de errores
    async guardar(producto) {
        try {
            //La función guardar incorporará al producto un id, el cual se obtendrá de la longitud total del array actual más 1
            producto.id = productos.length + 1;
            //Utilizar guardar para incorporar productos al archivo "productos.txt"
            productos.push(producto);
            await fs.promises.writeFile(this.nombre, JSON.stringify(productos));
        } catch (error) {
            console.error(`No se pudo leer el archivo. Error: ${error}`);
        }
    }
    //Implemente método borrar
    //Utilizando promesas con async await y manejo de errores
    async borrar() {
        try {
            //El método borrar elimina el archivo completo
            fs.unlink(this.nombre, err => console.error(`El archivo no existe. ${err}`));
        } catch (error) {
            console.error(`Ocurrió un error. Error: ${error}`);
        }
    }
}

const archivo = new Archivo("productos.txt");

//El formato de cada producto
archivo.guardar({ title: "Producto1", price: 100, thumbnail: "URLProducto1" });
archivo.guardar({ title: "Producto2", price: 200, thumbnail: "URLProducto2" });
archivo.guardar({ title: "Producto3", price: 300, thumbnail: "URLProducto3" });
archivo.leer();