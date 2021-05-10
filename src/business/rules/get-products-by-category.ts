import getProductsByCategory from '../../services/get-products-by-category';
import { NotFoundError } from '../errors';

export default async function getProducts(category: string, type: string) {
  const products = await getProductsByCategory(category, type);

  if (!products.length) {
    throw new NotFoundError('Nenhum produto encontrado para essa categoria');
  }

  return products;
}
