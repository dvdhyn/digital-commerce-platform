const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll({
    include: [
      { model: Category },
      { model: Tag }
    ]
  })
    .then(products => {
      res.json(products);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findByPk(req.params.id, {
    include: [
      { model: Category }, // Include associated Category
      { model: Tag } // Include associated Tag
    ]
  })
    .then(product => {
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
      res.json(product);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  const { product_name, price, stock } = req.body;
  if (!product_name || !price || !stock) {
    return res.status(400).json({ error: 'Product name, price, and stock are required' });
  }
  if (typeof product_name !== 'string' || typeof price !== 'number' || typeof stock !== 'number') {
    return res.status(400).json({ error: 'Invalid data types for product_name, price, or stock' });
  }
  Product.create(req.body)
    .then(product => {
      res.status(201).json({ message: 'Product created successfully', product });
    })
    .catch(error => {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'An error occurred while creating the product' });
    });
});


// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      product_id: req.params.id,
    },
  })
    .then((product) => {
      return res.json(product);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      product_id: req.params.id
    }
  })
    .then(() => res.json({ message: 'Product deleted successfully' }))
    .catch(error => {
      console.log(error);
      res.status(400).json(error);
    });
});

module.exports = router;
