import { NextFunction, Request, Response, Router } from 'express';
import contactController from '../../controllers/contactControllers';

class contactRouter {
  private _router = Router();
  private _controller = contactController;

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
    this._router.post('/', async (req: Request, res: Response, next: NextFunction) => {
      const result = await this._controller.saveContact(req.body);
      return res.status(200).json(result);
    });
  }
}

export = new contactRouter().router;
