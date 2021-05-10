import { Router } from 'express';
import getProducts from '../business/rules/get-products';
import getProductsByCategory from '../business/rules/get-products-by-category';

const productRouter = Router();
productRouter.get('/v1/products', async (req, res, next) => {
  const { name, category, type } = req.query;
  try {
    let response;
    if (!category || !type) {
      response = await getProducts(name?.toString());
    } else {
      response = await getProductsByCategory(category.toString(), type?.toString());
    }
    res.status(200).json(response);
    return next();
  } catch (error) {
    return next(error);
  }
});

export default productRouter;
