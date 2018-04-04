import express      from 'express';
import bodyParser   from 'body-parser';
import cors         from 'cors';

import { serverPort } from './../etc/config.json';

const app = express();

// Middleware for parsing requests 
// and transform from json
app.use(bodyParser.json());

// it needs for cors
app.use(cors({origin: '*'}));

app.use(express.static('production'))

const server = app.listen(process.env.PORT || serverPort, () => {
    console.log(`Server is up and running on port: ${serverPort}`)
})