import axios from "axios";
import { useEffect, useState } from "react";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // fetch("https://62948aa1a7203b3ed06b1b40.mockapi.io/items")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    axios
      .get("https://62948aa1a7203b3ed06b1b40.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://62948aa1a7203b3ed06b1b40.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://62948aa1a7203b3ed06b1b40.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62948aa1a7203b3ed06b1b40.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorite = (obj) => {
    axios.post("https://62948aa1a7203b3ed06b1b40.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value); 
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}" `
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search_icon.svg" alt="Search"></img>
            {searchValue && (
              <img
                onClick={() => setSearchValue("")}
                className="clear"
                src="/img/btn-remove.svg"
                alt="Clear"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
