const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

const { createCategory, getCategories, updateCategory, deleteCategory } =
  categoryController;

router.post("/", createCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
