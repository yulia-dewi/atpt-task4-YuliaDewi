import test, { expect } from "playwright/test";
import { productService } from "../../api/service/mockio/product.service";

test.describe.configure({ mode: 'serial' });

test.describe('Chain API test', () => {
    const ProductService: productService = new productService();
    let ProductId: number;

    test('get product by id', async () => {
        const {data , status} = await ProductService.getProductById(6);
        expect(status).toBe(404);
        expect(data).toEqual("Not found");
    })

    test('add product', async () => {
        const {data , status} = await ProductService.addProduct(
            "Jaket",
            100,
            "Pakaian"
        );
        expect(status).toBe(201);
        expect(data.title).toEqual("Jaket");
        expect(data.price).toEqual(100);
        expect(data.category).toEqual("Pakaian");
        ProductId = data.id;
    })

    test('get product by id after add product', async () => {
        const {data , status} = await ProductService.getProductById(ProductId);
        expect(status).toBe(200);
        expect(data.title).toEqual("Jaket");
        expect(data.price).toEqual(100);
        expect(data.category).toEqual("Pakaian");
    })

    test('update product', async () => {
        const {data , status} = await ProductService.updateProduct(
            ProductId,
            "Sepeda",
            1000,
            "Kendaraan"
        );
        expect(status).toBe(200);
        expect(data.title).toEqual("Sepeda");
        expect(data.price).toEqual(1000);
        expect(data.category).toEqual("Kendaraan");
    })

    test('get product by id after update product', async () => {
        const {data , status} = await ProductService.getProductById(ProductId);
        expect(status).toBe(200);
        expect(data.title).toEqual("Sepeda");
        expect(data.price).toEqual(1000);
        expect(data.category).toEqual("Kendaraan");
    })

    test('delete product', async () => {
        const {data , status} = await ProductService.deleteProduct(ProductId);
        expect(status).toBe(200);
        expect(data.title).toEqual("Sepeda");
        expect(data.price).toEqual(1000);
        expect(data.category).toEqual("Kendaraan");
    })

    test('get product by id after delete', async () => {
        const {data , status} = await ProductService.getProductById(ProductId);
        expect(status).toBe(404);
        expect(data).toEqual("Not found");
    })
})