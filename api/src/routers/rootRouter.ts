
import { Router } from 'express';
import productsRouter from './productsRouter/productsRouter';
import contactRouter from './contactRouter/contactRouter';

class MasterRouter {
  private _router = Router();
  private _subRouterProducts = productsRouter;
  private _subRouterContact = contactRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/products', this._subRouterProducts);
    this._router.use('/contact', this._subRouterContact);
  }
}

export = new MasterRouter().router;
