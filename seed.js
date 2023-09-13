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
        {name: 'Baguette', img: 'https://static.toiimg.com/photo/76545839.cms', category: categories[0], price: 4.50},
        {name: 'Ciabatta', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ciabatta_cut.JPG/800px-Ciabatta_cut.JPG', category: categories[0], price: 3.75},
        {name: 'Sourdough', img: 'https://makeitdough.com/wp-content/uploads/2022/12/Basic-Sourdough-14-1.jpg',category: categories[0], price: 4.99},
        {name: 'Blueberry', img: 'https://www.allrecipes.com/thmb/7JM6ev8saEJ8zh2lg_t3hjDv_wM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/662790-42748a55c35047ba93ce1186d97f2e6c.jpg',category: categories[1], price: 3.99},
        {name: 'Corn', img: 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Corn-Muffins-009s2.jpg',category: categories[1], price: 3.99},
        {name: 'Banana', img: 'https://www.allrecipes.com/thmb/20_0F0-0D8-GPFXQmzT28-He2O4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/42719-banana-muffins-dianne-1x1-1-793fa50915f646dca14efff860760200.jpg',category: categories[1], price: 3.99},
        {name: 'Vanilla', img: 'https://i.imgur.com/onAt55F.png', category: categories[2], price: 3.99},
        {name: 'Chocolate', img: 'https://i.imgur.com/SFnA6Anl.png', category: categories[2], price: 3.99},
        {name: 'Red Velvet', img: 'https://thetoastykitchen.com/wp-content/uploads/2022/12/mini-red-velvet-cupcakes-closeup.jpg',category: categories[2], price: 5.99},
        {name: 'Funfetti', img: 'https://preppykitchen.com/wp-content/uploads/2021/10/Cake-Pops-Recipe-480x270.jpg', category: categories[3], price: 1.99},
        {name: 'Strawberry Shortcake', img: 'https://i.imgur.com/j36AX4El.png', category: categories[3], price: 2.99},
        {name: 'Butter Pecan', img: 'https://i.imgur.com/eVpfFpC.jpg', category: categories[3], price: 2.99},
        {name: 'Birthday Cake', img: 'https://i.imgur.com/r6DN99b.jpg', category: categories[4], price: 149.99},
        {name: 'Wedding Cake', img: 'https://i.imgur.com/crsZ9WE.jpg', category: categories [4], price: 399.99},
        {name: 'Cake Jars', img: 'https://i.imgur.com/7cSdUkl.jpg', category: categories[4], price: 10.99},
        {name: 'Coffee', img: 'https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg', category: categories[5], price: 3.99},
        {name: 'Juice', img: 'https://www.freshfarms.com/wp-content/uploads/2022/10/80.jpg', category: categories[5], price: 3.99},
        {name: 'Coquito', img: 'https://hips.hearstapps.com/hmg-prod/images/coquito-1666882790.jpg?crop=0.894xw:0.597xh;0.106xw,0.255xh&resize=1200:*', category: categories[5], price: 11.99},
    ]);

    console.log(items)

  process.exit();
})();