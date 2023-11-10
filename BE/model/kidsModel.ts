import {model, Schema, Document} from 'mongoose'

interface iKids{
    name: string;
    image: string;
}

interface ikidsData extends iKids, Document{}

const kidModel = new Schema<ikidsData>(
{
    name:{
        type:String
    },

    image:{
        type: String
    }
},

{timestamps: true}
)

export default model<ikidsData>('kids', kidModel)