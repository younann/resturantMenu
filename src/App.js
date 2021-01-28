import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categories from './components/Categories';
import Menu from './components/Menu';
import menu from './components/data';
import items from './components/data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    let wanted = items;
    if (category === 'all') {
      setMenuItems(wanted);
    } else {
      wanted = items.filter((item) => item.category === category);
      setMenuItems(wanted);
    }
  };

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Resturan Name - Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}

export default App;
