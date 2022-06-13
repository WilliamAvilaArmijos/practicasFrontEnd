export const newUID = (): string => Math.random().toString(36).slice(2)

export interface Producto{
    id: string;
    nombre: string;
    precio: number;
}

interface ProductoFactura extends Producto{
    cantidad: number;
    precioTotal?: number;
}

export interface FacturaTotal {
    totalProductos: number;
    subTotal: number;
    total: number;
}

interface IFactura{
    id: string;
    products: ProductoFactura[];
    iva: number;
    addProduct: (product:ProductoFactura) => void;
    getTotalFactura: () => FacturaTotal;
}

class Factura implements IFactura{
    id: string
    products: ProductoFactura[]
    iva: number

    constructor(id: string){
        this.id= id
        this.products = []
        this.iva = 0.12
    }
    addProduct(product: ProductoFactura) {
        const indexPos: number = this.findIndexProduct(product)
        if(indexPos>=0){
            this.products[indexPos].cantidad += product.cantidad
        }else
            this.products.push({...product})
        console.log(`Producto Agregado: ${product.nombre} - Cantidad: ${product.cantidad} `)
    }

    findIndexProduct({id}: ProductoFactura):number{
        return this.products.findIndex(product => product.id == id)
    }
    getTotalFactura(): FacturaTotal{
        const subTotal = this.products.reduce((acc:number, item:ProductoFactura)=>
            acc+(item.precio*item.cantidad),0)
        const totalProductos = this.products.reduce((acc:number, item:ProductoFactura)=>
            acc+item.cantidad,0)
    console.log("Productos Factura",[...this.products])
    return{
        totalProductos,
        subTotal,
        total: subTotal+(subTotal*this.iva),
    }
    }
}

const products: Producto[] = [
    {
        id: newUID(),
        nombre: "Arroz",
        precio: 25
    },
    {
        id: newUID(),
        nombre: "Harina",
        precio: 10
    },
    {
        id: newUID(),
        nombre: "Arroz",
        precio: 25
    }
]

const factura = new Factura(newUID())

factura.addProduct({
    ...products[0],
    cantidad: 2,
})

factura.addProduct({
    ...products[1],
    cantidad: 2,
})

factura.addProduct({
    ...products[2],
    cantidad: 2,
})

console.log("-----------------")
console.log(
    "Total Factura", factura.getTotalFactura()
)