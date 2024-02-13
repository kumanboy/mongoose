import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    rating: {type: Number, required: true, min: 1, max: 5},
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: v => v >= 10
    },
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [{value: {type: String}, published: {type: Date, default: Date.now}}]
})

//Creating Model

const movieModel = mongoose.model('Movie', movieSchema)
const updateById = async (id) => {
    try {
        //creating New Document
        const result = await movieModel.updateOne(
            {_id: id},
            {name: "Avengers"}
        )
    } catch (error) {
        console.log(error)
    }
}
export {updateById}