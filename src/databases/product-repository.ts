/* eslint-disable no-underscore-dangle */
import { ServiceError } from '../business/errors';
import MongoHelper from '../helpers/mongodb/mongodb';

async function getAll() {
  try {
    const productCollection = await MongoHelper.getCollection('products');
    const response = await productCollection.find().toArray();
    const products = response.map((product) => ({
      _id: product._id.toString(),
      name: product.name,
      brand: product.brand,
      image: product.image,
      material: product.material,
      volume: product.volume,
      amount: product.amount,
    }));
    return products;
  } catch (error) {
    throw new ServiceError(error);
  }
}

async function getByName(name: string) {
  try {
    const productCollection = await MongoHelper.getCollection('products');
    const response = await productCollection.find({ name: { $regex: name, $options: 'i' } }).toArray();
    if (!response.length) {
      return [];
    }
    const products = response.map((product) => ({
      _id: product._id.toString(),
      name: product.name,
      brand: product.brand,
      image: product.image,
      material: product.material,
      volume: product.volume,
      amount: product.amount,
    }));
    return products;
  } catch (error) {
    throw new ServiceError(error);
  }
}

export default { getAll, getByName };
