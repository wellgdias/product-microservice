import productRepository from '../databases/product-repository';

export default async function getProductsById(id: string[]) {
  const products = await productRepository.getById(id);
  return products;
}
