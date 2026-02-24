const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const Product = require('./product.model.js')
const productRoute = require('./productRoute.js')

// import express from "express"
// import mongoose from "mongoose"
// import Product from "./product.model"
// import productRoute from './productRoute'

// const app=express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', productRoute)

// app.get('/', (req, res) => {
//     res.send("Hello Node js")
// })

// app.get('/api/products', async (req, res) => {

//     try {
//         const products = await Product.find({})
//         res.status(200).json(products)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })


//     }
// })
// app.get('/api/products/:id', async (req, res) => {

//     try {
//         const { id } = req.params
//         const product = await Product.findById(id)
//         res.status(200).json(product)

//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }

// })

// //update

// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Product.findByIdAndUpdate(id, req.body)
//         if (!product) {
//             res.status(404).json({ message: "product not found" })
//         }
//         const updateProduct = await Product.findById(id)
//         res.status(200).json(updateProduct)

//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })



// app.post('/api/products', async (req, res) => {
//     try {
//         const Products = await Product.create(req.body)
//         res.status(200).json(Products)
//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })

//     }

// })

// //delete

// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const product = await Product.findByIdAndDelete(id)

//         if (!product) {
//             res.status(404).json({ message: "product not found" })
//         }
//         res.status(200).json({ message: "successfully deleted" })

//     }
//     catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })

mongoose.connect("mongodb+srv://jaseenajas596_db_user:yzybg8iwSGN4PRdi@cluster0.k9zzsik.mongodb.net/Node-API?appName=Cluster0")
    .then(() => {
        console.log("database connected");
        app.listen(3000, () => {
            console.log(`server is running on port 3000`)
        })

    })
    .catch(() => {
        console.log("not connected");

    })