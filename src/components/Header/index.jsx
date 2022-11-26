import "./style.scss";
import logo from "../../assets/images/svg-icons/logo.svg";
import basket from "../../assets/images/svg-icons/basket.svg";

export const Header = () => {
  return (
    <header className="L-header-wrapper G-background">
      <div className="L-header-container G-container G-align-center G-justify-between">
        <div className="L-logo-container">
          <a
            href="#"
            className=" icon logo-icon L-header-logo G-background"
            style={{ backgroundImage: `url('${logo}')` }}
          />
        </div>

        <label htmlFor="check" className="checked-label">
          <span className="burger" />
        </label>
        <input type="checkbox" id="check" />

        <ul className=" L-header-routes-container G-flex G-justify-evenly">
          <li className="L-route-links">
            <a href="#">FAQ</a>
          </li>
          <li className="L-route-links">
            <a href="#">Оплата и доставка</a>
          </li>
          <li className="L-route-links">
            <a href="#">Возврат</a>
          </li>
          <li className="L-route-links">
            <a href="#">Исследования</a>
          </li>
          <li className="L-route-links">
            <a href="#">Личный кабинет</a>
          </li>
          <li className="L-route-links">
            <a href="tel:88(800)6000990">8 8 (800) 600-09-90</a>
          </li>
        </ul>

        <div className="L-header-basket">
          <span className="L-icon-magazine">
            <a
              className="L-basket-icon G-background"
              style={{ backgroundImage: `url(${basket})` }}
            ></a>
            <span className="L-basket-item-count   ">1</span>
          </span>
        </div>
      </div>
    </header>
  );
};
