import { Producto, newUID, FacturaTotal } from "./index";

describe("Functions Factura", () => {
    test('La funcion newCode debe devolver String', () => {
        const resultExpected = expect.any(String)
        let result: string;

        result = newUID();

        expect(result).toEqual(resultExpected);
    });

    test('La funcion Producto debe devolver String si el nombre es String', () => {
        const product : Producto={
            id: newUID(),
            nombre: "Arroz",
            precio: 25
        }
        
        const resultExpected = expect.any(String)
        let result: string;

        result = product.nombre;

        expect(result).toEqual(resultExpected);
    });
    test('La funcion Producto debe devolver String si el nombre es String', () => {
        const product : Producto={
            id: newUID(),
            nombre: "Arroz",
            precio: 25
        }
        
        const resultExpected = expect.any(String)
        let result: string;

        result = product.nombre;

        expect(result).toEqual(resultExpected);
    });
    test('La funcion Factura total debe devolver Number si todos sus campos son de tipo Number', () => {
        const facturatotal : FacturaTotal={
            totalProductos: 5,
            subTotal: 4,
            total: 5
        }
        
        const resultExpected = expect.any(Number)
        let result: number;

        result = facturatotal.total;

        expect(result).toEqual(resultExpected);
    });
});
