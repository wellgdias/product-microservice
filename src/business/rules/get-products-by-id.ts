import getProductsById from '../../services/get-products-by-id';

export default async function getProducts(id: string[]) {
  const products = await getProductsById(id);
  return products;
}
