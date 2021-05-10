import getProductsService from '../../services/get-products';
import getProductsByNameService from '../../services/get-products-by-name';
import { NotFoundError } from '../errors';

export default async function getProducts(name?: string) {
  let products;
  if (!name) {
    products = await getProductsService();
  } else {
    products = await getProductsByNameService(name);
  }

  if (!products.length) {
    throw new NotFoundError('Produto não encontrado');
  }

  return products;
}
