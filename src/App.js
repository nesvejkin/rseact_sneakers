function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3>React Sneacers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/kar.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        ...........
      </div>
    </div>
  );
}

export default App;
