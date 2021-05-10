import productRepository from '../databases/product-repository';

export default async function getProductsByName(name: string) {
  const products = await productRepository.getByName(name);

  return products;
}
