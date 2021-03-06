const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
// be sure to include its associated Products
    include:
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
       }
    })
    .then (CategoryData => {
      
      res.json(CategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
     // be sure to include its associated Products
    include: {
      model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then (CategoryData => {
    if (!CategoryData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.create_name
  })
  .then (CategoryData => {
    if (!CategoryData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then (CategoryData => {
    if (!CategoryData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then (CategoryData => {
    if (!CategoryData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
