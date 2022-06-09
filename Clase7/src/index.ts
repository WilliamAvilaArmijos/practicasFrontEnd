const newUID = (): string => Math.random().toString(36).slice(2)
interface Producto{
    id: string;
    nombreProducto: string;
    precio: number;
}

interface productoVenta extends Producto{
    cantidad: number,
    subtotal: number,
    total: number
}

const productoArroz: productoVenta = {
    id: newUID(),
    nombreProducto: "Arroz",
    precio: 30,
    cantidad: 2,
    subtotal: 52.80,
    total: 60
}

const productoAtun: productoVenta = {
    id: newUID(),
    nombreProducto: "Atun",
    precio: 2,
    cantidad: 2,
    subtotal: 52.80,
    total: 60
}

class Factura{
    prod: productoVenta[];
    constructor(){
        this.prod = [];
    }
    agregarProductos(produ: productoVenta){
        this.prod.push(produ);
    }

    calcularTotalProductos(produ: productoVenta){
        let totalpro += produ.cantidad
        return totalpro
    }

}

const factura = new Factura();
factura.agregarProductos(productoArroz)
factura.agregarProductos(productoAtun)

console.log("              Factura")
console.log("Cantidad" +" "+  "Nombre" +" "+  "Precio" +" "+  "Subtotal" +" "+  "Total")
console.log(productoArroz.cantidad+ "         " +productoArroz.nombreProducto + "   " + productoArroz.precio+ "     " +productoArroz.subtotal+ "      " +productoArroz.total)
console.log(productoAtun.cantidad+ "         " +productoAtun.nombreProducto + "   " + productoAtun.precio+ "     " +productoAtun.subtotal+ "      " +productoAtun.total)
