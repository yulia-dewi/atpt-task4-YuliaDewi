import { mockioContext } from "../../context/mockio.context";

export class productService {
    async getAllProduct() {
        try {
            const context = await mockioContext();
            const response = await context.get(`product`);

            const data = await response.json();
            const status = response.status();

            return {
                data: data,
                status: status
            };
        } catch (e) {
            throw e;
        }
    }

    async getProductById(productId: number) {
        try {
            const context = await mockioContext();
            const response = await context.get(`product/${productId}`);

            const data = await response.json();
            const status = response.status();

            return {
                data: data,
                status: status
            };
        } catch (e) {
            throw e;
        }
    }

    async addProduct(title: string, price: number, category: string) {
        try {
            const context = await mockioContext();
            const response = await context.post(`product`, {
                data: {
                    title: title,
                    price: price,
                    category: category
                }
            });

            const data = await response.json();
            const status = response.status();

            return {
                data: data,
                status: status
            };
        } catch (e) {
            throw e;
        }
    }

    async updateProduct(productId: number, title: string, price: number, category: string) {
        try {
            const context = await mockioContext();
            const response = await context.put(`product/${productId}`, {
                data: {
                    title: title,
                    price: price,
                    category: category
                }
            });

            const data = await response.json();
            const status = response.status();

            return {
                data: data,
                status: status
            };
        } catch (e) {
            throw e;
        }
    }

    async deleteProduct(productId: number) {
        try {
            const context = await mockioContext();
            const response = await context.delete(`product/${productId}`);

            const data = await response.json();
            const status = response.status();

            return {
                data: data,
                status: status
            };
        } catch (e) {
            throw e;
        }
    }
}