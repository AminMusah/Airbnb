const Product = require("../models/Product");
const cloudinary = require("../utils/cloudinary");
const fs = require("fs");

//get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

//create product
const createProduct = async (req, res) => {
  // try {
  //   let pictureFiles = req.files;
  //   //Check if files exist
  //   if (!pictureFiles)
  //     return res.status(400).json({ message: "No picture attached!" });
  //   //map through images and create a promise array using cloudinary upload function
  //   let multiplePicturePromise = pictureFiles.map((picture) =>
  //     cloudinary.v2.uploader.upload(picture.path)
  //   );
  //   // await all the cloudinary upload functions in promise.all, exactly where the magic happens
  //   let imageResponses = await Promise.all(multiplePicturePromise);

  //   const newProduct = new Product({
  //     product_name: req.body.product_name,
  //     owner: req.body.owner,
  //     photos: imageResponses,
  //     description: req.body.description,
  //     price: req.body.price,
  //   });
  //   console.log(req.file);
  //   const savedProduct = await newProduct.save();
  //   res.status(200).send(savedProduct);
  // } catch (err) {
  //   res.status(500).json({
  //     message: err.message,
  //   });
  // }

  try {
    let pictureFiles = req.files;
    // Check if files exist
    if (!pictureFiles)
      return res.status(400).json({ message: "No picture attached!" });

    let imageResponses = [];

    for (const picture of pictureFiles) {
      const imageResponse = await cloudinary.v2.uploader.upload(picture.path);
      imageResponses.push(imageResponse);
    }

    const images = imageResponses.map((url) => url.secure_url);

    const newProduct = new Product({
      product_name: req.body.product_name,
      owner: req.body.owner,
      photos: images,
      description: req.body.description,
      price: req.body.price,
    });
    const savedProduct = await newProduct.save();
    console.log(savedProduct);

    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

//get product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.id === req.body.id) {
      try {
        const updateProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateProduct);
      } catch (error) {
        res.status(401).send(error);
      }
    } else {
      res.status(401).send("You can only update your product!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product.id === req.body.id) {
      try {
        await product.delete();
        res.status(200).send("product has been deleted");
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(401).send("You can only delete your product!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProducts,
};
