const mongoose = require('../db/conn')
const {Schema} = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema({
        name:{
            type:String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        },
        weight:{
            type: Number,
            required:true,
        },
        color:{
            type: String,
        },
        images:{
            type: Array,
            required:true,
        },
        available:{
            type: Boolean,
        },
        user: Object,
        adopter: Object,
    },
    {timestamps: true}, //timestamp, toda vez que um registro for criado/atualizado ele marca o dia
    ),
)

module.exports = Pet