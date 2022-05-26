const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Моя корзина
          <img
            className="removeBtn"
            src="/img/btn-remove.svg"
            width={20}
            height={20}
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/sneakers/2.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p>Мужские кроссовки Diadora Caiman</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              width={20}
              height={20}
              alt="Remove"
            />
          </div>

          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/sneakers/2.jpg)" }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p>Купить Мужские кроссовки Diadora Caiman</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              width={20}
              height={20}
              alt="Remove"
            />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 754 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1 309 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt=" " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
