import { NextFunction, Request, Response, Router } from 'express';
import productsController from '../../controllers/productsControllers';

class productsRouter {
  private _router = Router();
  private _controller = productsController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      const result = await this._controller.listAll(req.query.category? encodeURIComponent(req.query.category.toString()): undefined);
      return res.status(200).json(result);
    });

    this._router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
      if(!req.params.id){
        return res.status(404).send({
          message: 'product not found'
        })
      }

      const result = await this._controller.findById(req.params.id)
      return res.status(200).json(result);
    });
  }
}

export = new productsRouter().router;
