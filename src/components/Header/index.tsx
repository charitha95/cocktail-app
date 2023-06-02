import { NavLink } from "react-router-dom";
import logo from "../../assets/branding/logo.svg";
import classes from "./style.module.scss";
import Button from "../UIKit/Button";
import heatIcon from "../../assets/icons/heart-wht.svg";

export default function Header(): JSX.Element {
  const links = [
    { to: "/home", name: "Home" },
    { to: "/favorites", name: "Favorites" }
  ];

  return (
    <div className={classes["header-wrapper"]}>
      <header className={classes.header}>
        <NavLink to="/">
          <img src={logo} alt="Cocktail Alchemy" />
        </NavLink>
        <div className={classes.links}>
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              className={({ isActive }) =>
                isActive ? `${classes.active}` : ""
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div>
          <Button
            variant="primary"
            icon={<img src={heatIcon} alt="favorites" />}
          />
        </div>
      </header>
    </div>
  );
}
