import { Router } from 'express';
import getProducts from '../business/rules/get-products';

const productRouter = Router();
productRouter.get('/v1/products', async (req, res, next) => {
  const { name } = req.query;
  try {
    const response = await getProducts(name?.toString());
    res.status(200).json(response);
    return next();
  } catch (error) {
    return next(error);
  }
});

export default productRouter;
