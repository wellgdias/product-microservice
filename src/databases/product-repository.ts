/* eslint-disable no-underscore-dangle */
import { ServiceError } from '../business/errors';
import MongoHelper from '../helpers/mongodb/mongodb';

async function getAll() {
  try {
    const productCollection = await MongoHelper.getCollection('products');
    const response = await productCollection.find().toArray();
    const products = response.map((product) => ({ ...product, _id: product._id.toString() }));
    return products;
  } catch (error) {
    throw new ServiceError(error);
  }
}

export default { getAll };
