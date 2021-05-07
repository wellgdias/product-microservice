import getProductsService from '../../services/get-products-service';

export default async function getProducts() {
  const products = await getProductsService();
  return products;
}
