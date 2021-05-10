import { products } from '../db/products';

class productsController {

  async listAll(query?: string) {
    return products.filter((product)=> !query || product.categories.includes(query))
  }

  async findById(id: string) {
    return products.find((product) => product.id === id);
  }
}

export = new productsController();
