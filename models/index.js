// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
product.belongsTo(Category, {
foreignKey: "category_id"
});
// Categories have many Products
Category.hasMany(product, {
  foreignKey: "category_id"
});
// Products belongToMany Tags (through ProductTag)
product.belongtoMany(tag, {
  through: ProductTag,
  foreignKey: "product_id"

});
// Tags belongToMany Products (through ProductTag)
tag.belongToMany (product, {
  through: ProductTag,
  foreignKey: "tag_id"
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
