import s from './Menu.module.scss';
import cn from "classnames";

const Menu = ({classname}) => {
  return (
    <ul className={cn(s.menu, classname)}>
      <li><a href="#services" className={s.menuLink}>OUR SERVICES</a></li>
      <li><a href="#about" className={s.menuLink}>ABOUT US</a></li>
      <li><a href="#articles" className={s.menuLink}>ARTICLES</a></li>
      <li><a href="https://www.itparadigma.ru/blog/" target='_blanc' className={s.menuLink}>BLOG</a></li>
    </ul>
  );
};

export default Menu;
