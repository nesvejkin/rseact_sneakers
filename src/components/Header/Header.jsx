const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt=" " />
        <div>
          <h3 className="text-uppercase">React Sneacers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/kar.svg" alt=" " />
          <span>1205 руб.</span>
        </li>

        <li className="mr-20 cu-p">
          <img width={21} height={21} src="/img/heart-liked.svg" alt=" " />
        </li>

        <li>
          <img width={18} height={18} src="/img/user.svg" alt=" " />
        </li>
      </ul>
    </header>
  );
};

export default Header;
