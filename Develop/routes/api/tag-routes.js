const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: Product // Include associated Product
  })
  .then(tags => {
    res.json(tags);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: Product // Include associated Product
  })
  .then(tag => {
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(tag);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(tag => {
    res.status(201).json(tag);
  })
  .catch(error => {
    res.status(400).json(error);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.json({ message: 'Tag updated successfully' });
  })
  .catch(error => {
    res.status(400).json(error);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.json({ message: 'Tag deleted successfully' });
  })
  .catch(error => {
    res.status(400).json(error);
  });
});

module.exports = router;
