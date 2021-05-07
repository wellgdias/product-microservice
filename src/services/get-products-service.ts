import productRepository from '../databases/product-repository';

export default async function getProducts() {
  const products = await productRepository.getAll();
  return products;
}
