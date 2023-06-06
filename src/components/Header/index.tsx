import { NavLink } from "react-router-dom";
import logo from "../../assets/branding/logo.svg";
import styles from "./style.module.scss";
import Button from "../UIKit/Button";
import heartIcon from "../../assets/icons/heart-wht.svg";

const links = [
  { to: "/home", name: "Home" },
  { to: "/favorites", name: "Favorites" }
];

export default function Header(): JSX.Element {
  return (
    <div className={styles["header-wrapper"]}>
      <header className={styles.header}>
        <NavLink to="/">
          <img src={logo} alt="Cocktail Alchemy" data-testid="logo" />
        </NavLink>
        <div className={styles.links}>
          {links.map((link, idx) => (
            <NavLink
              data-testid={`link-${link.name.toLocaleLowerCase()}`}
              key={idx}
              to={link.to}
              className={({ isActive }) =>
                isActive ? `${styles.active}` : "not-active"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <NavLink to="/favorites" data-testid="fav-button-link">
          <Button
            variant="primary"
            icon={<img src={heartIcon} alt="favorites" />}
          />
        </NavLink>
      </header>
    </div>
  );
}
