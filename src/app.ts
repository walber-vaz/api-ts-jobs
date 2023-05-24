import compression from 'compression';
import cors from 'cors';
import express, {
  type Application,
  type Request,
  type Response,
} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

class App {
  public readonly app: Application;
  constructor() {
    this.app = express();
    this.routes();
    this.middlewares();
  }

  protected middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
    this.app.use(compression());
  }

  protected routes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).json({ message: 'Hello World' });
    });
  }
}

export default new App().app;
