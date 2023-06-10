const router = require("express").Router();
const product = require("../controllers/product");
const upload = require("../middleware/multer");

router.get("/product", product.getProducts);
router.get("/product/:id", product.getProduct);
router.post("/product", upload.array("photos", 6), product.createProduct);
router.put("/product/id", product.updateProduct);
router.delete("/product", product.deleteProduct);

module.exports = router;
