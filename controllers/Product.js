const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");

const getAllProducts = catchAsync(async (req, res) => {
    const products = await Product.find();
    
    res.status(200).json({
        status: "ok",
        data: products,
    });
});

const addProduct = catchAsync(async (req, res) => {
    let newProduct = new Product();
    newProduct.name = req.body.name;
    newProduct.price = req.body.price;
    newProduct.unit = req.body.unit;
    newProduct.inventory = req.body.inventory;
    newProduct = await newProduct.save();
    res.status(200).json({
        status: "ok",
        dataInserted: newProduct,
    });
});

module.exports = {
    getAllProducts,
    addProduct,
}

