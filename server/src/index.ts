import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
class Server {
public  app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000); /* si hay puerto utilicelo si no el 3000 */
        this.app.use(morgan('dev'));/* nos deja ver en la consola las peticiones get porst etc */
        this.app.use(cors());
        this.app.use(express.json());/* el servidor entiende los formatos json */
        this.app.use(express.urlencoded({extended: false}));/* enviar un html */
    }
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);
    }
    start(): void {  /* inicializa  el servidor */
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
                        
        });
    } 
}

const server = new Server(); /* donde guardo objeto  */
server.start();