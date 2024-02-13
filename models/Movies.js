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
const insertMany = async () => {
    try {
        //creating New Document
        const m1 = new movieModel({
            name: 'Harry Potter',
            rating: 5,
            money: 50000,
            genre: ['Fantasy', 'Action'],
            isActive: true,
            comments: [
                {value: 'Good Movie'},
            ]
        })
        const m2 = new movieModel({
            name: 'Novda',
            rating: 4,
            money: 4000,
            genre: ['Drama', 'Comedy'],
            isActive: true,
            comments: [
                {value: 'Uzbek Movie'},
            ]
        })
        const m3 = new movieModel({
            name: 'Joker',
            rating: 5,
            money: 10000,
            genre: ['Fantasy', 'Action', 'Drama'],
            isActive: false,
            comments: [
                {value: 'Oilaviy yiglab kordik'},
            ]
        })
        const m4 = new movieModel({
            name: 'The Godfather',
            rating: 5,
            money: 50000,
            genre: ['Age Restricted', 'Drama'],
            isActive: true,
            comments: [
                {value: 'Italian Mafia Movie'},
            ]
        })
        const result = await movieModel.insertMany([m1, m2, m3, m4])
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}
export {insertMany}