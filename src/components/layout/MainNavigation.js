import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>SE Factory Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/react-meetings"> All Meetups </Link>
          </li>
          <li>
            <Link to="/react-meetings/new-meetup"> Add Meetups </Link>
          </li>
          <li>
            <Link to="/react-meetings/favorites">
              My Favorite Meetups
              <span className={classes.badge}>{favCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
