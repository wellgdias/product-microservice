import getProductsByCategory from '../../services/get-products-by-category';

export default async function getProducts(category: string, type: string) {
  const products = await getProductsByCategory(category, type);
  return products;
}
