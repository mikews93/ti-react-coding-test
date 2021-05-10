import { products } from '../db/products';

interface Contact {
  firstName: string
  lastName: string
  email: string
  subject: string
}

class productsController {

  async saveContact(data: Contact) {
    console.log({ contact: data });
    return data;
  }
}

export = new productsController();
