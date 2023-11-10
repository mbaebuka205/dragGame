import express,{Application} from 'express'
import cors from 'cors'
import { dbConnect } from './utils/dbConfig';
import mainApp from './mainApp';

const port: number = 2005;
const app:Application = express()

app.use(express.json())
app.use(cors())
mainApp(app)

const server = app.listen(port, () =>{
    console.log('server is ready')

    dbConnect()
})

process.on('uncaughtException', (err:Error)=>{
   console.log('uncaughtException', err)
   process.exit(1)
})

process.on('rejectionHandled', (reason: any) =>{
     console.log('rejectionHandled', reason);
     server.close(()=>{
        process.exit(1)
     })
})