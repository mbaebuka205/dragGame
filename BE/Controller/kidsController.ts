import kidsModel from "../model/kidsModel"
import {Request, Response} from 'express'

export const createKids = async (req:Request, res:Response) =>{
    try{

        const {name, image} = req.body

        const kids = await kidsModel.create({name ,image})
        res.status(201).json({
            message:'created',
            data: kids
        })

    }catch(err){
       res.status(404).json({
        message:'error', err
       })
    }
}

export const viewKids = async(req:Request, res:Response) =>{
    try{

        const kids = await kidsModel.find()
        res.status(201).json({
            message:'created',
            data: kids
        })

    }catch(err){
       res.status(404).json({
        message:'error', err
       })
    }
    
}


export const viewsortedKids = async(req:Request, res:Response) =>{
    try{

        const kids = await kidsModel.find()
        .sort({name: 1})
        res.status(201).json({
            message:'created',
            data: kids
        })

    }catch(err){
       res.status(404).json({
        message:'error', err
       })
    }
    
}

export const deletekids = async(req:Request, res:Response) =>{
    try{

        const {kidsID} = req.params
        const kids = await kidsModel.deleteOne({kidsID})
        res.status(201).json({
            message:'created',
            data: kids
        })

    }catch(err){
       res.status(404).json({
        message:'error', err
       })
    }
    
}