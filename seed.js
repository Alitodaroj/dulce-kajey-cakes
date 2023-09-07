require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Items = require('./models/item');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
        {name: 'Bread', sortOrder: 10},
        {name: 'Muffin', sortOrder: 20},
        {name: 'Cupcakes', sortOrder: 30},
        {name: 'Cakepops', sortOrder: 40},
        {name: 'Cake', sortOrder: 50},
        {name: 'Drinks', sortOrder: 60},
    ])

    await Items.deleteMany({});
    const items = await Items.create([
        {name: 'Baguette', category: categories[0], price: 4.50},
        {name: 'Ciabatta', category: categories[0], price: 3.75},
        {name: 'Sourdough', category: categories[0], price: 4.99},
        {name: 'Blueberry', category: categories[1], price: 3.99},
        {name: 'Corn', category: categories[1], price: 3.99},
        {name: 'Banana', category: categories[1], price: 3.99},
        {name: 'Vanilla', category: categories[2], price: 3.99},
        {name: 'Chocolate', category: categories[2], price: 3.99},
        {name: 'Red Velvet', category: categories[2], price: 5.99},
        {name: 'Funfetti', category: categories[3], price: 1.99},
        {name: 'Strawberry Shortcake', category: categories[3], price: 2.99},
        {name: 'Butter Pecan', category: categories[3], price: 2.99},
        {name: 'Birthday Cake', category: categories[4], price: 149.99},
        {name: 'Wedding Cake', category: categories [4], price: 399.99},
        {name: 'Cake Jars', category: categories[4], price: 10.99},
        {name: 'Coffee', category: categories[5], price: 3.99},
        {name: 'Juice', category: categories[5], price: 3.99},
        {name: 'Coquito', category: categories[5], price: 11.99},
    ]);

    console.log(items)

  process.exit();
})();