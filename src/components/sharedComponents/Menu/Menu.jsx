import s from './Menu.module.scss';
import cn from "classnames";

const Menu = ({classname}) => {
  return (
    <ul className={cn(s.menu, classname)}>
      <li><a href="/" className={s.menuLink} title="OUR SERVICES">OUR SERVICES</a></li>
      <li><a href="/" className={s.menuLink} title="ABOUT US">ABOUT US</a></li>
      <li><a href="/" className={s.menuLink} title="ARTICLES">ARTICLES</a></li>
      <li><a href="/" className={s.menuLink} title="BLOG">BLOG</a></li>
    </ul>
  );
};

export default Menu;
