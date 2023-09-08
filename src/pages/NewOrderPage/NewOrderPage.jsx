import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCat, setActiveCat] = useState([]);
    const [cart, setCart] = useState([null]);
    const categoriesRef = useRef([]);

    useEffect(function() {
      async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = [...new Set(items.map(item => item.category.name))];
        setMenuItems(items);
        setActiveCat(categoriesRef.current[0])
}
      getItems();

async function getCart() {
  const cart = await ordersAPI.getCart();
  setCart(cart);
}   
getCart();   
}, []);

async function handleAddToOrder(itemId) {
 // 1. Call the addItemToCart function in ordersAPI, passing to it the itemId, and assign the resolved promise to a variable named cart.
  const updatedCart = await ordersAPI.addItemToCart(itemId); 
   // 2. Update the cart state with the updated cart received from the server
  setCart(updatedCart);
};
    return (
      <main className="NewOrderPage">
        <aside>
          <Logo />
          <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
      <UserLogOut user={user} setUser={setUser} />
    </aside>
    <MenuList
      menuItems={menuItems.filter(item => item.category.name === activeCat)}
      handleAddToOrder={handleAddToOrder}
    />
  <OrderDetail order ={cart}/>
</main>
    )
  }

