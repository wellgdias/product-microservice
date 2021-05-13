import getProductsService from '../../services/get-products';
import getProductsByNameService from '../../services/get-products-by-name';

export default async function getProducts(name?: string) {
  let products;
  if (!name) {
    products = await getProductsService();
  } else {
    products = await getProductsByNameService(name);
  }

  return products;
}
