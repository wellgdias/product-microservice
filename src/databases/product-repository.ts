/* eslint-disable no-underscore-dangle */
import { ServiceError } from '../business/errors';
import MongoHelper from '../helpers/mongodb/mongodb';

enum TypeCategory {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

const mapperProduct = (product : any) => ({
  _id: product._id.toString(),
  name: product.name,
  brand: product.brand,
  image: product.image,
  material: product.material,
  volume: product.volume,
  amount: product.amount,
});

async function getAll() {
  try {
    const productCollection = await MongoHelper.getCollection('products');
    const response = await productCollection.find().toArray();

    if (!response.length) {
      return { data: [] };
    }

    const products = response.map(mapperProduct);
    return { data: products };
  } catch (error) {
    throw new ServiceError(error);
  }
}

async function getByName(name: string) {
  try {
    const productCollection = await MongoHelper.getCollection('products');
    const response = await productCollection.find({ name: { $regex: name, $options: 'i' } }).toArray();

    if (!response.length) {
      return { data: [] };
    }

    const products = response.map(mapperProduct);
    return { data: products };
  } catch (error) {
    throw new ServiceError(error);
  }
}

async function getByCategory(category: string, type: string) {
  try {
    const productCollection = await MongoHelper.getCollection('products');
    let response;
    if (type === TypeCategory.FIRST) {
      response = await productCollection.find({ 'categories.first': category }).toArray();
    } else if (type === TypeCategory.SECOND) {
      response = await productCollection.find({ 'categories.second': category }).toArray();
    } else {
      response = await productCollection.find({ 'categories.third': category }).toArray();
    }

    if (!response.length) {
      return { data: [] };
    }

    const products = response.map(mapperProduct);
    return { data: products };
  } catch (error) {
    throw new ServiceError(error);
  }
}

export default { getAll, getByName, getByCategory };
