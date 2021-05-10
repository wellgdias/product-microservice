import productRepository from '../databases/product-repository';

export default async function getProductsByName(category: string, type: string) {
  const products = await productRepository.getByCategory(category, type);
  return products;
}
