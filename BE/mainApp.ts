import {Application, Request, Response} from 'express'
import rout from './router/kidsRouter'

const mainApp = (app:Application)=>{
    app.use('/api/v1', rout)
    app.get('/',(req:Request, res:Response)=>{
        try{
            res.status(200).json({
                message:"welcome to our api"
            })
        }catch(err){
            res.status(404).json({
                message:err
            })
        }
    })
}
export default mainApp;