import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'> All Meetups </Link>
          </li>
          <li>
            <Link to='/new-meetup'> Add Meetups </Link>
          </li>
          <li>
            <Link to='/favorites'>
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
