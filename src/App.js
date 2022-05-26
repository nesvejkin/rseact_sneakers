import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search_icon.svg" alt="Search"></img>
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default App;
